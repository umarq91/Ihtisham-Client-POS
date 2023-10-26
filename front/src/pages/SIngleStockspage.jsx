import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const SingleStockPage = () => {

const [name,setname] = useState('')
const [supplier,setSupplier] = useState('')
const [than,setThan] = useState(0)
const [meter,setmeter] = useState(0)
const [rate,setrate] = useState('')
const [stocktype,setstocktype] = useState('StockOut')
const [successmessage,setSuccessMessage] = useState(false)
 const [errormessage,setErrorMessage] = useState(false)
 const [total,settotal] = useState(0)
 const [purchaserate,setpurchaserate] = useState(0)
const [client,setclient] = useState('')
const params = useParams()


const postData = async (e)=>{
    e.preventDefault()
    const send = await axios.post('http://localhost:3000/stocks/stocksupdate', { name,client, supplier, than, meter, id:params.id ,purchaserate,rate,stocktype,total});

    if (send.statusText === 'OK') {
      setSuccessMessage(true);

      setTimeout(() => {
        setSuccessMessage(false);
      }, 4000);

      
    } else {
      setErrorMessage(true);
    }
   
}





useEffect(() => {
    let fetchData = async () => {
      let res = await fetch(`http://localhost:3000/products/${params.id}`).then((res) => res.json()).then((data) =>{

          
          setname(data[0].name)
          
          setrate(data[0].rate)
        
        }
       
       );
    };
    fetchData();
  }, []);
  
  const handleMeter = (e) => {
    const newMeterValue = e.target.value;
    setmeter(newMeterValue);
    settotal(newMeterValue * rate); // Use the updated meter value
  };

 

  return (
<div className="flex justify-center items-center h-screen text-black ">
      <div className="mx-auto border-gray text-center items-center border-2 max-w-[1920px] px-4 md:px-8 2xl:px-16">
        <div className="md:w-full lg:w-3/5  2xl:w-4/6 flex  text-center items-center h-full ltr:md:ml-7 rtl:md:mr-7 flex-col ltr:lg:pl-7 rtl:lg:pr-7">
          <div className="flex   pb-7 md:pb-9 mt-7 md:-mt-1.5 ">
            <h4 className="text-2xl 2xl:text-3xl font-bold text-heading pl-14 mt-2">
              Product Update!
            </h4>
          </div>


          <form
            className="w-full min-w-[500px] mx-auto flex flex-col justify-center " noValidate>
            <div className="flex flex-col space-y-5">
              <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 gap-4">
                <div className="w-full md:w-1/2 ">
                  <label
                    htmlFor="name"
                    value={name}
                    className="block white font-semibold text-sm leading-none mb-3 cursor-pointer" >
                    Product Name (required)
                  </label>
                  <input 
                  value={name}
                 
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter Kapra/product Name"
                    className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                    autoComplete="off"
                    spellCheck="false"
                    aria-invalid="false"
                  />
                </div>

{stocktype==='StockOut'? (

<div className="w-full md:w-1/2 ltr:md:ml-2.5 rtl:md:mr-2.5 ltr:lg:ml-5 rtl:lg:mr-5 mt-2 md:mt-0">
<label
  htmlFor="email"
  className="block white font-semibold text-sm leading-none mb-3 cursor-pointer"
>
 Supplier Name (required)
</label>
<input
value={supplier}
onChange={(e)=>setSupplier(e.target.value)}


  id="email"
  name="email"
  type="email"
  placeholder="Enter Supllier's Name"
  className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
  autoComplete="off"
  spellCheck="false"
  aria-invalid="false"
/>
</div>

 ):(
  <div className="w-full md:w-1/2 ltr:md:ml-2.5 rtl:md:mr-2.5 ltr:lg:ml-5 rtl:lg:mr-5 mt-2 md:mt-0">
  <label
    htmlFor="email"
    className="block white font-semibold text-sm leading-none mb-3 cursor-pointer"
  >
   Client Name (required)
  </label>
  <input
  value={client}
 

    id="email"
    name="email"
    type="email"
    placeholder="Enter Supllier's Name"
    className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
    autoComplete="off"
    spellCheck="false"
    aria-invalid="false"
    onChange={(e)=>setclient(e.target.value)}
  />
</div>



  )}

             



              </div>


              <div className="w-full text-center">
                <label
                  htmlFor="subject"
                  className=" block mr-2 white font-semibold text-sm leading-none mb-3 cursor-pointer"
                >
                Current Sell  Rate
                </label>
                <input
                  
    value={rate}
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enter Thaans quantity"
                  className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                  autoComplete="off"
                  spellCheck="false"
                  aria-invalid="false"
                />
              </div>

<label className='font-bold text-2xl'> SELECT TYPE  </label>

              <select className="w-full p-2.5 bg-red-600 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
      value={stocktype}
      onChange={(e)=>setstocktype(e.target.value)}>
      <option  value="StockOut">STOCK OUT</option>
      <option  value="StockIn">STOCK IN</option>

    </select>




              <div className='flex gap-2'>

              
              <div className="w-full">
                <label
                  htmlFor="subject"
                  className=" block mr-2 white font-semibold text-sm leading-none mb-3 cursor-pointer"
                >
                  Thaan
                </label>
                <input
                  onChange={(e)=> setThan(e.target.value)}
    value={than}
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enter Thaans quantity"
                  className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                  autoComplete="off"
                  spellCheck="false"
                  aria-invalid="false"
                />
              </div>


              <div className="w-full">
                <label
                  htmlFor="subject"
                  className="block white font-semibold text-sm leading-none mb-3 cursor-pointer"
                >
                  Meter
                </label>
                <input
                value={meter}
                  onChange={handleMeter}

                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enter Meters"
                  className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                  autoComplete="off"
                  spellCheck="false"
                  aria-invalid="false"
                />
              </div>

              </div>


{stocktype==='StockIn' && (




              <div className="w-full">
                <label
                  htmlFor="subject"
                  className=" block mr-2 white font-semibold text-sm leading-none mb-3 cursor-pointer"
                >
                  Purchase Rate
                </label>
                <input
                  onChange={(e)=> setpurchaserate(e.target.value)}
    value={purchaserate}
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enter Thaans quantity"
                  className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                  autoComplete="off"
                  spellCheck="false"
                  aria-invalid="false"
                />
              </div>
             
             )}



              <div className="relative">
                <button
                  data-variant="flat"
                  className="text-[13px]  md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none  bg-black text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full "
                  type="submit"
                  onClick={postData}
                >
                Update
                </button>
              </div>
            </div>
          </form>

          <div className='mt-4 text-center items-center ml-32 font-semibold'>
          Total:   {total}
          </div>

{
  successmessage &&
<div class="p-4 mb-4 mt-2 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
  <span class="font-medium">Success</span> Product has been Successfully Updated
</div>
}
{
  errormessage &&
<div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">Error</span> Something is wrong!
</div>
}
          
        </div>
</div>
  </div>
  )
}

export default SingleStockPage