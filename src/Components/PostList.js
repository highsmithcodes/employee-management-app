import { collection, addDoc, getDocs, doc, where, query, onSnapshot } from "firebase/firestore"; 
import { db,querySnapshot } from "../firebase-config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CreatePost from "./Common/CreatePost";
import { Link, Route } from "react-router-dom";
import { getUsers } from "../firebase-config";


export default function PostList() {
    const [postsList, setPostsList] = useState([]);
    const [categoryId, setCategoryId] = useState([]);
    const [ userInfo, setUserInfo] = useState([{}]);
    const [company, setPostCompany] = useState('');

    const catRef = query(collection(db, 'categories'))

    const getCategoryId = async () => {
        const data = await getDocs(catRef)
        try {
            setCategoryId(
                data.docs.map((doc) => ({id: doc.id}))
            );
        } catch(err){
            console.log(err)
        }
    }
    // 

    const userInformation = async () => {
        const response = await getUsers();
        setUserInfo(response);
    };
   
    // Create conditional for company to pull posts
    // const postsRef = query(collection(db, 'posts').where('authorId', '===', MFob942YKxYHColzd9qmMrLIAD32))

    // const userCompany = async () => {
    //     const q = query(collection(db, "users"));

    //     const querySnapshot = await getDocs(q);
    //     querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //         // const data = doc.data();
    //         // const finalCompany = data.company;
    //         // setPostCompany(finalCompany)
    //         console.log(doc.data())
    //     });
    // };
    const userCompany = async () => {
        const response = await getUsers();
        const companyName = response[0].company;
        setPostCompany(companyName);
        console.log('response', companyName)
    };


    const postsRef = query(collection(db, 'posts'), where("company", "==", company))
    const newpostsRef = collection(db, "posts");

    // Create a query against the collection.
    const newpostsRefQuery = query(newpostsRef, where("company", "==", company));


    const getPosts = async () => {
        // console.log(userInfo[0].id)

        const data = await getDocs(newpostsRefQuery)
        
        try {
            setPostsList(
                data.docs.map((doc) => ({...doc.data(), id: doc.id}))
            ); 
        } catch(err){
            console.log(err)
        }
        if(userInfo[0].id == newpostsRefQuery.id){
            // setblog(doc.data());
            console.log('working')
        } 
    }

   
    useEffect(() => {
        userCompany();
        userInformation();
        getCategoryId([]);
        getPosts();
    }, [])
    return (
        <>
         {/* {userInfo[0].company}  */}
            {postsList?.map((post) => (
               
                <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
                    <div>
                        <h5 class="text-xl text-gray-600 text-center font-bold">{post.title}</h5>
                        {/* <div class="mt-2 flex justify-center gap-4">
                            <h3 class="text-3xl font-bold text-gray-700">$23,988</h3>
                            <div class="flex items-end gap-1 text-green-500">
                                <svg class="w-3" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00001 0L12 8H-3.05176e-05L6.00001 0Z" fill="currentColor"/>
                                </svg>
                                <span>2%</span>
                            </div>
                        </div> */}
                        <span class="block text-center text-gray-500 mb-5">{post.content}</span>
                        <Link to={`/posts/${post.id}`} className="block items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-rose-600 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300">
                            Read More
                        </Link>
                           
                    </div>

                </div>
                
            ))}
        </>
    )
}