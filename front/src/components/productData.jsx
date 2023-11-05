import { useState } from "react";
import {Link} from 'react-router-dom'
const UserData = ({users}) => {
  const [red, setred] = useState('')
   
    return (
        <>
            {
                users.map((curUser,index) => {
                    const {name,supplier,than,meter,purchaserate,rate,_id} = curUser;
                    
                  
                    return (
                     

                       <tr key={index+1} className={`text-black font-semibold font-serif`}> 
                        
                            <td>{index+1}</td>
                            <td>{supplier}</td>
                            <td className="underline hover:text-blue-400 hover:pointer hover:scale-105 ">
              <Link to={`/products/${_id}`} style={{ textDecoration: "none", color: "inherit" }}>
                {name}
              </Link>
            </td>
                            <td className={` ${than<3 && 'bg-red-700' }`}>{than}</td>
                            
                            <td>{meter}</td>
                            <td>{purchaserate}</td>
                            <td>{rate}</td>

                        </tr>
                      
                    )
                })

            }
        </>
    )
}
export default UserData;