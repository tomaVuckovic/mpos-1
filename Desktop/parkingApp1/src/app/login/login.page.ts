import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;

  constructor(
    private fb: FormBuilder, //kako bismo mogli da kreiramo formu
    private loadingController: LoadingController, //angular ionic 
    private alertController: AlertController,
    private authService: AuthService, //kreiran servis
    private router: Router //tabela za rutiranje
    ) {}

    //Za pristup form fields

    get email(){
      return this.credentials.get('email');
    }

    get password(){
      return this.credentials.get('password');
    }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  async register(){
    const loading = await this.loadingController.create(); //prvo dodajemo loading controler
    await loading.present();

    const user = await this.authService.register(this.credentials.value);
    await loading.dismiss();//dismis controlera

    if(user){
      this.router.navigateByUrl('/home', {replaceUrl: true}); //ako je true onda usmerava na home
    }else{
      this.showAlert('Registracija neuspešna', 'Molimo pokušajte ponovo!');
    }
  }

  async login(){
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.authService.login(this.credentials.value);
    await loading.dismiss();

    if(user){
      this.router.navigateByUrl('/home', {replaceUrl: true});
    }else{
      this.showAlert('Neuspešan login', 'Proverite da li ste dobro uneli korisnicko ime ili lozinku!');
    }
  }

// funkcija koja pokazuje gresku pri registraciji ili loginu
  async showAlert(header, message){
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['U redu'],
    });
    await alert.present();
  }


}
