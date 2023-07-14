import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const fetchAllTodos = async () => {
  try {
    const todosCollectionRef = collection(db, "todos");
    const querySnapshot = await getDocs(todosCollectionRef);
    const todos = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return todos;
  } catch (error) {
    console.error(error);
  }
};
