import React, { useState } from 'react';

const Form = props => {
    const [member, setMember] = useState({
        name: '',
        email: '',
        role: '',
    });
    
    const handleChanges = e => {
        setMember({ ...member,[e.taget.name]: e.target.value });
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({
            name: '',
            email: '',
            role: ''
        })
    }
    return(
       <form onSubmit={submitForm}>
           <label htmlFor='name'>Name:</label>
           <input id='name' type='text' name='name' onChange={handleChanges} value={member.name} placeholder='Name'/>
           <label htmlFor='email'>Email:</label>
           <input id='email' type='email' email='email' onChange={handleChanges} value={member.email} placeholder='Email'/>
           <label htmlFor='role'>Role:</label>
           <input id='role' type='text' role='role' onChange={handleChanges} value={member.role} placeholder='Role'/>
           <div>
           <button type='submit'>Submit</button>
           </div>
        </form>
    )
};

export default Form