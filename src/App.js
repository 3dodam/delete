import './App.css';
import { useState } from 'react';

function App() {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const onSubmit=(e)=>{
    //form은 전송 후에 refresh(새로고침)
    e.preventDefault();
    console.log(username,password)
  }

  
  // submit 버튼이 아니라 form에 onSubmit 함수를 줌
  //onChange는 값이 바뀔 때마다 실행하는 함수
  return (
    <>
    <form onSubmit={onSubmit}>
      <input placeholder='Username' value={username}
      onChange={(e)=>{setUsername(e.target.value)}}/><br/>

      <input placeholder='password' value={password}
      onChange={(e)=>{
        setPassword(e.target.value)
        console.log(password)
      }}
      /><br/>

      <button type='submit'>Update</button>
    </form>
    </>
  )
}


export default App;
