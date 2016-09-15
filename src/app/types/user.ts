import { AuthService } from '../services/auth.service';
import { UserData } from './user-data'; 
export class User {
    uid: string;//"LAjqxYpVgtVt57izTwrZJrKJReV2"
  email: string;
  name: string;
  type: string;
  password: string
  
  constructor(private authService : AuthService, userData: UserData) {
    if(userData.uid){
        this.uid = userData.uid;
    }
    if (userData.email) {
      this.email = userData.email;
    }
    if (userData.name) {
      this.name = userData.name;
    }
  }

  logout(){
      this.authService.logout();
  }
}