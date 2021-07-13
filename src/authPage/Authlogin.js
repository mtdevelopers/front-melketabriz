import React,{ useEffect, useRef, useState } from 'react';
import logoA from "../assets/img/brand/logo-light.png";
import logoB from "../assets/img/svgs/user.svg";
import {connect} from "react-redux";

const Authlogin = (props) => {

    
    return (
        <div class="main-body leftmenu">
            <div class="page main-signin-wrapper">
                <div class="row signpages text-center">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="row row-sm">
                                <div class="col-lg-6 col-xl-5 d-none d-lg-block text-center bg-primary details">
                                    <div class="mt-5 pt-4 p-2 pos-absolute">
                                        <img src={logoA} class="header-brand-img mb-4" alt="logo" />
                                        <div class="clearfix"></div>
                                        <img src={logoB} class="ht-100 mb-0" alt="user" />
                                        <h5 class="mt-4 text-white">سامانه تخصصی ملک تبریز</h5>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-xl-7 col-xs-12 col-sm-12 login_form ">
                                    <div class="container-fluid">
                                        <div class="row row-sm">
                                            <div class="card-body mt-2 mb-2">
                                                <img src={logoA} class=" d-lg-none header-brand-img text-left float-left mb-4" alt="logo" />
                                                <div class="clearfix"></div>
                                                <form>
                                                    <h5 class="text-right mb-2">به حساب خود وارد شوید</h5>
                                                    <div class="form-group text-right">
                                                        <label>نام کاربری</label>
                                                        <input class="form-control" placeholder="نام کاربری خود را وارد کنید" type="text" />
                                                    </div>
                                                    <div class="form-group text-right">
                                                        <label>کلمه عبور</label>
                                                        <input class="form-control" placeholder="رمز ورود خود را وارد کنید" type="password" />
                                                    </div>
                                                    <button class="btn ripple btn-main-primary btn-block">ورود</button>
                                                </form>
                                                <div class="text-right mt-5 ml-0">
                                                    <div class="mb-1"><a href="#">رمز عبور خود را فراموش کرده اید؟</a></div>
                                                    <div>حساب ندارید؟ <a href="#">اینجا ثبت نام کنید</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
 
}


const mapStateToProps = (state) => {
    return{

    }
};

const mapDispatchToProps = (dispatch) => {
    return{

    }
}


export default Authlogin;