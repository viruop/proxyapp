import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";

export default function Drop() {
    
    
    const [nation, setNation] = useState()

    const [data, setData] = useState([])

    useEffect(() => {
        getData()
        async function getData(){
          const url = `https://proxypage1.p.rapidapi.com/v1/tier1?type=HTTP&limit=100&country=${nation}`
          const result = await fetch(url, {
            "method": "GET",
            "headers": {
              "content-type": "application/x-www-form-urlencoded",
              "x-rapidapi-host": "proxypage1.p.rapidapi.com",
              "x-rapidapi-key": "a6cc0b0894mshe09d3ef836f5323p120ac3jsn237217fed002"
            }
          })
          const getResult = await result.json();
          setData(getResult);
          console.log(getResult)
        }
      }, [nation])

    const submit = (e) => {
      e.prevenDefault();
      
    } 

      

    return (
        <>
            <div className="relative flex space-x-4 items-center max-w-[21rem] mx-auto mt-12 mb-[1.5rem] overflow-hidden text-center rounded-full">   
                <div className="relative inline-flex">
                <svg className=" w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/>
                </svg>
                    <select 
                        value={nation}
                        onChange={(event) => {
                            setNation(event.target.value)
                        }}
                        
                        className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none" >
                            <option value="Please Select Country">Choose Country</option>
                            <option value="US">United States</option>
                            <option value="IN">India</option>
                            <option value="TR">Turkey</option>
                            <option value="RU">Russia</option>
                            <option value="TH">Thailand</option>
                            <option value="SG">Singapore</option>
                    </select>
                </div>
                    <span className="relative top-0 right-0 block">       
                        <input 
                            type="submit" 
                            value="Get Proxies" 
                            className="inline-flex justify-center items-center w-42 h-12 px-5 text-base font-bold rounded-full text-white transition duration-150 ease-in-out bg-indigo-400 border border-x-white hover:bg-indigo-700 focus:outline-none active:bg-indigo-700"
                            onSubmit={submit}
                        />
                    </span>
             </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:auto-cols-auto gap-6">
                {data.map((ip,idx) => (
                    <Card key={idx} ip={ip.ip} port={ip.port} latency={ip.latency} country={ip.country} />                
                ))}
                </div>
        </>
        
    );
}

