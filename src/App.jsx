// import { useState } from 'react'
import './App.css'
import { Welcome } from './assets/components/tasks/Exercise_1'
import { Loading } from './assets/components/tasks/Exercise_2'

function App() {

  return (
    <>
    <div className='flex'>
    <Welcome />
    <Loading />
    </div>
    </>
  )
}

export default App
