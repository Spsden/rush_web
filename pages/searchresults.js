import React, { useContext, useEffect, useState } from "react";

import { useRouter } from "next/router";
import axios from "axios";
import { Grid } from "@nextui-org/react";
import AppCard from "../Components/AppCard/AppCard";


export default function SearchPage(props) {
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
  }, [router.query]);

  return (
    <div>
      <Grid.Container gap={2} justify="center" alignContent="left">
      {res.map((val,key) => {
        return(
          <Grid key={key}>
            <AppCard  name = {val.name_and_version} icon = {val.icon_url} />
            
          </Grid>
        )
      })}

    </Grid.Container>

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
