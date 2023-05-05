import { Component, HostListener, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  dataUser: any ;
  uid: string = '';
  inOut:string='';
  drawer: any;
  loading: boolean = false;
  // router: any;
  constructor(
    private fireauth : AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private auth: AuthService,

  ) {}

  ngOnInit(): void {


    this.fireauth.authState.subscribe((user) => {

      console.log('user', user);
      if(user){
        this.uid = user?.uid;
      }

      this.afs.collection("user").doc(this.uid).valueChanges().subscribe(res => {
        console.log('userID', res);
        this.dataUser = res;
        if (this.dataUser != '') {
          this.logContainer = !this.logContainer;
          this.profile = !this.profile;
        } else {
          this.logContainer = true;
          this.profile = !this.profile;
        }
      })
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


  isClick1(){

    if(this.dataUser?.key == null){
      this.router.navigate(['login'])
    } else{
      this.router.navigate(['../lesson'])
    }
  }

  isClick2(){

    if(this.dataUser?.key == null){
      this.router.navigate(['login'])
    } else{
      this.router.navigate(['../lesson6'])
    }
  }
  isClick3(){

    if(this.dataUser?.key == null){
      this.router.navigate(['login'])
    } else{
      this.router.navigate(['../lesson7'])
    }
  }
  isClick4(){

    if(this.dataUser?.key == null){
      this.router.navigate(['login'])
    } else{
      this.router.navigate(['../lesson8'])
    }
  }
  isClick5(){

    if(this.dataUser?.key == null){
      this.router.navigate(['login'])
    } else{
      this.router.navigate(['../lesson9'])
    }
  }
  isClick6(){

    if(this.dataUser?.key == null){
      this.router.navigate(['login'])
    } else{
      this.router.navigate(['../lesson10'])
    }
  }
  isClick7(){

    if(this.dataUser?.key == null){
      this.router.navigate(['login'])
    } else{
      this.router.navigate(['../lesson11'])
    }
  }
  isClick8(){

    if(this.dataUser?.key == null){
      this.router.navigate(['login'])
    } else{
      this.router.navigate(['../lesson12'])
    }
  }
  isClick9(){

    if(this.dataUser?.key == null){
      this.router.navigate(['login'])
    } else{
      this.router.navigate(['../category'])
    }
  }



  signOut(){
    this.loading = true;
    console.log('SignOutasdfasdf'	)
    this.fireauth.signOut().then( () =>{

      // '/auth/login' ||
      console.log('SignOut saaa')
      localStorage.removeItem('uid')
      this.auth.userData = null;
      this.router.navigate(['/components'])
      this.loading = false;
    }).catch(err => {
      alert("SignOut")

    })

  }

  reloadPage() {
   window.location.reload();
 }


  logContainer=true;
  profile=false;

  if () {
    this.dataUser = !this.dataUser;
  } else (LogContainer=false){
    this.profile= !this.profile;
  }




}
