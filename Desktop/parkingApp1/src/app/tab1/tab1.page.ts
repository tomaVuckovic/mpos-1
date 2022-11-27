import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera } from '@capacitor/camera';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  profile = null;

  constructor(
    private avatarService: AvatarService,
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) { 
    this.avatarService.getUserProfile().subscribe((data)=>{
      this.profile = data;
      
    });
    
  }

  ngOnInit() {
  }


 

}

