import { useState } from "react";
import {Link} from 'react-router-dom'
const StockHistoryData = ({user,date}) => {

 
  var dateOnly = user.createdAt.split('T')[0];

    return (
        <>

                       <tr  className={`text-black font-semibold font-serif text-sm ${user.stock==='StockOut'? 'bg-red-300' : 'bg-green-200'}`}> 
                        
                            <td>{user.billno}</td>
                            <td>{user.personname} <span className="text-sm">({user.relation}) </span></td>
                            <td className="underline hover:text-blue-400 hover:pointer hover:scale-105 cursor-pointer ">
              
                {user.name}
              
            </td>
                            <td>{user.than}</td>
                            
                            <td>{user.meter}</td>
                            <td>{user.purchaserate}</td>
                            <td>{user.rate}</td>
                            <td className=" text-lg">{user.total} Rs</td>
                            <td className=" text-sm">{dateOnly}</td>




                        </tr>
                      
           
             

        </>
    )
}
export default StockHistoryData;