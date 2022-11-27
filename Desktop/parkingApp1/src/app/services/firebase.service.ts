import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  collectionName = 'novac';
  constructor(
    private firestore: AngularFirestore

  ) { }

  transakcije(){
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }
}
