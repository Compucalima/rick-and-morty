import axios from "axios"
import { useEffect, useState } from "react"
const ResidentInfo = ({url}) => {
    let statusUrl = "/img/"
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
    let imageGray
    let colorStatus
    const statusCharacter = () =>{
        if(resident.status === "unknown"){
                urlFullStatus =  statusUrl + statusIMG[0],
                traslateStatus = "Desconocido"
                imageGray = "hue-rotate(90deg)"
                colorStatus = "#aeaeae"

        } else if (resident.status ==="Alive"){
                urlFullStatus = statusUrl + statusIMG[1]
                traslateStatus = "Aún Vive"
                imageGray = "saturate(3)"
                colorStatus = "#f6ff00"
        } else {
                urlFullStatus= statusUrl + statusIMG[2]
                traslateStatus = "Ha muerto" 
                imageGray = "grayscale(100%)" 
                colorStatus = "#800f0f"  
        }
        return urlFullStatus, traslateStatus, imageGray
    }
    statusCharacter()
    return(
        <div className="resident__info">
            <div className="resident__card">
            <h3 className="resident__name">{resident.name}</h3>
                
                <img src={resident.image} alt={resident.name} className="resident__img" style={{filter: imageGray}} />

                <div className="resident__status" style={{color: colorStatus }}>
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