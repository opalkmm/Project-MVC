import React from "react";
import { Grid, Card } from "semantic-ui-react";
// import CardExampleCardProps from "./Cards.js";

// const extra = (
//   <a href="#">
//     <Icon name='user' />
//     16 Friends
//   </a>
// )

const dataObj = {
  author: "Elliot Baker",
  description:"Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.",
  content: "https://source.unsplash.com/random",
  created: new Date(),
  comments: "Comments go here...",
  // meta:'Friend',
  // extra={extra}
};
const dataObj1 = {
  ...dataObj,
  author: "Kyle Simpson",
  content: "https://source.unsplash.com/random",
};
const dataObj2 = {
  ...dataObj,
  author: "Swimming Rama",
  content: "https://source.unsplash.com/random",
};
const dataObj3 = {
  ...dataObj,
  author: "Ricardo Herman Harrison",
  content: "https://source.unsplash.com/random",
};
const multipleObjects = [
  dataObj,
  dataObj1,
  dataObj2,
  dataObj3
];
// TODO
// replace multipleObjects with an array of data from the SQL call

const generateCards = (obj) => (
    <Grid.Column>
      <Card
        image={obj.content}
        header={obj.author}
        // meta={obj.comments}
        description={obj.description}
        extra={obj.comments}
      />
    </Grid.Column>
  );

const CardColumns = (arrayOfData) => {
  const holder = [];
  for (let i = 0; i < arrayOfData.length; i++){
    holder.push(generateCards(arrayOfData[i]));
};
return holder;
};
const GridExampleContainer = () => (
    <>
      <Grid container columns={3}>
        {CardColumns(multipleObjects)}
      </Grid>
    </>
);

export default GridExampleContainer;
