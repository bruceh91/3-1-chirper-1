import React, { ReactComponent } from 'react';
import PostButton from './PostButton';
import PostInput from './PostInput';

class PostCreationContainer extends React.Component {

    render() {
        // console.log('div rendered');
        return (
            
            <div className="col-10 mx-auto border rounded m-4 ">
                <p className="mt-2 mt-4 mb-0 d-flex align-items-start">Create a chirp:</p>
                <PostInput />
                <br />
                <PostButton />
            </div>
        )
    }
}

export default PostCreationContainer;




// import React, { Component } from 'react';
// import ComponentHeader from './ComponentHeader';

// class ComponentWelcome extends React.Component {
//     render() {
//         return (
//             <div className="some-div">
//                 <ComponentHeader name="Paul" />
//                 <ComponentHeader name="Dana" />
//                 <ComponentHeader name="Joe" />
//             </div>
//         )
//     }
// }

// export default ComponentWelcome;