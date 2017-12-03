import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  notes: FirebaseListObservable<any[]>;
  
    constructor(public afDB: AngularFireDatabase) {
      this.notes = afDB.list('notas').valueChanges();
    }

  datos =  {'id':null, 'title':null, 'description':null};
  show:boolean = false;
  editing:boolean = false;

  addNote() {
    this.show = true;
    
  }
  viewNote(nota) {
    this.show = true;
    this.datos = nota;
    this.editing = true;

  }
  cancel() {
    this.show = false;
    
  }

  createNote() {
    this.datos.id = Date.now();
    this.afDB.database.ref('notas/' + this.datos.id).set(this.datos);
    // if (this.editing)
    //   { 
    //     var me = this;
    //     this.notes.forEach(function(el, i) {
    //       if (el.id === me.datos.id ) {
    //         me.notes[i] = me.datos;
    //       }
    //     }
    //   )
    //   me.show = false;
    //   }
    // else
    // {      
    //   this.datos.id = Date.now();
    //   this.notes.push(this.datos);
    //   this.show = false;
    //   this.datos =  {'id':null, 'title':null, 'description':null};
    // }    
  }

  // deleteNote() {
  //   var me = this;
  //   me.notes.forEach(function(el, i) {
  //     if (el === me.datos ) {
  //       me.notes.splice(i, 1)
  //     }
  //   })
  //   this.show = false;
  //   this.datos =  {'id':null, 'title':null, 'description':null};
  // }
}