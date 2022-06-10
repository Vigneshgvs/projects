import React, { Component } from "react";
// { Component } -> as Class is a newly developed component way, need to import it, so that ur class can extend it

class Welcome extends Component {
    //extends Component

    render () {         //render method
        return <h1> Welcome dude </h1>
    }
}

export default Welcome
