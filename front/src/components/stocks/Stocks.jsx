import {useEffect, useState} from "react";
import StocksData from "./StocksData.jsx";

const Stocks = ({API}) => {
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
                
                <th>Supplier</th>
                <th className="pr-24">Name</th>
                <th className="px-2">Than</th>
                <th className="">Meter</th>
                <th className="">rate</th>
            </tr>
            </thead>
            <tbody>
            <StocksData  users={users}/>
            </tbody>
        </table>
    </>
}

export default Stocks;