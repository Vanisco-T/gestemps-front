import React from 'react'
import './Dashboard.css'
import {Space} from 'antd'
import SideMenu from '../component/SideMenu'
import { Outlet } from 'react-router-dom'
function Dashboard() {
  return (
    <div className='dash'>
      <Space className='SideMenuAndPageContent'>
        <SideMenu></SideMenu>
          
            <div className='pageContent'>
            <Outlet/>
            </div>
          
      </Space>
    </div>
  )
}

export default Dashboard