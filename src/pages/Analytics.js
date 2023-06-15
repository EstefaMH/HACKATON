import React, { useState, useEffect } from 'react'
import GetData from '../services/GetData';

function Analytics() {

    const [data, setData] = useState()

    async function GetDatafx(){
        let datos = await GetData();
        setData(datos);
        
        return datos;
    }

    
    
    useEffect(() => {
        GetDatafx();
    }, [])
    
   
    return (
        <div> </div>
    )
}
export default Analytics;
