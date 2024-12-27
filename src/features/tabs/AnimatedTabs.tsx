import React, { FC } from 'react'
import { SharedStateProvider } from './SharedContext'
import UserBottomTab from './UserBottonTab'

const AnimatedTabs:FC = () => {
  return (
   <SharedStateProvider>
    <UserBottomTab></UserBottomTab>
   </SharedStateProvider>
  )
}

export default AnimatedTabs