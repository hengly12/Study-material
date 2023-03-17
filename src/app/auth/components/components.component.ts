import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { flatMap } from 'rxjs';
@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  dataUser: any ;
  uid: string = '';
  inOut:string='';
  loading:boolean = true;
  constructor(
    private fireauth : AngularFireAuth,
    private afs: AngularFirestore,
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.fireauth.authState.subscribe( user => {
      console.log('user', user);
      if (user) {
        this.uid = user?.uid;

        this.afs
          .collection('user')
          .doc(this.uid)
          .valueChanges()
          .subscribe((res) => {
            console.log('userID', res);
            this.dataUser = res;
          });

      }
      this.loading = false;
    })


  }


}
