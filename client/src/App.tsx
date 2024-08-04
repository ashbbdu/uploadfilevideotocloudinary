
import axios from 'axios';
import { useState } from 'react';
import './App.css'

function App() {
  const [file , setFile] = useState()
  
const handleFileChange = (event : React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.files, "event");
  setFile(event.target.files[0] )

}

const handleImageUpload = async (e : any) => {
  e.preventDefault()
  const formData = new FormData();
  formData.append("image" , file)
  for (var key of formData.entries()) {
    console.log(key[0] + ', ' + key[1]);
  }
  
const url = "http://localhost:4000/api/v1/uploadImage"
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  axios.post(url, formData, config).then((response) => {
    console.log(response.data);
  });
  
}
  return (
    <>
     <p onClick={() => console.log("hii")
     }>hello</p> 
     <input type="file" onChange={handleFileChange} />
     <button onClick={handleImageUpload}>Upload Image</button>
    </>
  )
}

export default App
