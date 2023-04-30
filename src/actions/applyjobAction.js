import {  addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    query,
    setDoc,} from "firebase/firestore";
  import { toast } from "react-toastify";
  import { db } from "../firebase-config/firebase-config";

  import {applyjob} from '../slice/applyjobSlice'


export const applyjobAction = (formData) => async (dispatch) => {
    try {

      const docRef = await addDoc(collection(db, "jobs"), formData);
  
      if (docRef?.id) {
        toast.success("New jobs has been added in the database.");
         dispatch(getjobsAction());
        return;
      }
      toast.error("unable to add the book, try again later.");
    } catch (error) {
      toast.error(error.message);
    }
  };

  export const getjobsAction = () => async (dispatch) => {
    try {

      const q = query(collection(db, "jobs")
      // ,where("uid", "==", uid)
      );
  
      const querySnapshot = await getDocs(q);
      let books = [];

  
      querySnapshot.forEach((doc) => {
        const { id } = doc;
  
        const data = { ...doc.data(), id };
        books.push(data);

      
      });
     dispatch(applyjob(books));
   
      
    } catch (error) {
      toast.error(error.message);
    }
  };