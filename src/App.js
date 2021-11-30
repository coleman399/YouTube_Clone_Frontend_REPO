import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import SearchBar from './components/SearchBar/SearchBar';
import VideosPanel from './components/VideosPanel/VideosPanel';
import CommentSection from './components/CommentSection/CommentSection';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: {
        videoId: '',
        title: '',
        description: '',
      },
      relatedVideos: [],
      searchVideos: [],
      backendData: {
        videoId: '',
        likes: 0,
        dislikes: 0,
        comments: [{
          commentId: 0,
          parentId: 0,
          body: 'Hello World',
          likes: 0,
          dislikes: 0,
        }]
      }
    }
  }

  getBackendData = async (id) => {
    try {
      let response = await axios.get('http://127.0.01:8000/youtube_app/' + id);
      this.setState({
        backendData: response.data
      });
    }catch(e) {
      console.log(e);
    }
  }

  postBackendData = async (data) => {
    let backendData = {
      videoId: data.videoId,
      likes: data.likes,
      dislikes: data.dislikes,
      comments: data.comments,
    }
    try {
      await axios.post('http://127.0.01:8000/youtube_app/', backendData);
      this.setState({
        backendData: backendData
      }, () => console.log(this.state.video))
    }catch(e) {
      console.log(e)
    }
  }

  searchVideo = async (query) => {
    try{
      let getQuery = await axios.get('https://www.googleapis.com/youtube/v3/search?q='+query+'&key=AIzaSyDJ2cLaQKQWQAHrs8vwmyWPWydjgMFztWY&maxResults=5&part=snippet');
      let getVideo = await axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=' + getQuery.data.items[0].id.videoId + '&key=AIzaSyDJ2cLaQKQWQAHrs8vwmyWPWydjgMFztWY');
      let getRelated = await axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId='+ getQuery.data.items[0].id.videoId  + '&type=video&key=AIzaSyDJ2cLaQKQWQAHrs8vwmyWPWydjgMFztWY');
      this.setState({  
        searchVideos: getQuery.data.items,
        video: {
          videoId: getQuery.data.items[0].id.videoId,
          title: getVideo.data.items[0].snippet.title,
          description: getVideo.data.items[0].snippet.description
        },
        relatedVideos: getRelated.data.items,
      });
    }catch(e) {
      console.log(e);
    }
  }

  getRelatedVideos = async (id) => {
    try {
      let response = await axios.get('https://www.googleapis.com/youtube/v3/search?relatedToVideoId='+ id + '&type=video&key=AIzaSyDJ2cLaQKQWQAHrs8vwmyWPWydjgMFztWY');
      this.setState({
        relatedVideos: response.data
      })
    }catch(e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <br/>
        <div className="row">
          <div className="col-1"/>
          <div className="col-10">
            <SearchBar {...this.state} searchVideo={this.searchVideo}/>
          </div>
          <div className="col-1"/>
        </div>
        <br/>
        <div className="row">
          <div className="col-1"/>
          <div className="col-7">
            <div className="container">
              <div className="row">
                <VideoPlayer {...this.state} getBackendData={this.getBackendData} postBackendData={this.postBackendData}/>
                <br/>
              </div>
              <br/>
              <div className="row">
                <CommentSection {...this.state} getBackendData={this.getBackendData} postBackendData={this.postBackendData}/>
              </div>
            </div>
          </div>
          <div className="col-3">
            <VideosPanel {...this.state} searchVideo={this.searchVideo}/>
          </div>
          <div className="col-1"/>
        </div>
      </div>
    )
  }
}

export default App;