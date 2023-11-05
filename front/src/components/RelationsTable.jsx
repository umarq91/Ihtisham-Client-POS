import {useEffect, useState} from "react";
import UserData from "./productData.jsx";
import RelationTableData from './RelationsTableData.jsx'
const RelationTable = ({API}) => {
    const [users, setUsers] = useState([]);
    
    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            console.log(res);
            const data = await res.json();
            if (data.length > 0) {
                setUsers(data);
            }
            
        } catch (e) {
            console.error(e)
        }
    }
    useEffect(() => {
        fetchUsers(API);
    }, [API])


    
    return <>
        <table className="w-full ml-2 items-center ">
            <thead className="p-2">
            <tr className="">
            <th className="px-2">Id</th>
                
                <th className="w-fit">Supplier</th>
                <th className="pr-24 min-w-[50px] max-w-[100px]">Name</th>
                <th className="px-2">Phone</th>
                <th className="">Address</th>
               
            </tr>
            </thead>
            <tbody>
           
            <RelationTableData users={users}/>
            
            </tbody>
        </table>
    </>
}

export default RelationTable;