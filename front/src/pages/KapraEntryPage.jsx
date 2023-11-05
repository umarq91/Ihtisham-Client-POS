import React, { useState } from 'react'
import axios from 'axios'


const KapraEntryPage = () => {

const [name,setname] = useState('')
const [supplier,setSupplier] = useState('')
const [than,setThan] = useState('')
const [meter,setmeter] = useState('')
const [rate,setrate] = useState('')
const [purchaserate,setpurchaserate] = useState('')
const [successmessage,setSuccessMessage] = useState(false)
 const [errormessage,setErrorMessage] = useState(false)

const postData = async (e)=>{
    e.preventDefault()
    const send = await axios.post('http://localhost:3000/kapraentry', { name, supplier, than, meter, rate ,purchaserate});

    if (send.statusText === 'OK') {
      setSuccessMessage(true);

      setTimeout(() => {
        setSuccessMessage(false);
      }, 4000);

      setname('');
      setSupplier('');
      setThan('');
      setmeter('');
      setrate('');
      
    } else {
      setErrorMessage(true);
    }
   
}


  return (
<div className="flex justify-center items-center h-screen">
      <div className="mx-auto border-gray text-center items-center border-2 max-w-[1920px] px-4 md:px-8 2xl:px-16 text-black">
        <div className="md:w-full lg:w-3/5  2xl:w-4/6 flex  text-center items-center h-full ltr:md:ml-7 rtl:md:mr-7 flex-col ltr:lg:pl-7 rtl:lg:pr-7">
          <div className="flex   pb-7 md:pb-9 mt-7 md:-mt-1.5 ">
            <h4 className="text-2xl 2xl:text-3xl font-bold text-heading pl-14 mt-2">
              Product Entry
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
                  onChange={(e)=> setname(e.target.value)}
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
                <div className="w-full md:w-1/2 ltr:md:ml-2.5 rtl:md:mr-2.5 ltr:lg:ml-5 rtl:lg:mr-5 mt-2 md:mt-0">
                  <label
                    htmlFor="email"
                    className="block white font-semibold text-sm leading-none mb-3 cursor-pointer"
                  >
                   Supplier Name (required)
                  </label>
                  <input
                  value={supplier}
                  onChange={(e)=> setSupplier(e.target.value)}

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
              </div>








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
                  onChange={(e)=> setmeter(e.target.value)}

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


{/*  Purchase and Sell Rate */}
          <div className='flex gap-2'>

    <div className='w-full'>
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
                  placeholder="Enter the rate per meter"
                  className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                  autoComplete="off"
                  spellCheck="false"
                  aria-invalid="false"
                />
    </div>
    <div className="w-full">
                <label
                  htmlFor="subject"
                  className=" block mr-2 white font-semibold text-sm leading-none mb-3 cursor-pointer"
                >
                 Sell Rate
                </label>
                <input
                  onChange={(e)=> setrate(e.target.value)}
value={rate}
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enter the rate per meter"
                  className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                  autoComplete="off"
                  spellCheck="false"
                  aria-invalid="false"
                />
              </div>

          </div>





              <div className="relative">
                <button
                  data-variant="flat"
                  className="text-[13px]  md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none  bg-black text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full "
                  type="submit"
                  onClick={postData}
                >
                  Save
                </button>
              </div>
            </div>
          </form>

{
  successmessage &&
<div class="p-4 mb-4 mt-2 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
  <span class="font-medium">Success</span> Product has been Successfully added
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

export default KapraEntryPage