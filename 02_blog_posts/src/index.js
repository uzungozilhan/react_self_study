import React from "react";
import ReactDOM from "react-dom";
import profile1 from "./image/avatar1.png";
import profile2 from "./image/avatar2.png";
import profile3 from "./image/avatar3.jpg";
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";

const App = () => {
  return (
    <div className="ui comments">
      <UserCard>
        <div>
          Hello! My name is Sarah. I live in Istanbul:
        </div>
      </UserCard>

      <UserCard>
          <SingleComment 
          name="Alex" 
          date="Today at 5:00 PM" 
          text="It's amazing" 
          picture={profile1} />
      </UserCard>
      
      <UserCard>
          <SingleComment 
          name="Sarah" 
          date="Today at 6:00 PM" 
          text="Great job" 
          picture={profile2} />
      </UserCard>

      <UserCard>
          <SingleComment 
          name="Jack" 
          date="Today at 7:00 PM" 
          text="Thanks..." 
          picture={profile3} />
      </UserCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
