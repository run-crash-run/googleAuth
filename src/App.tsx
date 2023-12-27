import './App.css'
import { GoogleLogin } from '@react-oauth/google'

interface LoginResponse {
  
}

function App() {
  const handleLoginSuccess = (response: LoginResponse) => {
    //swap this out for whatever you want to happen when the user logs in (redirect, etc)
    console.log('Login Successful:', response)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          To configure, you just need to go to the google cloud console and fetch your client ID <br />
          The google cloud console is currently available here: https://console.cloud.google.com/ <br />
          Then change the value of clientId in index.tsx to your client ID (and remove this paragraph)
        </p>
        <GoogleLogin 
          onSuccess={handleLoginSuccess} 
        />
      </header>
    </div>
  )
}

export default App