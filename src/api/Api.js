import { ref, set, remove, update, onDisconnect } from "firebase/database";
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

export const updateData = (id, obj) => {
  const dbRef = ref(database, `players/${id}`);
  update(dbRef, { ...obj, modifiedAt: new Date().toISOString() })
    .then(() => {
      console.log("Data updated successfully!");
    })
    .catch((error) => {
      console.error("Error updating data:", error);
    });
};

export const deleteData = (id) => {
  const dbRef = ref(database, `players/${id}`);
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
