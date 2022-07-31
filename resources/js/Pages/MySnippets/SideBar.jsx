import React from 'react'
import NavLink from '@/Components/NavLink'

const SideBar = () => {

  const sideBar = (
    <div className='side-bar__wrapper'>
      <div className='side-bar-list'> 
        <NavLink href={route('my-snippets')} active={route().current('my-snippets')}>
            My Snipps
        </NavLink>
      </div>

      <div className='side-bar-list'> 
        <NavLink href={route('my-snippets.create')} active={route().current('my-snippets.create')}>
            Add Snipp
        </NavLink>
      </div>
    </div>
  )

  return sideBar
 
}

export default SideBar