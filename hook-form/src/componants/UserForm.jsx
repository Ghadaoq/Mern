import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname,lastname, email, password ,confirmpassword};
        console.log("Welcome", newUser);
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>Firstname: </label> 
                <input type="text" onChange={ (e) => setfirstname(e.target.value) } />
            </div>
            <div>
                <label>Lastname: </label> 
                <input type="text" onChange={ (e) => setlastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
                <div>
                <label> ConfirmPassword: </label>
                <input type="text" onChange={ (e) => setconfirmpassword(e.target.value) } />
            </div>
                        <input type="submit" value="Create User" />
            <div>
                <h1> your form data </h1>
                <p> first name : {firstname}</p>
                <p> last name : {lastname}</p>
                <p>Email : {email}</p>
                <p>Password : password</p>
                <p>Confrim Password : confirmpassword</p>

            </div>
        </form>
    );

};
    
export default UserForm;