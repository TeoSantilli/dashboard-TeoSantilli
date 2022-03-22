import React from 'react'

function Card(props){
    return(

        <div className='charactersContainer'>
            {props.chaCont.map((oneCha, idx)=>
            <div key={oneCha+idx} className='card cardC shadow mb-4'>
                <img src={oneCha.imagen} alt={oneCha.name} />
                <h4>{oneCha.name}</h4>
                <p>Character description Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corrupti magnam excepturi eius veritatis, corporis vel soluta impedit non dolores, nihil mollitia, praesentium libero placeat blanditiis vitae assumenda nobis aspernatur!</p>
                
                <a href="#">Ver más</a>
            </div>
            )}

        </div>
    )
}
export default Card