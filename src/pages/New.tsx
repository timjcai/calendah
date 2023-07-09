import React from 'react'
import { InputForm } from '../components/common/Form'
import { NavWrapper, NavMapping, NavButton } from '../components/Navbar/Navbar'

export const New = () => {
  return (
    <>
      <NavWrapper>
        <NavButton navigation={ NavMapping['calendar'] }/>
      </NavWrapper>
      <div className="m-20">
        <h1>New Event Page</h1>
        <InputForm />
      </div>
    </>
  )
}
