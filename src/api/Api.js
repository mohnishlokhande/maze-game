import { ref, set, remove, update } from "firebase/database";
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

export const updateData = () => {
  const dbRef = ref(database, "path/to/data");
  update(dbRef, { age: 31 })
    .then(() => {
      console.log("Data updated successfully!");
    })
    .catch((error) => {
      console.error("Error updating data:", error);
    });
};

export const deleteData = () => {
  const dbRef = ref(database, "path/to/data");
  remove(dbRef)
    .then(() => {
      console.log("Data removed successfully!");
    })
    .catch((error) => {
      console.error("Error deleting data:", error);
    });
};
