import React from 'react';

export default ({ getResults }) => (
    <div>
      <h3>Search for a subreddit</h3> <input onBlur={getResults} type="text" />
    </div>
)
