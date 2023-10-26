import { useState } from "react";
import {Link} from 'react-router-dom'
const StockHistoryData = ({users}) => {
  const [red, setred] = useState('')
   
    return (
        <>
            {
                users.map((curUser,index) => {

                    const {name,supplier,than,meter,rate,_id,billno,personname,relation,purchaserate,total,createdAt} = curUser;
                    var dateOnly = createdAt.split('T')[0];
                  
                    return (
                     

                       <tr key={index+1} className={`text-black font-semibold font-serif`}> 
                        
                            <td>{billno}</td>
                            <td>{personname} <span className="text-sm">({relation}) </span></td>
                            <td className="underline hover:text-blue-400 hover:pointer hover:scale-105 bg-green-400 ">
              <Link to={`/stocks/${_id}`} style={{ textDecoration: "none", color: "inherit" }}>
                {name}
              </Link>
            </td>
                            <td className={` ${than<3 && 'bg-red-700' }`}>{than}</td>
                            
                            <td>{meter}</td>
                            <td>{purchaserate}</td>
                            <td>{rate}</td>
                            <td className="bg-green-400">{total} Rs</td>
                            <td className="bg-green-400 px-8">{dateOnly}</td>




                        </tr>
                      
                    )
                })

            }
        </>
    )
}
export default StockHistoryData;