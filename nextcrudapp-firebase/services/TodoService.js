import { collection, onSnapshot, orderBy, query, addDoc,serverTimestamp, deleteDoc, updateDoc,doc} from 'firebase/firestore';
import { db } from "../firebase";

class TodoService {
    getTodo = (collectionName,setTodos) => {
        let collectionRef = collection(db, collectionName);
        const querys = query(collectionRef, orderBy("timestamp", "desc"));
        const data = onSnapshot(querys, (snapShot) => {
            setTodos(snapShot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
                timestamp: doc.data().timestamp?.toDate().getTime()
            })));
            return data;
        });
    }
    postTodo = async (collectionName, state) => {
        let collectionRef = collection(db, collectionName);
        const docRef = await addDoc(collectionRef, { ...state, timestamp: serverTimestamp() });
        return docRef;
    }

    deleteTodo = async (collectionName, id) => {
        let docRef = doc(db, collectionName,id);
        await deleteDoc(docRef);
    }

    updateTodo = async (collectionName, id, state) => {
        let docRef = doc(db, collectionName,id);
        await updateDoc(docRef, state);
    }
}

export default new TodoService();