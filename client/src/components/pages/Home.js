// dependencies:
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// ---- PAGES:
// ---- LAYOUT:
import Header from "../layout/Header"
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import VideoPlaylist from "../layout/VideoPlaylist";
import Login from "./Login"
// ---- COMPONENT:
import SearchBar from "../component/SearchBar";
import VideosRow from "../component/VideosRow";
import PlaylistTitle from "../component/PlaylistTitle"


class Home extends Component {
    render() {
        return (
            <React.Fragment>



                <Router>
                    <Route exact path="/" component={Header} />
                    <Route exact path="/" component={Navbar} />
                    <Route exact path="/" component={SearchBar} />
                    {/* count playlists on db, add as many VideoPlaylists. {VideoPlaylist}  */}
                    <Route exact path="/" component={VideoPlaylist} />
                    <Route exact path="/" component={Footer} />
                </Router>



            </React.Fragment>
        );
    }

}

export default Home;