import React, {Component} from 'react';

const emailRegex = RegExp(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/)
const nameRegex = RegExp(/([A-Z][a-z])\w+/)
const urlRegex = RegExp(/[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/)
const phoneRegex = RegExp(/^[2-9][0-9]{9}$/)

//class component

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
            //valid: null
            isFormValid: null
        };
    }

    validate = () => {
        if (this.state.isEmailValid && this.state.isNameValid && this.state.isPhoneValid && this.state.isUrlValid) {
            console.log("oranges");
            this.setState({isFormValid: true}, ()=>{console.log(`after correct validation isFormValid: ${this.state.isFormValid}`)});
            
            console.log(`after correct validation isFormValid: ${this.state.isFormValid}`);
        }
    }

    // validate = () => {
    //     var validity;
    //     const values = this.state
    //     console.log(values)
    //     for( const value in values){
    //         if(value === false) {
    //             validity = false
    //         }
    //     }
    //     console.log("apple");
    //     console.log(`validity is: `, validity);
    //     return validity
    // }

    // componentDidMount() {
    //     setInterval(this.handleVerify, 1000);
    // }

    handleVerify = e => {
        e.preventDefault();     //?
        const values = this.state
        console.log(values)

        //if(this.validate){
        this.validate();
        setTimeout(()=>{},500);       

        // --------- setting props value ???
        // how will it be sync with another component ?
        //this.props.messageText = "Form is Complete";            //cant be updated here just like that, to expect in another component to reflect with updated value.
        console.log(`before Props Variable messageText: ${this.props.messageText} `);
        
        if (this.state.isFormValid) {
            console.log(`Form is valid`);

            this.props.onValueChange("Form is Complete");                  //pass in a function that changes its value in parent component, so another component gets updated value.            
        }
        
        //console.log(`after Props Variable messageText: ${this.props.messageText} `);        //here always Incomplete only, coz value not changed here
    }


    handleChange = e => {
        e.preventDefault();     //?
        const { name, value } = e.target;           //target is 'name' field 
        switch (name) {
          case 'name':
            if(nameRegex.test(value)) {
                this.setState({isNameValid: true})
            } 
            break;
          case 'email':
            if(emailRegex.test(value)) {
                this.setState({isEmailValid: true})
            } 
            break;
          case 'phone':
            if(phoneRegex.test(value)) {
                this.setState({isPhoneValid: true})
            } 
            break;
          case 'blog-url':
            if(urlRegex.test(value)) {
                this.setState({isUrlValid: true})
            } 
            break;
        
          default:
            break;
        }
    }
    
    render() {
        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>
            
            <form >
                {/* Display this if form is invalid by toggling the css display property to block */}
                {/* <div className="invalid">
                    <h3>Form is incomplete</h3>
                </div> */}

                {/* Display this if form is valid by toggling the css display property to block */}
                {/* <div className="valid">
                    <h3>Form is complete</h3>
                </div> */}

                <h3 htmlFor="name">Name:
                </h3>
                <input
                    className=""
                    placeholder="Name"
                    type="text" 
                    name="name"
                    noValidate
                    onChange={this.handleChange}
                    />

                <h3>Email:
                </h3>
                <input
                    className=""
                    placeholder="Email"
                    type="email" 
                    name="email"
                    noValidate
                    onChange={this.handleChange}
                    />

                <h3>Phone:
                </h3>
                <input
                    className=""
                    placeholder="Phone"
                    type="number" 
                    name="phone"
                    noValidate
                    onChange={this.handleChange}
                    />

                <h3>Blog URL:
                </h3>
                <input
                    className=""
                    placeholder="URL"
                    type="text" 
                    name="blog-url"
                    noValidate
                    onChange={this.handleChange}
                    />

                <div className="small-6 small-centered text-center columns">
                    <a href="/" className="button success expand round text-center" onClick={this.handleVerify}>Verify</a>
                </div>
            </form>
        </div>);
    }
}

export default Form;
