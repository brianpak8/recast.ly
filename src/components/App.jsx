class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentVideo: this.props.videos[0] };
    this.handleClick = this.handleClick.bind(this);
  }
  
  render() {
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
            <VideoList videos={this.props.videos} handleClick = {this.handleClick}/>
          </div>
        </div>
      </div>
    );
  }
  
  handleClick (e) {
    this.setState({currentVideo: e});
  }
  
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;



// listen for click on the following...
// '.video-player-details h3'


// TESTS NOT PASSED
// should be a stateful class component
// should render a single VideoPlayer component
// should render a single VideoList component
//should update the video player when a video entry's title is clicked


// access videos array

// make ajax calls

// create a props collection

// pass props to the correct views

// should have event listeners




// note: the Views will render themselves  (their only function - stateless)