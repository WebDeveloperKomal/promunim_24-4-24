import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SecurityService } from "./security.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    
    constructor(private service:SecurityService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let newreq=req;
        let token = localStorage.getItem('token');

        console.log('INTERCEPTOR : working');

        if(token!=null)
        {
            newreq= newreq.clone({setHeaders:{Authorization:`Bearer ${token}`},});
        }
        return next.handle(newreq);
    }

}

export const AuthInterceptorProviders = [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true
},];