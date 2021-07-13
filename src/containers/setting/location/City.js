import CreateBox from "../../../components/settings/createbox/CreateBox";
import ColumnData from "../../../components/columndata/ColumnData";



const City = (props) => {
    const listOfLocation = [{title:"تبریز"},{title:"بناب"},{title:"آذرشهر"},{title:"شبستر"},{title:"بستان آباد"}];
    const listOfParentLocation = [{title:"آذربایجان شرقی"},{title:"آذربایجان غربی"},{title:"تهران"},{title:"مازندران"},{title:"اصفهان"}];

    return(
        <>
        <div className="row row-sm">
            <div className="col-lg-4 col-md-12">
                 <CreateBox listOfParentLocation={listOfParentLocation} title={"ایجاد شهر"} haveParent={true} parentLabel={"استان مربوطه"}/>
            </div>
            <div className="col-lg-5">
                <ColumnData dropBtn={true} dropTitle={"استان"} searchList={["اصفهان","تهران","آذربایجان شرقی"]} searchTitle={"لیست شهر ها"} title={{titleA:"عنوان شهر",titleB:"استان مربوطه"}} listOfLocation={listOfLocation}/>
            </div>   
        <div className="col-lg-3">
            <div className="card custom-card bg-warning">
                <div className="card-body">
                    <span className="pb-3 font-weight-bold text-white">راهنمای افزودن شهر</span>
                    <p className="mt-3 text-gray-800"> در این قسمت می توانید شهر جدیدی ایجاد کرده و به استان مربوطه متصل نمایید همچنین می توانید شهری را حذف یا به روز رسانی کنید.</p>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}


export default City;