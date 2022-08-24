
 import styles from "./AppCard.module.css";
import { Card, Grid, Text, Link,Button } from "@nextui-org/react";


import React from 'react'

function AppCard(props) {

  //console.log(props.props.name_version)
  return (
    
    <Card css={{ p: "$6", mw: "400px", backgroundColor: "#2e3235"  }}>
    <Card.Header>
      <img
        alt="nextui logo"
        src={props.icon}
        height="34px"
      />
      <Grid.Container css={{ pl: "$6" }}>
        <Grid xs={12}>
          <Text h4 css={{ lineHeight: "$xs" ,color:"White" }}>
             {props.name}
          </Text>
        </Grid>
        
      </Grid.Container>
    </Card.Header>
    
    <Card.Footer>
    <Button size="sm">Add to cart</Button>
      
    </Card.Footer>
  </Card>
  )
}

export default AppCard