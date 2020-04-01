import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  createNewUser(email: string, password: string, nickname: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            
            firebase.auth().currentUser.updateProfile({
              displayName: nickname
            }).then(function() {
              // Update successful.
            }).catch(function(error) {
              // An error happened.
            });
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
}


signInUser(email: string, password: string) {
  return new Promise(
    (resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(
        () => {
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    }
  );
}
signOutUser() {
  firebase.auth().signOut();
}

getUserInfo(){
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(firebase.auth().currentUser));
}

getDisplayName(){
  return firebase.auth().currentUser.displayName;
}
constructor() { }
}
