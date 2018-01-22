import React, { ReactComponent } from 'react';

class ChirpContainer extends React.Component {

    render (){
        return (<div className="border rounded m-4 col-10 mx-auto">
            <h5 className="mx-auto m-4 d-flex align-items-start font-weight-light"> THIS IS CHIRP {this.props.input}</h5>
        </div>
        )
        
    }

};

export default ChirpContainer;