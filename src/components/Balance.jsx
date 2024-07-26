import {useState, useEffect } from 'react'
const {ethereum} = window

export function Balance() {
    const [cuenta, setCuenta] = useState(null)
    useEffect(() => {
        ethereum && ethereum.request({method: 'eth_requestAccounts'}).then(cuenta => {
            setCuenta(cuenta[0])
        ethereum.on('accountsChanged', (i)=>{
                setCuenta(i[0])
            })
        })
    }, [])
    
    
    if(!ethereum){
        return <div>No metamask connection detected</div>
    }
    
    return <h2> { cuenta ? cuenta : "Cargando..."} </h2>
    
}