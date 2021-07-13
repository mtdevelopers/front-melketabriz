import {IoCreateOutline} from "react-icons/io5";

const CreateBox = (props) => {
    return(
        <div className="card custom-card">
            <div className="card-body">
                <div>
                    <h3 className="main-content-label mb-1">{props.title}</h3>
                </div>
                <div className="d-flex flex-column">
                    <div className="form-group">
                        <input className="form-control" placeholder="عنوان را وارد کنید" type="text" />
                    </div>
                    <div className="row row-sm">
                        {props.haveParent && <div className="pb-3">
                            <label className="">{props.parentLabel}</label>
                            <select className="form-control select select2">
                                {props.listOfParentLocation.map(loc => {
                                    console.log(loc)
                                    return(<option>{loc.title}</option>)})
                                }
                            </select>
                        </div>}
                        
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                        <button className="btn ripple btn-success btn-with-icon w-50">ثبت<span className="mr-2"><IoCreateOutline /></span></button>
                    </div>
                </div> 
            </div>
        </div> 
    )
}


export default CreateBox;