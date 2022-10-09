import React from 'react';

const Comment = (props: any) => {
  console.log('props', props);
  return <div className="comment" style={{ width: '300px', height: '300px', backgroundColor: 'red' }} >Comment</div>;
};

export default Comment;
