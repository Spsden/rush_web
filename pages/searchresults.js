import React, { useContext, useEffect, useState } from "react";
//import {withRouter} from 'next/router'
import { useRouter } from "next/router";
import axios from "axios";
import { Layout } from "react-feather";

export default function SearchPage(props) {
   const router = useRouter();
   const searchQuery = router.query.q;
   const [isloading,setIsLoading] = useState(false)
   const url = `https://rushy-spsden.vercel.app/rush/app/${searchQuery}`;
   let allData = [];


  console.log(router.query.result);

   async function fetchData(qquery) {

    const data = await axios
      .get(url , {})
      .then((response) => response.data)
      .catch((error) => {
        if (error.response) {
          console.log(error.response.status);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log(error.message);
        }
      });

    // setResponse(data);
    
     allData = data;
     console.log(allData);
  }


  useEffect(() => {
   // setIsLoading(true);
    fetchData()

  },[router.query])

  return (
    
         <div>
          <h1>{router.query.q}</h1>
   
   <h1>Hommmme</h1>
        <h1>Hommmme</h1>
        <h1>Hommmme</h1>
        <h1>Hommmme</h1>
        <h1>Hommmme</h1>
        <h1>Hommmme</h1>
        <h1>Hommmme</h1>
        <h1>Hommmme</h1>
        <h1>Hommmme</h1>
        <h1>Hommmme</h1>
        <h1>Hommmme</h1>
        <h1>Hommmme</h1>
        <h1>Hommmme</h1>
        <h1>Hommmme</h1>
        <h1>Hommmme</h1>
        <h1>Hommmme</h1>
    
  </div>

  
 

  );
}

// Search.getLayout = function getLayout(page){
//     return (
//         <Layout>
//             <h2>uieghciyxghiuzgc8tuyc</h2>
//             {page}
//         </Layout>
//     )
// }




