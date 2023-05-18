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
        console.log("Get Posts Function", company)

        const data = await getDocs(newpostsRefQuery)
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            setPostsList(
                data.docs.map((doc) => ({...doc.data(), id: doc.id}))
            ); 
        });

        // try {
        //     setPostsList(
        //         data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        //     ); 
        // } catch(err){
        //     console.log(err)
        // }
        // if(userInfo[0].id == newpostsRefQuery.id){
        //     // setblog(doc.data());
        //     console.log('working')
        // } 
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
               
                <div className="post drop-shadow-md">
                    {/* <Link path={`/post/${post.id}`}> */}
                        <div className="title">{post.title}</div>
                        <div className="details">{post.content}</div>
                        <div className="post-btm-details" style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: '40px',
                            alignItems: 'center'
                        }}>
                            {/* <div className="categories">Category:{post.category}</div> */}
                            <div className="more">
                            <Link to={`/posts/${post.id}`} className="button purple">
                                Read More
                            </Link>
                            </div>
                        </div>
                    {/* </Link> */}
                </div>
                
            ))}
        </>
    )
}