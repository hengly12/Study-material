import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent {
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
      this.router.navigate(['../grade10-experiment'])
    }
  }

}
