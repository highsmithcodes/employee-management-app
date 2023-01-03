import { collection, addDoc, getDocs, doc, where, query, onSnapshot } from "firebase/firestore"; 
import { db } from "../firebase-config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DepartmentBody({post}) {
  
    return (
        <div>
            <h1>{post.departmentName}</h1>
            Routing works, just need to setup firestore database to show department stuff
        </div>
    )
}