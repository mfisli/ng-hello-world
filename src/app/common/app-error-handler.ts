import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
    handleError(error){
        console.log("Unexpected error occurred.");                      
        //alert("Generic error occurred.") 
    }
}