import { Component } from '@angular/core';
import firebase from 'firebase/compat/app'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trivial';
  ngOnInit(): void {

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    const firebaseConfig = {
      apiKey: "AIzaSyD-KqHfZRk7DxphuV519-jkESF4jiPVWvQ",
      authDomain: "trivial-1653f.firebaseapp.com",
      databaseURL: "https://trivial-1653f-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "trivial-1653f",
      storageBucket: "trivial-1653f.appspot.com",
      messagingSenderId: "818827446105",
      appId: "1:818827446105:web:62fd205e659cb5e17aee48",
      measurementId: "G-3TB3RFT1Q3"
    };
    
    firebase.initializeApp(firebaseConfig)



    
  }
}
