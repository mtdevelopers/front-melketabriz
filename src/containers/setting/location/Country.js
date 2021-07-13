import CreateBox from "../../../components/settings/createbox/CreateBox";
import ColumnData from "../../../components/columndata/ColumnData";
import { useState } from "react";



const Country = (props) => {
    
    const listOfLocation = [{title:"ایران"},{title:"ترکیه"},{title:"آذربایجان"},{title:"ایران"},{title:"ترکیه"},{title:"آذربایجان"},{title:"ایران"},{title:"ترکیه"},{title:"آذربایجان"},{title:"ایران"},{title:"ترکیه"},{title:"آذربایجان"}];
    return(
        <>
        <div className="row row-sm">
            <div className="col-lg-4 col-md-12">
                 <CreateBox title={"ایجاد کشور"} haveParent={false} parentLabel={"شهر مربوطه"}/>
            </div>
            <div className="col-lg-5 col-md-12">
                <ColumnData dropBtn={false} searchList={[""]} searchTitle={"لیست کشورها"} title={{titleA:"عنوان کشور",titleB:""}} listOfLocation={listOfLocation}/>
            </div>   
            <div className="col-lg-3 col-md-12">
                <div className="card custom-card bg-warning">
                    <div className="card-body">
                        <span className="pb-3 font-weight-bold text-white">راهنمای افزودن کشور!</span>
                        <p className="mt-3 text-gray-800"> در این قسمت می توانید کشور جدیدی ایجاد کنید همچنین می توانید کشوری را حذف یا به روز رسانی کنید.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}


export default Country;