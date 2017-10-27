class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentVideo: this.props.videos[0],
      currentVideos: this.props.videos
    };
    this.handleClick = this.handleClick.bind(this);
    this.search = this.search.bind(this);
    this.debouncedSearch = _.debounce(this.search, 500).bind(this);
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search search={this.debouncedSearch}/>
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

      // set the state current video to equal first item in response array
      context.setState( {currentVideo: response[0]});
      
      // update the list with 5 youtube videos (inlcluding the new player video)
      context.setState( {currentVideos: response });
      
      
    
    });
  }


  
  // handle search query events
  search (queryFromForm) {
    var options = {
      'maxResults': 5,
      'key': window.YOUTUBE_API_KEY,
      'query': queryFromForm,
      'type': 'video',
      'part': 'snippet'
    };
    var context = this;
    console.log('SEARCH is working', queryFromForm);
    window.searchYouTube(options, function(response) {
      context.setState({currentVideo: response[0]});
      context.setState( {currentVideos: response });
    });
    
  }
  
  
  
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;



// note: the Views will render themselves  (their only function - stateless)