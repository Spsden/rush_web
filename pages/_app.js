import { Component } from 'react';

import { Layout } from '../Components/Layout/Layout';
import '../styles/globals.css'
import App from 'next/app';
import { useRouter } from 'next/router';
import SearchPage from './searchresults';
import { DisplaySection } from '../Components/DisplaySection/DisplaySection';









const Noop = ({ children }) => children

function MyApp({ Component, pageProps }) {

  const {pathname} = useRouter();


  const useLayout = pathname.includes('/searchresults')
  
  console.log(useLayout);

  const getLayout = Component.Layout || Layout
  
  
  return (
  
  <Layout>
    
    <Component {...pageProps}/>
    
    </Layout>);
}

export default MyApp


//DisplaySection is nested inside Layout and Layout is nested in MyApp
