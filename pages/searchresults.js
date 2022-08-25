import React, { useContext, useEffect, useState } from "react";

import { useRouter } from "next/router";
import axios from "axios";
import { Grid, Loading } from "@nextui-org/react";
import AppCard from "../Components/AppCard/AppCard";
import styles from "../styles/searchresults.module.css";
import { Layout } from "../Components/Layout/Layout";

function SearchPage(props) {
  const router = useRouter();
  const [res, setRes] = useState([]);
  const [isLoading,setLoading] = useState(false);
  const searchQuery = router.query.q;

  const url = `https://rushy-spsden.vercel.app/rush/app/${searchQuery}`;

  //console.log(router.query.result);

  async function fetchData(qquery) {
    setLoading(false)
   
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
    setLoading(true);

    setRes(data);
   
  }

  useEffect(() => {
    
    fetchData();
   
  }, [router]);


  console.log(isLoading);

 
  
const result = () => {
    return (
      <Grid.Container color="white" gap={2} justify="flex-start" wrap="wrap">
      {res.map((val, key) => {
        return (
          <Grid key={key} className={styles.grid}>
            <AppCard name={val.name_and_version} icon={val.icon_url} />
          </Grid>
        );
      })}
    </Grid.Container>
    )
  }
  


    return(
      <div className={styles.main}>
        
      <h1>You Searched for "{router.query.q}"</h1>

      {isLoading ? 
      <Grid.Container color="white" gap={2} justify="flex-start" wrap="wrap">
      {res ? res.map((val, key) => {
        return (
          <Grid key={key} className={styles.grid}>
            <AppCard name={val.name_and_version} icon={val.icon_url} />
          </Grid>
        );
      }) : <Loading/>}
    </Grid.Container>
      
      : <Loading/>}

      
      
    </div>

    )
  

 
}

SearchPage.Layout = Layout;

export default SearchPage;

// SearchPage.getLayout = function getLayout(page){
//   return (<Layout>
//     {page}
//   </Layout>)
// }
