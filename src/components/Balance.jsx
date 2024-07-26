import {useState, useEffect } from 'react'
import {ethers} from 'ethers'

const {ethereum} = window


export function Balance() {
    const [cuenta, setCuenta] = useState(null)
    const [balance, setBalance] = useState(null)
    useEffect(() => {
        ethereum && ethereum.request({method: 'eth_requestAccounts'}).then(cuenta => {
            setCuenta(cuenta[0])
        ethereum.on('accountsChanged', (i)=>{
                setCuenta(i[0])
            })
        })
    }, [])

    useEffect(() => {
        if(cuenta){
            console.log("writing ethers",ethers);
            const provider = new ethers.BrowserProvider(ethereum);
            provider.getBalance(cuenta).then(balance =>{
                console.log(ethers.formatEther(balance) );
                setBalance(ethers.formatEther(balance) );
            })
        }
        
    }, [cuenta])
    
    
    if(!ethereum){
        return <div>No metamask connection detected</div>
    }
    
    return (<div> 
            <p> { cuenta ? cuenta : "Cargando..."}</p>
            <p> { balance ? balance : "Cargando..."}</p>
            </div>
    )   
    
}