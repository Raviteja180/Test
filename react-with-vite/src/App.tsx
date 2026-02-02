import { useState } from 'react'
import './App.css'

interface IFormData{
  firstName: string,
  lastName: string,
}
function App() {
  const [formData, setformData] = useState<IFormData>({
    firstName: "",
    lastName: ""
  });

  const formhandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const name = e.target.name;
    const value = e.target.value;
    setformData({...formData,[name] : value})
  }

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault() 
  }
  return (
    <>
      <form method ="GET" action="/submit" onSubmit={handleSubmit}>
        firstName : <input type="text" name="firstName" value={formData.firstName} onChange={formhandler}/>
        lastName : <input type="text" name="lastName" value={formData.lastName} onChange={formhandler}/>
        <button type="submit">Submit</button>

        <div>
          entered formData is 
          {
            Object.keys(formData).map(key => (
              <div key={key}>
                {key}: {formData[key as keyof IFormData]}
              </div>
            ))
          }
        </div>
      </form>
    </>
  )
}

export default App
