import {useState, useEffect } from 'react'
import {ethers} from 'ethers'
import { useForm } from 'react-hook-form'

const {ethereum} = window


export function Balance() {
    const {register, handleSubmit} = useForm();
    const [cuenta, setCuenta] = useState(null)
    const [balance, setBalance] = useState(null)
    const [ok, setOk] = useState(null)
    const [ko, setKo] = useState(null)

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

    async function  submit(data){
       const parameters = {
        from:cuenta,
        to: data.address,
        value: ethers.parseEther(data.amount).toString(16)
       }
       console.log("Priting parameters", parameters);

       try {
            const txHash = await ethereum.request({
                method: 'eth_sendTransaction',
                params: [parameters]
            })
            setOk(txHash)
       } catch (error) {
            setKo(error)
       }
    }
    
    
    if(!ethereum){
        return <div>No metamask connection detected</div>
    }
    
    return (<div> 
            <p> { cuenta ? cuenta : "Cargando..."}</p>
            <p> { balance ? balance : "Cargando..."}</p>
            <form className="form-inline" onSubmit={handleSubmit(submit)}>
                <div className='form-group mb-3'>
                    <label htmlFor="address">Address</label>
                    <input id="address" defaultValue="0xd1a234c143e9668ebb053c99535e8e7744ee1152" className="form-control" {...register("address")} /> 
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="amount">Amount</label>
                    <input id="amount" defaultValue="0.0042" className="form-control" {...register("amount")} /> 
                </div>
                <button type="submit" className="btn btn-primary mb-3" >Submit</button>
            </form>
            {ok && <div>{ok}</div>}
            {ko && <div>{ko}</div>}
            </div>
    )   
    
}