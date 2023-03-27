import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Course_Type } from 'src/app/dummy/data-khmer';

@Component({
  selector: 'app-course1',
  templateUrl: './course1.component.html',
  styleUrls: ['./course1.component.scss'],
  // imports:[CommonModule]
})
export class Course1Component {
  Course_Type = Course_Type
  dataUser: any ;
  uid: string = '';
  inOut:string='';
  constructor(
    private fireauth : AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,){

  }

  ngOnInit(){

    this.fireauth.authState.subscribe((user) => {
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
    });
  }
  isClick(){

    if(this.dataUser?.key == null){
      this.router.navigate(['login'])
    } else{

    }
  }
}
