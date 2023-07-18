import React from "react";
const Location = ({propsLocation}) => {
    return(
        <section className="location">
            <div className="location__info">
                <div className="location__number">
                    <p>Locación</p>
                    <p className="number location__p">{propsLocation.id}</p>
                </div>
                <div>
                    <p className="location__title">Nombre</p>
                    <p className="location__p">{propsLocation.name}</p>
                </div>
                <div>
                    <p className="location__title">Tipo</p>
                    <p className="location__p">{propsLocation.type}</p>
                </div>
                <div>
                    <p className="location__title">Dimensión</p>
                    <p className="location__p">{propsLocation.dimension}</p>
                </div>
                <div>
                    <p className="location__title">Población</p>
                    <p className="location__p">{propsLocation.residents?.length}</p>
                    
                </div>        
            </div>
        </section>
    )
}
export default Location