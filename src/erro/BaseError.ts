export class BaseError extends Error{
    constructor(message:string,public statusCode:number){
        super(message)
    }
}
