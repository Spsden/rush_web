import React, { useContext, useEffect, useState } from "react";

import { useRouter } from "next/router";
import axios from "axios";
import { Grid } from "@nextui-org/react";
import AppCard from "../Components/AppCard/AppCard";
import styles from '../styles/searchresults.module.css'
import { Layout } from "../Components/Layout/Layout";
import { DisplaySection } from "../Components/DisplaySection/DisplaySection";
import { CustomLayout } from "./_app";
function SearchPage(props) {
  const router = useRouter();
  const [res,setRes] = useState([]);
  const searchQuery = router.query.q;
  const [isloading, setIsLoading] = useState(false);
  const url = `https://rushy-spsden.vercel.app/rush/app/${searchQuery}`;
  let allData = [];

  //console.log(router.query.result);

async function fetchData(qquery) {
    const data = await axios
      .get(url, {})
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
    setRes(data);
    console.log(allData);
  }

  useEffect(() => {
    // setIsLoading(true);
    fetchData();
  }, [router]);

  return (
    // <div className= {styles.cards}>
    //   {res.map((val,key) => {
    //     return (
    //       <div className= {styles.card} key = {key}></div>
    //     )
    //   })}
    // </div>



    
    <div className= {styles.main}>
      <h2>You Searched for {router.query.q}</h2>
      <Grid.Container  color="white" gap={2} justify="flex-start" wrap="wrap"  >
      {res.map((val,key) => {
        return(
          <Grid key={key} className = {styles.grid}  >
            <AppCard  name = {val.name_and_version} icon = {val.icon_url} />
           
            
            
          </Grid>
        )
      })}

    </Grid.Container>

    </div>
    
  
  );
}


SearchPage.Layout = Layout

export default SearchPage

// SearchPage.getLayout = function getLayout(page){
//   return (<Layout>
//     {page}
//   </Layout>)
// }
