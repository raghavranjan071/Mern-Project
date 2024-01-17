import React from 'react'

const Login = () => {
  return (
    <>
      <section>
        <div className='signup'>
          <div className='container mt-5'>
            <div className='signup-content'>
              <div className='signup-form'>
                <h2 className='form-title'>Sign up</h2>
                <form className='register-form' id='register-from'>
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

export default Login;
