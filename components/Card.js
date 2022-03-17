import React from 'react'

function Card({ ip, port, latency, country}) {
  return (
          <div className="">
              <div className="rounded">
                  <div 
                  className="lg:h-60 lg:w-80  w-full h-40 flex flex-col justify-around mb-6 py-5 px-4 bg-white rounded-[0px_0px_0px_0px] shadow-[16px_16px_rgba(0,0,0,.20)] transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-[8px_8px_rgba(0,0,0,.25)] hover:rounded-[0px_0px_25px_25px]">
                      <div>
                          <h4 className="text-gray-600 font-bold mb-3">Ipaddress : {ip}</h4>
                          <p className="text-gray-600 text-sm">Port : {port}</p>
                          <p className="text-gray-600 text-sm ">Latency : {latency} ms</p>
                      </div>
                      <div>
                          <div className="flex items-center justify-between text-gray-800">
                              <p className="text-sm animate-[wiggle_1s_ease-in-out_infinite]">Country : {country}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

        
        
     )
}

export default Card

 {/* <div classNameName='basis-2/5 mx-8'>
        //             ipaddress:{ip}
        //             port:{port} 
        //             latency:{latency} 
        //             country:{country}
        //      </div> */}

