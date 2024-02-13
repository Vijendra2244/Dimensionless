import React from 'react'
import InputBar from '../input/InputBar'
import Profile from '../profile/Profile'
import styles from "./TopLeft.module.css"

function Topleft() {
  return (
    <div className={styles.topleft}>
        <InputBar/>
        <Profile/>
    </div>
  )
}

export default Topleft