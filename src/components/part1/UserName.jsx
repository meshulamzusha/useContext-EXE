import React, { useContext } from 'react'
import {UserContext} from '../../App'

function UserName() {
    const name = useContext(UserContext)
  return (
    <div>{name}</div>
  )
}

export default UserName