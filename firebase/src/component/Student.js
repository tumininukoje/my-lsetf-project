import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import {database, storage} from '../Base';
import {collection, getDocs} from 'firebase/firestore';
 //import {TextAnim} from "text-animations-react"

 function Student() {

   const [lsetf, setLsetf] = useState ([]);
  

   const userStudentRef = collection(database, "students")

   const getData = async () => {
     const data = await getDocs(userStudentRef)
   setLsetf(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
 }

   useEffect(() => {
     getData();        
 }, []);
  

  return (
         <Card>
             <CardS>
                 {lsetf.map((props) => (
                     <Main>
                         <Tmg><img src={props.image}/></Tmg>
                         <Tname><strong>Name:</strong> {props.name}</Tname>
                         <Tdes><strong>Description:</strong> {props.description}</Tdes>
                     <Tlink>
                         <a href={props.facebook} target="_blank"><i className= "fa-brands fa-facebook" ></i></a>
                         <a href={props.linkedin} target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                         <a href={props.github}target="_blank"><i className="fa-brands fa-github"></i></a>
                         <a href={props.email}target="_blank"><i className="fa-solid fa-envelope"></i></a>
                         <a href={props.whatsapp}target="_blank"><i className="fa fa-whatsapp" ></i></a>
                      </Tlink>
                     </Main>
                 ))}
             </CardS>
         </Card>
   )
 }

 export default Student

 const Card = styled.div`
 padding: 4rem;  
 background: linear-gradient(to right top,#ff00cc,#8c828c);
 `
 const CardS = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
 `
 const Main = styled.div`
     margin: 2rem 2rem 2rem 0;
     background: linear-gradient(to bottom right, 
       rgba(255, 255, 255, 0.7),
       rgba(255, 255, 255, 0.3));
     padding: 1.5rem;
     width: 250px;
     box-shadow: 1px 1px 1px #541535;
     transition: transform .1s ease;
     cursor: pointer;
     height: 350px;
     display: flex;
     flex-direction: column;
     justify-content: space-around;

     :hover {
       transform: scale(1.2);
     }
 `
 const Tmg = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
   img{
   width: 150px;
   height:150px;
   border-radius: 50%;
  
 }
 `
 const Tname = styled.div`
     font-size: 15px;
     font-weight: 500;
 `
 const Tdes = styled.div`
     font-size: 12px;
     font-style: italic;       
 `
 const  Tlink  = styled.div`
     display: flex;
     justify-content: space-around;
     a{
       width: 30px;
       height:30px;
       border-radius: 50%;
       color: navy;
       :hover{
         color: pink;
         transform: scale(1.2);
       }
     }
 `