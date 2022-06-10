import React, {Component} from 'react';

// const emailRegex = RegExp(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/)
// const nameRegex = RegExp(/([A-Z][a-z])\w+/)
// const urlRegex = RegExp(/[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/)
// // Not the correct implementation yet
// const phoneRegex = RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/)
const emailRegex = RegExp(/([A-Z][a-z])\w+/)
const nameRegex = RegExp(/([A-Z][a-z])\w+/)
const urlRegex = RegExp(/([A-Z][a-z])\w+/)
// Not the correct implementation yet
const phoneRegex = RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/)

//class component

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //isEmailValid: false,
            //isNameValid: false,
            //isPhoneValid: false,
            //isUrlValid: false,
            //valid: null
            isFormValid: true
        };
    }

    validate = () => {
        var validity;
        const values = this.state
        console.log(values)
        for( const value in values){
            if(value === false) {
                validity = false
            }
        }
        return validity
    }

    handleVerify = e => {
        // e.preventDefault();
        // if(this.validate){
        //     this.setState({valid: true})
        // }

        // --------- setting props value ???
        // how will it be sync with another component ?
        this.props.messageText = "Form is Complete";
    }


    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;    
        switch (name) {
          case 'name':
            if(!nameRegex.test(value)) {
                this.setState({isFormValid: false})
            } 
            break;
          case 'email':
            if(!emailRegex.test(value)) {
                this.setState({isFormValid: false})
            } 
            break;
          case 'phone':
            if(!phoneRegex.test(value)) {
                this.setState({isFormValid: false})
            } 
            break;
          case 'blog-url':
            if(!urlRegex.test(value)) {
                this.setState({isFormValid: false})
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
                    placeholder="Name"
                    type="email" 
                    name="email"
                    noValidate
                    onChange={this.handleChange}
                    />

                <h3>Phone:
                </h3>
                <input
                    className=""
                    placeholder="Name"
                    type="number" 
                    name="phone"
                    noValidate
                    onChange={this.handleChange}
                    />

                <h3>Blog URL:
                </h3>
                <input
                    className=""
                    placeholder="Name"
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
