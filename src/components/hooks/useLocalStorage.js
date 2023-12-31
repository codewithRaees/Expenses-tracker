import { useEffect, useState } from "react";

export function useLocalStorage(key , initialData){
    const [data , setData] = useState(initialData)
    
    const existingData = JSON.parse(localStorage.getItem(key))

    useEffect(()=>{
        if(existingData){
            setData(existingData)
        }else{
            localStorage.setItem(key , JSON.stringify(initialData))
        }
    },[])
    const updataLocalStorage = (newData)=>{
        if(typeof newData === 'function')
        {
            localStorage.setItem(key, JSON.stringify(newData(data)))
        }else{
            localStorage.setItem(key, JSON.stringify(newData))
        }
        setData(newData)
    }
    return [ data , updataLocalStorage]

}