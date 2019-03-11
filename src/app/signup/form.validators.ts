import { Validators, ValidationErrors, AbstractControl } from "@angular/forms";
import { resolve } from "url";
import { reject } from "q";

export class FormValidators{
   
   static isContainSpace(control: AbstractControl): ValidationErrors | null{
        if ((control.value as String).indexOf(' ') >0 ){
            return {isContainSpace:true}
        }
        return null;
    }

    static isUnique(control: AbstractControl) : Promise < ValidationErrors | null > {

        return new Promise((resolve,reject) => { 
            setTimeout(() => {
            if(control.value ==='kanav'){
                return resolve({ isUnique:true});
            } 
            else{
                resolve(null);
            }
        },2000);
    
    }); 
    }
}
