import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  dataUser: any ;
  uid: string = '';
  inOut:string='';

  constructor(
    private fireauth : AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
  ) { }

  ngOnInit(): void {

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
      this.router.navigate(['../lesson6'])
    }
  }

  isClick1(){

    if(this.dataUser?.key == null){
      this.router.navigate(['login'])
    } else{
      this.router.navigate(['../lesson7'])
    }
  }

  isClick2(){

    if(this.dataUser?.key == null){
      this.router.navigate(['login'])
    } else{
      this.router.navigate(['../lesson8'])
    }
  }

  isClick3(){

    if(this.dataUser?.key == null){
      this.router.navigate(['login'])
    } else{
      this.router.navigate(['../lesson9'])
    }
  }

  isClick4(){

    if(this.dataUser?.key == null){
      this.router.navigate(['login'])
    } else{
      this.router.navigate(['../lesson10'])
    }
  }

  isClick5(){

    if(this.dataUser?.key == null){
      this.router.navigate(['login'])
    } else{
      this.router.navigate(['../lesson11'])
    }
  }
  isClick6(){

    if(this.dataUser?.key == null){
      this.router.navigate(['login'])
    } else{
      this.router.navigate(['../lesson12'])
    }
  }
  isClick7(){

    if(this.dataUser?.key == null){
      this.router.navigate(['login'])
    } else{
      this.router.navigate(['../skill'])
    }
  }
}
