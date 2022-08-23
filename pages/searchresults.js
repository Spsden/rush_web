import React, { useContext, useEffect, useState } from "react";
//import {withRouter} from 'next/router'
import { useRouter } from "next/router";
import axios from "axios";

function Search(props) {
  const router = useRouter();
  console.log(router.query);

  //const contextReceive = useContext(TransferQuery);
  const url = "https://rushy-spsden.vercel.app/rush/app/";
  const wel = "https://welkin-search-api.vercel.app/search/movies";

  const [res, setResponse] = useState(null);

  useEffect(() => {
    axios
      .get(url + "whatsapp", {})
      .then((response) => {
       
        setResponse(response.data[0].icon_url);
        console.log( response.data[0]);
      })
      .catch((error) => {
        if (error.response) {
          //response status is an error code
          console.log(error.response.status);
        } else if (error.request) {
          //response not received though the request was sent
          console.log(error.request);
        } else {
          //an error occurred when setting up the request
          console.log(error.message);
        }
      });
  }, [router.query.squery]);

  return (<div>
   { res}
    
  </div>

  );
}

export default Search;
