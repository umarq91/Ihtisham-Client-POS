import React from 'react'
import MainPageCards from '../components/MainPageCards'

const Main = () => {
  return (
    <div className=' text-black '>


<div className=' ml-16 flex gap-16 flex-wrap'>
<MainPageCards title={'Inventory'} link={'/products'} desc={'This Is Where All the inventory is stored ! '}/>
  <MainPageCards title={'Stock in / Out'} link={'/stocks'} desc={'This Is Where Admin will manage Stocks'}/>
  <MainPageCards title={' Stock History'} link={'/stockhistory'} desc={'This Is Where All the history of purchase and sale is stored'}/>
  <MainPageCards title={'Relations'} link={'/relations'} desc={'Here is all the information of Clients and Suppliers'}/>
  
        
      </div>



    </div>
  )
}

export default Main