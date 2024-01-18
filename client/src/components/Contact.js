import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';

const Contact = () => {

  
  // const history = useNavigate();
  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try{
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      console.log(data);

      if(!res.status === 200)
      {
        const error = new Error(res.error);
        throw error;
        
      }

    }catch(err)
    {
      console.log(err);
      // history.push('/login');
    }
  }

  useEffect(()=> {
    callAboutPage();
  }, []);

  return (
    <div>
      <h1>Hello Contact</h1>
    </div>
  )
}

export default Contact;
