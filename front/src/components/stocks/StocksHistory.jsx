    
    
import {useEffect, useState} from "react";
import StocksHistoryData from "./StockHistoryData.jsx";

const StocksHistory = ({API}) => {
    const [users, setUsers] = useState([]);
    
    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            console.log(res);
            const data = await res.json();
            if (data.length > 0) {
                setUsers(data.reverse());
            }
            
        } catch (e) {
            console.error(e)
        }
    }
    useEffect(() => {
        fetchUsers(API);
    }, [API])


    
    return <>
        <table className="w-full  items-center ">
            <thead className="">
            <tr className="">
            <th className="px-2">BillNo</th>
                
                <th>Buyer/seller</th>
                <th className="">Product</th>
                <th className="px-2">Than</th>
                <th className="">Meter</th>
                <th className="">Purchase Rate</th>
                <th className="">Sell Rate</th>
                <th className="">Total</th>
                <th className="">Date</th>

            </tr>
            </thead>
            <tbody>
            <StocksHistoryData  users={users}/>
            </tbody>
        </table>
    </>
}

export default StocksHistory;