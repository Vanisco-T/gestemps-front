import { Menu } from 'antd'
import React from 'react'
import {AppstoreOutlined,HomeOutlined,UserOutlined,MoneyCollectOutlined,HistoryOutlined,SnippetsOutlined} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
function SideMenu() {
    const navigate =useNavigate();
  return (
    <div className='SideMenu'>
      <Menu 
      onClick={(item) =>{
        navigate(item.key);
      }}
      items={
        [{
        label:"Enseignant",
        icon:<AppstoreOutlined/>,
        key:'/dashboard/dash'
      },
      {
        label:"Salle",
        icon:<HomeOutlined />,
        key:'/dashboard/class'
      },
      {
        label:"Cours",
        icon:<UserOutlined />,
        key:'/dashboard/owner'
      },
      {
        label:"Classes",
        icon:<MoneyCollectOutlined />,
        key:'/dashboard/payement'
      },
      {
        label:"Niveau",
        icon:<HistoryOutlined />,
        key:'/dashboard/history'
      },
      {
        label:"Filiere",
        icon:<SnippetsOutlined />,
        key:'/dashboard/filiere'
      },
      ]}>

      </Menu>
    </div>
  )
}

export default SideMenu