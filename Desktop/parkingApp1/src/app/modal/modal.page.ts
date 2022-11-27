import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService, Note } from '../services/data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() id: string;
  constructor(private dataService: DataService, private modalCtrl: ModalController) { }
  note: Note = null;
  ngOnInit() {
    this.dataService.getNoteById(this.id).subscribe(res=>{
      this.note = res;
    });
  }
  async updateNote(){
    this.dataService.updateNote(this.note);
   this.modalCtrl.dismiss();

  }

  async deleteNote(){
   await this.dataService.deleteNote(this.note);
   this.modalCtrl.dismiss();
  }
}
