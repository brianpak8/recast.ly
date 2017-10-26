class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentVideo: this.props.videos[0],
      currentVideos: this.props.videos
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  render() {
    console.log('render');
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.currentVideos} handleClick = {this.handleClick}/>
          </div>
        </div>
      </div>
    );
  }
  
  // handle clicks on video titles and render then to the player
  handleClick (videoFromTitleClick) {
    //alert('wooot');
    this.setState({currentVideo: videoFromTitleClick});
  }
  
  
  // load data from a remote endpoint (youtube), 
  //   create a default list of options for initialization of videos
  //   instatiate a network request
  componentDidMount() {
    var options = {
      'maxResults': 5,
      'key': window.YOUTUBE_API_KEY,
      'query': 'killer whale',
      'type': 'video',
      'part': 'snippet'
    };
    var context = this;
    // search youtube
    window.searchYouTube(options, function (response) { 
      // take results and populate the page
      console.log('!!!!!!!!!!!', response);
    
      // set the state current video to equal first item in response array
      context.setState( {currentVideo: response[0]});
      
      // update the list with 5 youtube videos (inlcluding the new player video)
      context.setState( {currentVideos: response });
      
      console.log('xoxoxoxox', context.state.currentVideos);
      
    
    });
  }


  
  // handle search query events
  search (queryFromForm) {
    
    
  }
  
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;



// listen for click on the following...
// '.video-player-details h3'


// TESTS NOT PASSED

//should update the video player when a video entry's title is clicked


// access videos array

// make ajax calls

// create a props collection

// pass props to the correct views

// should have event listeners




// note: the Views will render themselves  (their only function - stateless)