// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// class Clients extends Component {
//   componentDidMount() {
//     this.setState({ initialState: 'Hello From The Mushroom Kingdom!' });
//   }

//   render() {
//     const { initialState } = this.state;
//     return (
//       <div className="app">
//         <h1 className="title">{initialState}</h1>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => state;

// const mapDispatchToProps = (dispatch) => {
//   return {
//     remove: (id) => {
//       dispatch(deleteMovie(id));
//     },
//     allMovies: () => {
//       dispatch(getMovies());
//     },
//     addStar: (movie) => {
//       dispatch(incrementRating(movie));
//     },
//     removeStar: (movie) => {
//       dispatch(decrementRating(movie));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Clients);
