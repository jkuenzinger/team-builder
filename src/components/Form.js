import React, { useState } from 'react';

const Form = props => {
    const [member, setMember] = useState({
        name: '',
        email: '',
        role: '',
    });
    
    const handleChanges = e => {
        setMember({ ...member, [e.taget.name]: e.target.value});
        console.log(Form);
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