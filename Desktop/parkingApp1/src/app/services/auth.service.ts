import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth) { }
//registracija
//stavljamo u try catch kako bi vratio null ako bude greske, 
//odnosno mozemo posle da koristimo funckiju da vidimo jel je uspeo login/registracija
  async register ({email, password}){
    try{
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user;
    }catch(e) {
      return null;
    }

  }


//login
  async login({email, password}){
    try{
      const user = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user;
    }catch(e) {
      return null;
    }
  }
//
  logout(){
    return signOut(this.auth);
  }


}
