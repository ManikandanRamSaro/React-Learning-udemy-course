import React from 'react';
import ReactDOM from 'react-dom'; 

import faker from 'faker';
import CommentsDetail from './CommentsDetail';
import ApprovalCord from './ApprovalCord';
const App = () =>{
  return (
    <div className="ui container comments">
       <ApprovalCord>Are you sure you happy to learn it</ApprovalCord>
        <ApprovalCord>
            <CommentsDetail author="Mani" timeat="Today 7:41 PM" comments="this is sample comment one" images={faker.image.image()}/>
        </ApprovalCord>
        <ApprovalCord>
            <CommentsDetail author="Durai" timeat="Today 10:41 AM" comments="this is sample comment two"  images={faker.image.image()}/>
        </ApprovalCord>
        <ApprovalCord>
            <CommentsDetail author="Shree" timeat="Yesterday 7:41 PM" comments="this is sample comment three"  images={faker.image.image()}/>
        </ApprovalCord>
        
    </div>
  );
}
ReactDOM.render( 
    <App /> ,
  document.querySelector('#root')
);
 
