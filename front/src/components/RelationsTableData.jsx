import { useState } from "react";
import {Link} from 'react-router-dom'
const RelationTableData = ({users}) => {
  const [red, setred] = useState('')
  
    return (
        <>
            {
                users.map((curUser,index) => {
                    const {name,phone,relation,address,_id} = curUser;
                    
                  
                    return (
                        <tr key={index+1} className={`text-black  font-serif text-sm leading-8 font-md`}> 
                            <td>{index+1}</td>
                            <td>{relation}</td>
                            <td className="underline hover:text-blue-400 hover:pointer hover:scale-105 ">
              <Link to={`/relations/${_id}`} style={{ textDecoration: "none", color: "inherit" }}>
                {name}
              </Link>
            </td>
                            <td className=''>{phone}</td>
                            
                            <td>{address}</td>
                            <td>{}</td>

                        </tr>
                    )
                })

            }
        </>
    )
}
export default RelationTableData;