import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";

export default function Drop() {
    
    
    const [nation, setNation] = useState()

    const [data, setData] = useState([])

    const [search, setSearch] = useState("")

    useEffect(() => {
        getData()
        
      }, [search])

    // const filteredCountry = data.fill((ip) => {
    //      ip.country.includes(search)
    // })

    const submit = (e) => {
      e.prevenDefault();
      getData();
    } 

      async function getData(){
        const url = `https://proxypage1.p.rapidapi.com/v1/tier1?type=HTTP&limit=100&country=${nation}`//idhar inpuut dalna hai
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

    return (
        <>
            <div className="relative flex space-x-4 items-center max-w-md mx-auto mt-12 overflow-hidden text-center rounded-full">   
                <div className="relative inline-flex">
                    <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232">
                        <path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fillRule="nonzero" />
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
                            <option value="UK">United Kingdom</option>
                            <option value="RU">Russia</option>
                    </select>
                </div>
                    <span className="relative top-0 right-0 block">       
                        <input 
                            type="submit" 
                            value="Get Proxies" 
                            className="inline-flex justify-center items-center w-42 h-12 px-5 text-base font-bold rounded-full text-white transition duration-150 ease-in-out bg-indigo-400 border border-x-white hover:bg-indigo-700 focus:outline-none active:bg-indigo-700"
                            onChange={(event) => {
                            setSearch(event.target.value)
                            }}
                            onSubmit={submit}
                        />
                    </span>
             </div>
             
                {data.map((ip) => (
                     <Card ip={ip.ip} port={ip.port} latency={ip.latency} country={ip.country} />
                ))}
        </>
        
    );
}

