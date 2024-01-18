import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = () => {

  const history = useNavigate();
  const [user, setUser] = useState({
    name: "", email:"", phone: "", work: "", password: "", cpassword: ""
  });

  let name, value;

  const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]: value});
  }

  const PostData = async (e) => {
    e.preventDefault();

    const {name, email, phone, work, password, cpassword} =user;

    const res = await fetch('/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password
        ,cpassword
      })
    });

    const data = await res.json();

    if(data.status === 422 || !data)
    {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }else{
      window.alert("Registration Successful");
      console.log("Successful Registration");

      history.push("/login");
    }
  }
  return (
    <>
      <section>
        <div className='signup'>
          <div className='container mt-5'>
            <div className='signup-content'>
              <div className='signup-form'>
                <h2 className='form-title'>Sign up</h2>
                <form method='POST' className='register-form' id='register-from'>
                  <div className='form-group'>
                    <label htmlFor='name'>
                      <i className='zmdi zmdi-account material-icons-name'></i>
                    </label>

                    <input type='text' name='name' id='name' autoComplete='off' placeholder='Your Name'/>

                  </div>

                  <div className='form-group'>
                    <label htmlFor='name'>
                      <i className='zmdi zmdi-account material-icons-name'></i>
                    </label>

                    <input type='text' name='name' id='name' autoComplete='off' placeholder='Your Name'/>

                  </div>

                  <div className='form-group'>
                    <label htmlFor='name'>
                      <i className='zmdi zmdi-account material-icons-name'></i>
                    </label>

                    <input type='text' name='name' id='name' autoComplete='off' placeholder='Your Name'/>

                  </div>

                  <div className='form-group'>
                    <label htmlFor='name'>
                      <i className='zmdi zmdi-account material-icons-name'></i>
                    </label>

                    <input type='text' name='name' id='name' autoComplete='off' placeholder='Your Name'/>

                  </div>

                  <div className='form-group'>
                    <label htmlFor='name'>
                      <i className='zmdi zmdi-account material-icons-name'></i>
                    </label>

                    <input type='text' name='name' id='name' autoComplete='off' placeholder='Your Name'/>

                  </div>

                  <div className='form-group'>
                    <label htmlFor='name'>
                      <i className='zmdi zmdi-account material-icons-name'></i>
                    </label>

                    <input type='text' name='name' id='name' autoComplete='off' placeholder='Your Name'/>

                  </div>

                  <div className='form-group form-button'>
                    <input type='submit' name='signup' id='signup' className='form-submit' value='register' onClick={PostData} />
                  </div>
                </form>

                <div className='signup-image'>
                  <figure>
                    <img src='' alt='registration pic'/>
                  </figure>

                  {/* This will take me to login page */}
                  <NavLink to='/login' className= "signup-image-link">I am already registered</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>

    </>
  )
}

export default Signup;
