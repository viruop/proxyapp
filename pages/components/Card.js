import React from 'react'

function Card({ ip, port, latency, country}) {
  return (
    <div>
        <div>ipaddress:{ip} </div>
        <div>port:{port} </div>
        <div>latency:{latency} </div>
        <div>country:{country} </div>
    </div>
  )
}

export default Card
