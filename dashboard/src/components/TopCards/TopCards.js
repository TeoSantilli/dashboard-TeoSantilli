import React from 'react'

function TopCards(props){
    console.log(props);
    return(
    <div className='row'>
        {props.cardContent.map((oneCard, idx)=>
        <div key={oneCard=idx}className='col-md-4 mb-4'>
             
            <div className={oneCard.color}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={oneCard.text}> {oneCard.label} </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800"> {oneCard.num} </div>
                        </div>
                        <div className="col-auto">
                            <i className={oneCard.icon}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>)}
    </div>
    )
}
export default TopCards