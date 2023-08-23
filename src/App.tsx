import React,{useEffect} from 'react'
import './App.css';
import {useAppSelector, useAppDispatch} from './hook/redux'
import {userSlice} from './store/reducer/UseSlice'
import {fetchUsers} from './store/reducer/ActionCreators'
import PostConteiner from './componets/PostConteiner';
import PostConteiner2 from './componets/PostConteiner2';

function App() {  

  // const dispatch = useAppDispatch()    
  // const {users,isLoading,error} = useAppSelector(state => state.userReducer)

  // useEffect(() => {
  //   dispatch(fetchUsers())
  // },[])

  return(
    <div className='App'>
      <div style={{display:'flex'}}>
        <PostConteiner />
        <PostConteiner2 />

      </div>
      {/* {isLoading && <h1>...загрузка</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users,null,2)} */}
    </div>    
  )
}

export default App

