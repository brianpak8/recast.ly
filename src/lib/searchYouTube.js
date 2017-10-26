var searchYouTube = (options, callback) => {
  $.ajax({
    
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      'maxResults': options.max,
      'key': options.key,
      'q': options.query,
      'type': 'video',
      'part': 'snippet'
    },
    success: function(data) {
      console.log('success', data);
      callback(data.items);
    },
    
    // done: function () {
    //   console.log('success');
    // },
    error: function(data) {
      console.log('failure', data);
    }
    
    
  });
  // TODO
};

window.searchYouTube = searchYouTube;
