export class AppError {
    // Constr param is used to log original 
    // unexpected errors.
    // The orginalError is a public field 
    // that can be accessed elsewhere in the app
    constructor(public originalError?: any){

    }
}