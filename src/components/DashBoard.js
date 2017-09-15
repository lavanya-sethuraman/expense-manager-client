import React from 'react';
import DashBoardHeader from './DashBoardHeader';
import MainContainer from './MainContainer';
import { Grid, Row } from 'react-flexbox-grid';
import "../index.css";

export default function DashBoard() {
  return (

    <Grid fluid>
    <Row>
      <DashBoardHeader />
    </Row>
    <Row>
      <MainContainer />
    </Row>
</Grid>
    
  );

}