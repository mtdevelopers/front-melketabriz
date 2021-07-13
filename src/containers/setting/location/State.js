import CreateBox from "../../../components/settings/createbox/CreateBox";
import ColumnData from "../../../components/columndata/ColumnData";



const State = (props) => {
    const listOfLocation = [{title:"آذربایجان شرقی"},{title:"آذربایجان غربی"},{title:"تهران"},{title:"مازندران"},{title:"اصفهان"}];
    const listOfParentLocation = [{title:"ایران"},{title:"آذربایجان"},{title:"ترکیه"},{title:"گرجستان"}];

    return(
        <>
        <div className="row row-sm">
            <div className="col-lg-4 col-md-12">
                 <CreateBox listOfParentLocation={listOfParentLocation} title={"ایجاد استان"} haveParent={true} parentLabel={"کشور مربوطه"}/>
            </div>
            <div className="col-lg-5">
                <ColumnData dropBtn={true} dropTitle={"کشور"} searchList={["ایران","ترکیه","آذربایجان"]} searchTitle={"لیست استان ها"} title={{titleA:"عنوان استان",titleB:"کشور مربوطه"}} listOfLocation={listOfLocation}/>
            </div>   
        <div className="col-lg-3">
            <div className="card custom-card bg-warning">
                <div className="card-body">
                    <span className="pb-3 font-weight-bold text-white">راهنمای افزودن استان</span>
                    <p className="mt-3 text-gray-800"> در این قسمت می توانید استان جدیدی ایجاد کرده و به کشور مربوطه متصل نمایید همچنین می توانید استانی را حذف یا به روز رسانی کنید.</p>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}


export default State;