import React, { ReactComponent } from 'react';

class PostInput extends React.Component {

    render (){
        // console.log('input rendered');
        return <input placeholder="What's happening?" className="mt-2 col-12 border rounded p-2 mb-2 mt-3"></input>;
        
    }

};

export default PostInput;