import React from "react";
import { Grid, Image } from "semantic-ui-react";
import CardExampleCardProps from "./Cards.js";

const GridExampleContainer = () => (
  <Grid container columns={3}>
    <Grid.Column>
      <CardExampleCardProps />
    </Grid.Column>
    <Grid.Column>
      <CardExampleCardProps />
    </Grid.Column>
    <Grid.Column>
      <CardExampleCardProps />
    </Grid.Column>
  </Grid>
);

export default GridExampleContainer;
