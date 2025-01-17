import { updateData } from "../api/Api";
import { TILE_DENSITIES, TILE_TYPES } from "./constants";

export const generateRandomBoard = (rows, cols) => {
  const totalTiles = rows * cols;
  const tileCounts = {};

  // Calculate the count for each type based on density
  for (const [type, density] of Object.entries(TILE_DENSITIES)) {
    tileCounts[type] = Math.floor(density * totalTiles);
  }

  // Create a flat list of tiles based on their counts
  let tilePool = [];
  for (const [type, count] of Object.entries(tileCounts)) {
    tilePool = tilePool.concat(Array(count).fill(type));
  }

  // Fill the remaining tiles with the default type if there are leftovers
  while (tilePool.length < totalTiles) {
    tilePool.push(TILE_TYPES.EMPTY);
  }

  // Shuffle the tile pool
  for (let i = tilePool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tilePool[i], tilePool[j]] = [tilePool[j], tilePool[i]];
  }

  // Create the 2D board from the shuffled tile pool
  const board = [];
  let index = 0;
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push({
        isActive: false,
        type: tilePool[index++],
      });
    }
    board.push(row);
  }

  return board;
};

const alreadyOccupied = (x, y, players, site, id) =>
  players?.find(
    (p) => p.x === x && p.y === y && p.page === site && p.id !== id
  );

const checkValidMove = (x, y, players, board, site, id = "") => {
  const otherPlayer = alreadyOccupied(x, y, players, site, id);
  if (otherPlayer !== undefined) return otherPlayer;
  if (x < 0 || x >= board[0].length || y < 0 || y >= board.length) return 2;
  if (board[y][x] === TILE_TYPES.WATER) return 0;
  return 1;
};

const onEnter = (myPlayer, setPage, players, typingCallback, board) => {
  const { x, y, id, page } = myPlayer;
  const valid = checkValidMove(x, y, players, board, page, id);
  if (valid === 2) return;
  switch (board[y][x]) {
    case TILE_TYPES.HOME:
      updateData(id, { page: "home" });
      setPage("home");
      break;
    case TILE_TYPES.GAME:
      updateData(id, { page: "forest" });
      setPage("forest");
      break;
    case TILE_TYPES.FREE_WAY:
      updateData(id, { page: "freeway" });
      setPage("freeway");
      break;
    case TILE_TYPES.SELL_APPLE:
      updateData(id, { score: 0 });
      break;
    default:
      if (valid === 1 || valid === 0) {
        typingCallback();
        updateData(id, { isTyping: true });
      }
      break;
  }
};

export const handleKeyDownEvents = (
  myPlayer,
  key,
  isShiftPressed,
  setPage,
  typingCallback,
  players,
  board
) => {
  const { x, y, id, vector, page } = myPlayer;
  const moveMap = {
    ArrowUp: { dir: 0, dx: 0, dy: -1 },
    ArrowRight: { dir: 1, dx: 1, dy: 0 },
    ArrowDown: { dir: 2, dx: 0, dy: 1 },
    ArrowLeft: { dir: 3, dx: -1, dy: 0 },
  };

  if (key in moveMap) {
    const { dir, dx, dy } = moveMap[key];
    const newX = x + dx;
    const newY = y + dy;
    const updatedData = { dir, vector: (vector + 1) % 4 };
    const sidePlayer = { dir };

    const otherPlayer = checkValidMove(newX, newY, players, board, page);
    if (otherPlayer?.id && isShiftPressed) {
      const newXP = newX + dx;
      const newYP = newY + dy;
      if (dx !== 0) sidePlayer.x = newXP;
      if (dy !== 0) sidePlayer.y = newYP;
      const isValid = checkValidMove(newXP, newYP, players, board, page);
      if (isValid === 1) {
        updateData(otherPlayer?.id, sidePlayer, true);
        updatedData.x = newX;
        updatedData.y = newY;
      }
    } else if (otherPlayer === 1 || otherPlayer === 2) {
      if (dx !== 0) updatedData.x = newX;
      if (dy !== 0) updatedData.y = newY;
    }
    updateData(id, updatedData);
  } else if (key === "Enter") {
    onEnter(myPlayer, setPage, players, typingCallback, board);
  } else if (key === "Escape") {
    updateData(id, { isTyping: false, msg: "" });
  }
};

function changeTimeZone(date, timeZone, locale) {
  if (typeof date === "string") {
    return new Date(
      new Date(date).toLocaleString(locale, {
        timeZone,
      })
    );
  }

  return new Date(
    date.toLocaleString(locale, {
      timeZone,
    })
  );
}

function formatDate(
  dateStr,
  dateFormat = "dd/mm/yyyy",
  timeZone = "",
  locale = "us"
) {
  let fullDate = new Date(dateStr);
  if (timeZone) {
    fullDate = new Date(fullDate.toLocaleString(locale, { timeZone }));
  }
  if (fullDate.toString() === "Invalid Date") {
    return dateStr;
  }
  let month = "" + (fullDate.getMonth() + 1);
  let day = "" + fullDate.getDate();
  const year = fullDate.getFullYear().toString();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return dateFormat
    .replace("dd", day)
    .replace("mm", month)
    .replace("yyyy", year);
}

export function getTime(
  dateStr,
  timeZone = "Asia/Kolkata",
  dateFormat = "dd/mm/yyyy"
) {
  if (!dateStr) return;
  const locale = "en-US";
  const dateObj = new Date(dateStr);

  const currentDate = changeTimeZone(new Date(), timeZone, locale);
  const actionDate = changeTimeZone(dateObj, timeZone, locale);
  let isActive = true;

  function timeSince() {
    var seconds = Math.floor((currentDate - actionDate) / 1000);

    if (seconds < 60) {
      // return (
      //   Math.floor(seconds) +
      //   " " +
      //   [Math.floor(seconds) > 1 ? "seconds" : "second", "ago"].join(" ")
      // );
      return "now";
    }

    let interval = seconds / 60;
    if (interval > 4) {
      isActive = false;
    }
    if (interval < 60) {
      return (
        Math.floor(interval) +
        " " +
        [Math.floor(interval) > 1 ? "minutes" : "minute", "ago"].join(" ")
      );
    }

    interval = seconds / 3600;
    if (interval <= 24) {
      return (
        Math.floor(interval) +
        " " +
        [Math.floor(interval) > 1 ? "hours" : "hour", "ago"].join(" ")
      );
    }

    interval = seconds / 86400;
    if (interval <= 3) {
      return (
        Math.floor(interval) +
        " " +
        [Math.floor(interval) > 1 ? "days" : "day", "ago"].join(" ")
      );
    }

    return formatDate(dateStr, dateFormat, timeZone, locale);
  }
  let time = timeSince();
  return { time, isActive };
}
