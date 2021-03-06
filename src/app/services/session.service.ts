import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private JWT = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxfQ.hWEvqbisuHVIzi1vnpVOWVB9siCm8rIyiUlfRRwZR1M"

  constructor() { }

  public activeSession(){
    const helper = new JwtHelperService()
    const token = sessionStorage.getItem('token')

    const isExpired = helper.isTokenExpired(token)
    console.log('getTokenExpirationDate', helper.getTokenExpirationDate(token))
    console.log('isExpired', isExpired)
    return !isExpired
  }

  public login(username: string, password: string): string {
    console.log('login')
    if(username === 'cgonzalezm' && password === '123456'){
      console.log(this.JWT)
      sessionStorage.setItem('token', this.JWT)
      return this.JWT
    }
    return undefined
  }

  public setToken(token: string){
    sessionStorage.setItem('token', token)
  }
}
