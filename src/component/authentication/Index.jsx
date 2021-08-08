import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import style from './Index.module.css'
import Button from '@material-ui/core/Button'

function Index () {
  const [show, setShow] = useState(false)
  return (
    <>
      <div className={style.mainNav}>
        <div className={style.navbar}>
          <div>
            <h1 style={{ color: 'white' }}>EDUCATION</h1>
          </div>
          <div className={style.btnDiv}>
            <Button
              onClick={() => setShow(true)}
              variant='contained'
              color='primary'
            >
              Register
            </Button>
            <Button
              onClick={() => setShow(false)}
              variant='contained'
              color='primary'
            >
              Login
            </Button>
          </div>
        </div>
      </div>
      {show ? <Register /> : <Login />}
    </>
  )
}

export default Index
