import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

//import Background from '../images/background_image.png';

//import song from '../songs/senorita.mp3';
import { Link } from "react-router-dom";
import '../App.css';
//right side list 


export default class TutorialsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

  //var sectionStyle = {
  //width: "100%",
  //height: "400px",
  //backgroundImage: "url(" + { Background } + ")"
//};

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveTutorials();//load all songs 
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveTutorials() {
    TutorialDataService.getAll()
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveTutorials();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index
    });
  }

  removeAllTutorials() {
    TutorialDataService.deleteAll() //API
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    TutorialDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, tutorials, currentTutorial, currentIndex } = this.state;
  
    return (
      <div className = "full">

      <div className="list row">


        <div className="col-md-8">

          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>



        <div className="col-md-6">
          <h4>Songs List</h4>

          <ul className="list-group">
            {tutorials &&
              tutorials.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  {tutorial.title}
                </li>
              ))}
          </ul>

          <button
            className="but"
            onClick={this.removeAllTutorials}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentTutorial ? (
            <div>
              <h4>Song</h4>
              <div className="box1">
                <label>
                  <strong>Song Title:</strong>
                </label>{" "}
                {currentTutorial.title}
              </div>
              <div  className="box2">
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentTutorial.description}
              </div>
              <div  className="box3">
                <label>
                 <strong>Link to song:</strong>
                </label>{" "}
                <a href={currentTutorial.link} > Link to Song </a>
              </div>
              <div  className="box4">
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentTutorial.published ? "Liked" : "Rate"}
              </div>

              <div className="audio">
                <label>
                  <strong> </strong>
                    <audio src={currentTutorial.link} controls />
                </label>
              </div>


              <Link
                to={"/tutorials/" + currentTutorial.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div className="t">
              <br />
              <p>Please click on a Song...</p>
            </div>
          )}
        </div>
      </div>
      </div>
      
      
  
    );
  }
}