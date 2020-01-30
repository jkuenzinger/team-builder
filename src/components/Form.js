import React, { useState } from 'react';

const Form = props => {
    const [member, setMember] = useState({
        Name: '',
        Email: '',
        Role: '',
    });
    
    const handleChanges = e => {
        setMember({...member, [e.target.name]: e.target.value});
       
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({
            Name: '',
            Email: '',
            Role: ''
        });
    };
    return(
       <form onSubmit={submitForm}>
           <div>
           <label htmlFor='name'>Name:</label>
           <input id='name' type='text' name='name' onChange={handleChanges} value={member.name}/>
           </div>
           <div>
           <label htmlFor='email'>Email:</label>
           <input id='email' type='email' name='email' onChange={handleChanges} value={member.email} />
           </div>
           <div>
           <label htmlFor='role'>Role:</label>
           <input id='role' type='text' name='role' onChange={handleChanges} value={member.role} />
           </div>
           <div>
           <button type='submit'>Submit</button>
           </div>
        </form>
    );
};

export default Form