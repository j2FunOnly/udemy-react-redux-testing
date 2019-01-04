import React from 'react';

import CommentBox from './CommentBox';
import CommentList from './CommentList';

export default () => {
  return (
    <div>
      <h1>App Component</h1>
      <CommentBox />
      <CommentList />
    </div>
  )
}
