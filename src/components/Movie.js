import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux';
import { newMovie } from '../reducers/MovieReducer';
const mapStateToProps = state => {
  return {
    state,
  };
};
const mapDispatchToProps = {
  newMovie,
};
const Movie = props => {
  const handleSaveMovie = () => {
    props.newMovie(props.movie.imdbID);
  };
  return (
    <Card>
      <Image src={props.movie.Poster} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.movie.Title}</Card.Header>
        <Card.Meta>
          <span className="date">{props.movie.Title}</span>
        </Card.Meta>
        <Card.Description>Type : {props.movie.Type}</Card.Description>
        <Button onClick={handleSaveMovie}>Save To MyMovies</Button>
      </Card.Content>
    </Card>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Movie);
