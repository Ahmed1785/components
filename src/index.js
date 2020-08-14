import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          author="Sams" 
          timeAgo="Today at 5:00AM" 
          commentDesc="That's Dope" 
          avatar={faker.image.avatar()}
          />
      </ApprovalCard> 

      <ApprovalCard>
        <CommentDetail 
          author="Ben" 
          timeAgo="Yesterday at 7:20AM" 
          commentDesc="Very Helpful" 
          avatar={faker.image.avatar()}
          />
      </ApprovalCard>

      <ApprovalCard> 
        <CommentDetail 
          author="Lin" 
          timeAgo="Today at 8:45PM" 
          commentDesc="Nice Post" 
          avatar={faker.image.avatar()}
          />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="vie" 
          timeAgo="Today at 11:55PM" 
          commentDesc="Booooooooo" 
          avatar={faker.image.avatar()}
          />
        </ApprovalCard>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"))
