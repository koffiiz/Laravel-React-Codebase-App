import React from 'react'
import NavLink from '@/Components/NavLink'

const DashboardSideBar = () => {

  const sideBar = (
    <div className='side-bar__wrapper'>
      <div className='side-bar-list'> 
        {/* <NavLink href={route('my-snippets')} active={route().current('my-snippets')}>
            My Snipps
        </NavLink> */}
        <div> Filters </div>
        <div>* On Development * </div>
      </div>

    </div>
  )

  return sideBar
 
}

export default DashboardSideBar