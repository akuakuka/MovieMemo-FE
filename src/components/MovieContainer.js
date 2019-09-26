import React from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { searchMovie } from '../reducers/MovieSearchReducer';
import Movie from './Movie';
import { jsxEmptyExpression } from '@babel/types';
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
    console.log(event.target.movie.value);
    event.preventDefault();
    //  const content = event.target.note.value;
    //event.target.note.value = '';
    props.newMovie(event.target.movie.value);
  };
  const handleSearch = async event => {
    console.log(event.target.movie.value);
    event.preventDefault();
    //  const content = event.target.note.value;
    //event.target.note.value = '';
    const result = await props.searchMovie(event.target.movie.value);
    console.log(result);
    console.log(props.state);
    if (props.state) {
      console.log('IFFIN SISÖÄL');
      // props.state.movieSearch.map((movie) => (<Movie key={movie.id} movie={movie} />)
      props.state.movieSearch.map(movie => {
        console.log(movie);
        return <Movie key={movie.id} movie={movie} />;
      });
    }
  };

  const drawMovies = () => {
    console.log(props.state);
    console.log(typeof props.state.movies);
    console.log(props.movies);
    console.log('array');
    console.log(Array.isArray(props.state.movies));
    if (Array.isArray(props.state.movies)) {
      console.log('ISARRAY?=!');
      props.state.movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ));
    }
    // return (
    //   <div className="App">{JSON.stringify(props.state.movies)}</div>
    // );
    // props.state.movies.movies.map(movie => {
    //   return <Movie key={movie.id} movie={movie} />;
    // });
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
          {JSON.stringify(props.state.searchMovie)}
          {props.state.movieSearch.map(movie => {
            console.log(movie);
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
      )}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieContainer);
