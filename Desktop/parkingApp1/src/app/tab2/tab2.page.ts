import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { DataService } from '../services/data.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page  {

  notes = [];


    constructor(private dataService: DataService, private alertCtrl: AlertController, private modalCtrl:ModalController){
      this.dataService.getNotes().subscribe(res =>{
        console.log(res);
        this.notes = res;
      })
    }
    async openNote(note){
        const modal = await this.modalCtrl.create({
          component: ModalPage,
          componentProps: {id: note.id},
          breakpoints: [0, 0.5, 0.8],
          initialBreakpoint: 0.5
        });
        modal.present();
    }

    async addNote(){
      const alert = await this.alertCtrl.create({
        header: 'Dodaj podsetnik',
        inputs:[
          {
            name: 'title',
            placeholder: 'Moj novi podsetnik',
            type: 'text'
          },
          {
            name: 'text',
            placeholder: 'Tekst ',
            type: 'textarea'
          }
        ],
        buttons:[
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Dodaj',
            handler: (res) =>{
              this.dataService.addNote({title: res.title, text: res.text});
            }
          }
        ]
      });
      await alert.present();
    }
}
