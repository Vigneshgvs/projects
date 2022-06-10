import React from "react";
// importing react is for jsx

const hello = () => {       //still arrow function
                            // but has return (  )

    
    //below is for jsx way - an easier way
    // return (
    //     <div id="hello1" className="dummy">
    //         <h1> hey 3333 dude from return </h1>
    //     </div>
    // )

    //here className

    //the original way was:
    return React.createElement(
        'div',
        { id: 'hello1', className: "dummy"},
        React.createElement(
            'h1',
            null, 
            "hey 3333 dude from return"
        )
    )

    //for html:
    //  <div id="hello1" class="dummy">
    //     <h1> hey 3333 dude from return </h1>
    //  </div>

    // here class


    //other JSX differences:
    // 1. class -> className
    // for -> htmlFor
    // 3. camelCase:
    // onclick -> onClick
    // tabindex -> tabIndex


}

export default hello
