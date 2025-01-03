import { ref, get, set, remove, update, onDisconnect } from "firebase/database";
import { database } from "../firebase-config";

export const writeData = (id, player) => {
  const dbRef = ref(database, `players/${id}`);
  set(dbRef, player)
    .then(() => {
      console.log("Data written successfully!");
    })
    .catch((error) => {
      console.error("Error writing data:", error);
    });
};

export const updateData = (id, obj, isOtherP = false) => {
  const dbRef = ref(database, `players/${id}`);
  const updatedObj = isOtherP
    ? obj
    : { ...obj, modifiedAt: new Date().toISOString() };
  update(dbRef, updatedObj)
    .then(() => {
      console.log("Data updated successfully!");
    })
    .catch((error) => {
      console.error("Error updating data:", error);
    });
};

export const deleteData = (str) => {
  const dbRef = ref(database, str);
  remove(dbRef)
    .then(() => {
      console.log("Data removed successfully!");
    })
    .catch((error) => {
      console.error("Error deleting data:", error);
    });
};

export const setupDisconnectHandler = (id, player) => {
  const userStatusRef = ref(database, `players/${id}`);

  set(userStatusRef, player)
    .then(() => {
      onDisconnect(userStatusRef)
        .remove()
        .then(() => {
          console.log("onDisconnect handler attached.");
        })
        .catch((error) => {
          console.error("Error attaching onDisconnect handler:", error);
        });
    })
    .catch((error) => {
      console.error("Error setting initial data:", error);
    });
};

export const pushConversation = async (id, senderName, msg) => {
  const dbRef = ref(database, "conversations");
  const msgObj = {
    senderId: id,
    senderName,
    msg,
    createdAt: new Date().toISOString(),
  };
  try {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      const currentArray = snapshot.val();
      const updatedArray = Array.isArray(currentArray)
        ? [msgObj, ...currentArray]
        : [msgObj];
      await set(dbRef, updatedArray);
    } else {
      await set(dbRef, [msgObj]);
    }
    console.log("Item added successfully!");
  } catch (error) {
    console.error("Error adding item to array:", error);
  }
};
