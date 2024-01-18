import React from 'react'

const Home = () => {

  
  // const history = useNavigate();
  const [userName, setUserName] = useState({});

  const userHomePage = async () => {
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
      setUserData( data.name );

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
    userContact();
  }, []);

  //We are storing data in states

  const handleInputs = (e) => {
    const name= e.target.name;
    const value = e.target.value;

    setUserData({...userData, [name]: value });
  }

  //Send the data to backend
  const contactForm = async (e) => {
    e.preventDefault();

    const { name, email, phone, message }= userData;

    const res = await fetch('/contact', {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        name,email,phone, message
      })
    });

    const data  = await res.json();

    if(!data)
    {
      console.log('message not send');
    } else{
      alert("Message send");
      setUserData({...userData, message: ""});
    }
  } 


  return (
    <div>
      <h1 className='pt-5'>Hello Navbar</h1>
    </div>
  )
}

export default Home;
