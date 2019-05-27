import React, { Component } from "react";
import { getMovies } from "../fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = title => {
    let movies = this.state.movies.filter(movie => movie.title !== title);
    this.setState({
      movies: movies
    });
    console.log(movies);
    console.log(title);
  };

  render() {
    const moviesTable = this.state.movies.map(movie => {
      return (
        <tr key={movie._id} id={movie._id}>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td>
            <button
              onClick={() => this.handleDelete(movie.title)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });

    if (this.state.movies.length === 0)
      return <p>There are no movies in the list</p>;
    return (
      <div>
        {/* {this.state.movies.length === 0 && <p>There is nothing to watch</p>} */}
        <h2>There are {this.state.movies.length} movies in the list</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{moviesTable}</tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
