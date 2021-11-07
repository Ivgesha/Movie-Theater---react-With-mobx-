import { action, computed, makeObservable, observable } from "mobx";
import { toJS } from "mobx";
class MoviesCollection {
  movies = [];
  searchedValue = "";
  topRating = false;
  selectedMovieId = null;
  selectedMovie = null;
  reportsSelectedGenre = null;
  reportsSelectedGenresArr = [];
  reportsSelectedDays = [];
  selectedDays = [];
  selectedGenres = [];
  selectedMovieRating = 0;
  selectedMovieName = "";

  constructor() {
    makeObservable(this, {
      movies: observable,
      searchedValue: observable,
      topRating: observable,
      selectedMovieId: observable,
      selectedMovie: observable,
      reportsSelectedGenre: observable,
      reportsSelectedDays: observable,
      selectedDays: observable,
      selectedGenres: observable,
      selectedMovieRating: observable,
      selectedMovieName: observable,
      reportsSelectedGenresArr: observable,

      setTopRating: action,
      getTopRationg: computed,
      setSearchedValue: action,
      setMovies: action,
      getMovies: computed,
      addMovie: action,
      setSelectedMovieId: action,
      getMovieBySelectedId: computed,

      setSelectedMovie: action,
      getSelectedMovie: computed,

      removeMovie: action,

      setReportsSelectedGenre: action,
      getReportsSelectedGenre: computed,

      setReportsSelectedGenresArr: action,
      getReportsSelectedGenresArr: computed,

      setReportsSelectedDays: action,
      removeReportsSelectedDays: action,
      getReportsSelectedDays: computed,

      getSelectedDays: computed,
      setSelectedDays: action,
      setSelectedDay: action,
      setSelectedGenres: action,
      setSelectedGenre: action,

      updateMovie: action,
      setSelectedMovieRating: action,
      updateSelectedMovieRating: action,
      setSelectedMovieName: action,
      updateSelectedMovieName: action,
    });
  }
  setMovies(movies) {
    this.movies = movies;
  }
  get getMovies() {
    return this.movies;
  }
  setSearchedValue(newValue) {
    this.searchedValue = newValue;
  }
  get getSearchedValue() {
    return this.searchedValue;
  }
  setTopRating(val) {
    console.log("setTopRating ", val);
    this.topRating = val;
  }
  get getTopRationg() {
    console.log("getTopRating ", this.topRating);
    return this.topRating;
  }
  addMovie(movie) {
    this.movies.push(movie);
  }
  setSelectedMovieId(id) {
    this.selectedMovieId = id;
  }
  get getMovieBySelectedId() {
    return this.movies.find((m) => {
      return m.id === this.selectedMovieId;
    });
  }
  setSelectedMovie(selectedId) {
    if (selectedId === 0) {
      this.selectedMovie = null;
    } else {
      this.selectedMovie = this.movies.find((m) => {
        return m.id === selectedId;
      });
      this.setSelectedDays();
      this.setSelectedGenres();
      this.setSelectedMovieRating();
      this.setSelectedMovieName();
    }
  }

  setSelectedDays() {
    const days = [
      { day: "Sunday", checked: false },
      { day: "Monday", checked: false },
      { day: "Tuesday", checked: false },
      { day: "Wednesday", checked: false },
      { day: "Thursday", checked: false },
      { day: "Friday", checked: false },
      { day: "Saturday", checked: false },
    ];
    days.forEach((dObj) => {
      if (this.selectedMovie.schedule.days.includes(dObj.day)) {
        dObj.checked = true;
      } else {
        dObj.checked = false;
      }
    });
    this.selectedDays = days;
  }

  setSelectedDay(day, val) {
    this.selectedDays.map((d) => {
      if (d.day != day) return;
      else return (d.checked = val);
    });
  }

