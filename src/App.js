import React, { useEffect } from 'react'
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:3001";


export const App = () => {
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("lol", data => {
      console.log(data)
    })

    return () => {
      socket.disconnect()
    }
  }, [])
  return (
    <div>
      hola
    </div>
  )
}