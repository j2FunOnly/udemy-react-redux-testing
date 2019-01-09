import React from 'react';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

export default () => {
  return (
    <div>
      <h1>App Component</h1>
      <CommentBox />
      <CommentList />
    </div>
  )
}
