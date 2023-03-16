import { Component, HostListener, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  dataUser: any ;
  uid: string = '';
  inOut:string='';
  router: any;
  constructor(
    private fireauth : AngularFireAuth,
    private afs: AngularFirestore,
  ) {}



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
            if (this.dataUser != '') {
              this.logContainer = !this.logContainer;
              this.profile = !this.profile;
            } else {
              this.logContainer = true;
              this.profile = false;
            }
          });
      }
    });

  }
  isMenu:boolean = false;
  menuo= true;
  menuc= false;


  toggleMenu(){
    this.isMenu = !this.isMenu;
    this.menuo = !this.menuo;
    this.menuc = !this.menuc;
  }
  signOut(){
    this.fireauth.signOut().then( () =>{
      // '/auth/login' ||
      this.router.navigate(['../../../'])

    }).catch(err => {
      alert("SignOut")
    })
  }



  logContainer=true;
  profile=false;

  if () {
    this.dataUser = !this.dataUser;
  } else (LogContainer=false){
    this.profile= !this.profile;
  }




}
