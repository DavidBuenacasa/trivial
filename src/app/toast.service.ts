import { Injectable } from "@angular/core";

declare var loginCorrect: Function;
declare var saveData: Function;
declare var logout: Function;

declare var errorLogin: Function;
declare var saveDataError: Function;



@Injectable()
export class ToastService{

    constructor(){

    }


    showToastLoginCorrect(){
        loginCorrect()
    }

    showToastErrorLogin(){
        errorLogin()
    }

    showToastLogout(){
        logout()
    }

    showToastSaveData(){
        saveData()
    }

    showToastSaveDataError(){
        saveDataError()
    }






}