import React from 'react'

function Categories(props){
    return(
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        {props.catContent.map(oneCat =>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-info text-white shadow">
                                <div className="card-body">
                                    {oneCat}
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Categories