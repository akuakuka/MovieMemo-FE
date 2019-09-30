import React from 'react';
import { Form, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { searchMovie } from '../reducers/MovieSearchReducer';
import Movie from './Movie';
const mapStateToProps = state => {
  return {
    state,
  };
};
const mapDispatchToProps = {
  searchMovie,
};
const MovieContainer = props => {
  const addMovie = async event => {
    event.preventDefault();
    props.newMovie(event.target.movie.value);
  };
  const handleSearch = async event => {
    console.log(event.target.movie.value);
    event.preventDefault();
    props.searchMovie(event.target.movie.value);
    if (props.state) {
      props.state.movieSearch.map(movie => {
        return <Movie key={movie.id} movie={movie} />;
      });
    }
  };
  return (
    <div className="App">
      "MOVIECONTAINER"
      <Form onSubmit={handleSearch}>
        <Form.Input name="movie" label="Search for movies" />
        <Form.Button>Submit</Form.Button>
      </Form>
      {props.state.movieSearch.length === 0 ? (
        <div>
          EKA vaihtoehto
          {JSON.stringify(props.state.searchMovie)}{' '}
        </div>
      ) : (
        <div>
          Search results:
          <Grid columns="5">
            {props.state.movieSearch.map((movie, i) => {
              return (
                <Grid.Column key={i}>
                  <Movie
                    key={movie.id}
                    movie={movie}
                    addMovie={addMovie}
                  />
                </Grid.Column>
              );
            })}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieContainer);
