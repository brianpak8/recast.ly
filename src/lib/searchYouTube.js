var searchYouTube = (options, callback) => {
  $.ajax({
    
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    data: {
      maxResults: options.max,
      key: options.key,
      q: options.query,
      type: options.type
    },
    done: function () {
      console.log('success');
    },
    fail: function() {
      console.log('failure');
    }
    
    
  });
  // TODO
};

window.searchYouTube = searchYouTube;
