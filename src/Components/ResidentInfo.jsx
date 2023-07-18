import axios from "axios"
import { useEffect, useState } from "react"
const ResidentInfo = ({url}) => {
    let statusUrl = "./src/assets/img/"
    let statusIMG = ["unknown.png", "alive.png", "dead.png"]
    const [resident, setResident]=useState({})
    useEffect(() => {
        axios
            .get( url )
            .then(res => setResident(res.data))
            .catch((error) => console.error(error));
    },[])
    let urlFullStatus
    let traslateStatus
    const statusCharacter = () =>{
        if(resident.status === "unknown"){
                urlFullStatus =  statusUrl + statusIMG[0],
                traslateStatus = "Desconocido"
        } else if (resident.status ==="Alive"){
                urlFullStatus = statusUrl + statusIMG[1]
                traslateStatus = "Aún Vive"
        } else {
                urlFullStatus= statusUrl + statusIMG[2]
                traslateStatus = "Ha muerto"    
        }
        return urlFullStatus, traslateStatus
    }
    statusCharacter()
    return(
        <div className="resident__info">
            <div className="resident__card">
            <h3 className="resident__name">{resident.name}</h3>
                <img src={resident.image} alt={resident.name} className="resident__img" />
                <div className="resident__status" style={{color: resident.status === "Alive" ? "#f6ff00" : "#800f0f"}}>
                    <p>Estado: {traslateStatus}</p>                
                </div>
                <img src={urlFullStatus} alt={resident.status} className="status__img"/>                       
                <div className="resident__more">
                    <p className="small__text">RAZA</p>
                    <p className="more__items">{resident.species}</p>
                    <p className="small__text">ORIGEN:</p>
                    <p className="more__items">{resident.origin?.name}</p>
                    <p className="small__text">APARICIÓN EN EPISONDIOS</p>
                    <p className="more__items">{resident.episode?.length}</p>
                </div>
            </div>
        </div>
    )
}
export default ResidentInfo