  setSelectedGenre(genre, val) {
    this.selectedGenres.map((g) => {
      if (g.genre != genre) return;
      else return (g.checked = val);
    });
  }
  setSelectedGenres() {
    const genres = [
      { genre: "Drama", checked: false },
      { genre: "Thriller", checked: false },
      { genre: "Science-Fiction", checked: false },
      { genre: "Horror", checked: false },
      { genre: "Romance", checked: false },
      { genre: "Action", checked: false },
      { genre: "Music", checked: false },
    ];
    genres.forEach((gObj) => {
      if (this.selectedMovie.genres.includes(gObj.genre)) {
        gObj.checked = true;
      } else {
        gObj.checked = false;
      }
    });
    this.selectedGenres = genres;
  }

  get getSelectedGenres() {
    return this.selectedGenres;
  }
  get getSelectedDays() {
    const days = [
      { day: "Sunday", checked: false },
      { day: "Monday", checked: false },
      { day: "Tuesday", checked: false },
      { day: "Wednesday", checked: false },
      { day: "Thursday", checked: false },
      { day: "Friday", checked: false },
      { day: "Saturday", checked: false },
    ];

    days.forEach((dObj) => {
      if (this.selectedMovie.schedule.days.includes(dObj.day)) {
        dObj.checked = true;
      } else {
        dObj.checked = false;
      }
    });
    console.log(days);
    return days;
  }

  get getSelectedMovie() {
    return this.selectedMovie;
  }

  removeMovie() {
    this.movies = this.movies.filter((singleMovie) => {
      return singleMovie.id !== this.selectedMovie.id;
    });
  }

  setReportsSelectedGenre(genre) {
    this.reportsSelectedGenre = genre;
  }
  get getReportsSelectedGenre() {
    return this.reportsSelectedGenre;
  }
  setReportsSelectedGenresArr(name, value) {
    // if true, insert
    // if false, pop
    if (value) {
      this.reportsSelectedGenresArr.push(name);
    } else {
      // if false.
      this.reportsSelectedGenresArr = this.reportsSelectedGenresArr.filter(
        (filteredGenres) => {
          return filteredGenres != name;
        }
      );
    }
    console.log(toJS(this.reportsSelectedGenresArr));
  }
  get getReportsSelectedGenresArr() {
    return this.reportsSelectedGenresArr;
  }

  setReportsSelectedDays(newDay) {
    this.getReportsSelectedDays.push(newDay);
  }
  removeReportsSelectedDays(dayToRemove) {
    this.reportsSelectedDays = this.reportsSelectedDays.filter((day) => {
      return day !== dayToRemove;
    });
  }
  get getReportsSelectedDays() {
    return this.reportsSelectedDays;
  }
  setSelectedMovieRating() {
    this.selectedMovieRating = this.selectedMovie.rating.average;
  }
  setSelectedMovieName() {
    this.selectedMovieName = this.selectedMovie.name;
  }
  updateSelectedMovieName(name) {
    this.selectedMovieName = name;
  }
  updateSelectedMovieRating(val) {
    this.selectedMovieRating = val;
  }

  updateMovie() {
    console.log("entered updateMovie");

    console.log("cause crash");
    console.log(toJS(this.selectedGenres)); // collection... need to change to array.
    console.log("cause crash");
    console.log("movies");
    console.log(toJS(this.movies[0].genres)); // array...

    let genresArr = [];
    for (const [key, value] of Object.entries(this.selectedGenres)) {
      if (value.checked) {
        genresArr.push(value.genre);
      }
    }
    let daysArr = [];
    for (const [key, value] of Object.entries(this.selectedDays)) {
      if (value.checked) {
        daysArr.push(value.day);
      }
    }

    let updatedMovie = {
      name: this.selectedMovieName,
      rating: { average: this.selectedMovieRating },
      genres: genresArr,
      schedule: { days: daysArr },
    };

    console.log(toJS(this.selectedMovie.id));
    for (let i = 0; i < this.movies.length; i++) {
      if (this.movies[i].id === this.selectedMovie.id) {
        console.log("foudn");
        console.log(toJS(this.movies[i]));
        this.movies[i] = { ...this.movies[i], ...updatedMovie };
      }
    }
  }
}

export default MoviesCollection;
