import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
//import { Form } from 'semantic-ui-react';
const Movie = props => {
  console.log('moviecomponentinsisäl');
  console.log(props);
  return (
    <Card>
      <Image src={props.movie.Poster} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.movie.Title}</Card.Header>
        <Card.Meta>
          <span className="date">{props.movie.Title}</span>
        </Card.Meta>
        <Card.Description>Type : {props.movie.Type}</Card.Description>
      </Card.Content>
    </Card>
  );
};
export default Movie;
