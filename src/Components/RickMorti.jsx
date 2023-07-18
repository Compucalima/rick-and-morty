import { useEffect, useState } from "react";
import axios, { all } from "axios"
import Location from "./Location";
import ResidentInfo from "./ResidentInfo";
const RickMorti = () => {
    const [allLocations, setAllLocations] = useState({})
    useEffect(() => {
        axios
        .get(`https://rickandmortyapi.com/api/location/`)
        .then(res => setAllLocations(res.data))
        .catch((error) => console.error(error));       
    },[])
    const [locationsRYM, setLocationsRYM] = useState({})
    useEffect (() => {
        let locationUniverse = Math.floor(Math.random() * 126) + 1
        axios
        .get(`https://rickandmortyapi.com/api/location/${locationUniverse}`)
        .then(res => setLocationsRYM(res.data))
        .catch((error) => console.error(error));
    },[])
    const [searchLocations, setSearchLocations] = useState("")
    const searchById = (e) => {
        e.preventDefault();
        axios
            .get(`https://rickandmortyapi.com/api/location/${searchLocations}`)
            .then(res => setLocationsRYM(res.data))
            .catch((error) => console.error(error));
        setSearchLocations("")
    }
    const [currentPage, setCurrentPage] = useState(1)       
    const charactersPerPage = 12                            
    const lastIndex = charactersPerPage * currentPage       
    const firstIndex = lastIndex - charactersPerPage        
    const charactersPaginated = locationsRYM.residents?.slice(firstIndex, lastIndex)
    const totalPages = Math.ceil(locationsRYM.residents?.length / charactersPerPage)
    const pagesToButtons = []
    for (let i = 1; i <= totalPages; i++){
        pagesToButtons.push(i);
    }
    return(
        <div>
            <form className="search__locations" onSubmit={(e) => searchById(e)}>
                <input 
                    className="search__input"
                    placeholder={`Ingresa un Id entre 1 y ${allLocations.info?.count}`} 
                    type="text" 
                    value={searchLocations} 
                    onChange={(e) => setSearchLocations(e.target.value)} 
                />
                <button onClick={searchById} className="search__button">
                    Buscar
                </button>
            </form>
            <Location 
                propsLocation = {locationsRYM}
            />
            <div className="buttons__pages">
                <div className="prev__next">
                    <button
                    className="buttons" 
                    onClick={() => setCurrentPage(currentPage -1)}
                    disabled={ currentPage === 1}
                    >
                        Anterior
                    </button>
                    <label className="label__pages" >Página: {currentPage} de:{totalPages}</label> 
                    <button
                    className="buttons"
                    onClick={() => setCurrentPage(currentPage +1)}
                    disabled={currentPage === totalPages}
                    >
                        Siguiente
                    </button>
                </div>
            </div>
            <div className="residents__all">
                <div className="residents__container">
                    {   
                        charactersPaginated?.map((rickType) => (
                            <ResidentInfo 
                                key={rickType}
                                url={rickType}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="buttons__pages">
                <div className="prev__next">
                    <button
                    className="buttons" 
                    onClick={() => setCurrentPage(currentPage -1)}
                    disabled={ currentPage === 1}
                    >
                            Anterior
                    </button>

                    {pagesToButtons.map((num) => ( 
                        <button className="buttons__paginate" key={num} onClick={() => setCurrentPage(num)}>
                            {num}
                        </button>                       
                    ))}
                    <button 
                        className="buttons"
                        onClick={() => setCurrentPage(currentPage +1)}
                        disabled={currentPage === totalPages}
                        >
                        Siguiente
                    </button>
                </div>
            </div>

        </div>
    )
}
export default RickMorti