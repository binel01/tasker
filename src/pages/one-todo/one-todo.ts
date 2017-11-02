import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Todo } from "../../app/model/todo.model";

/**
 * Generated class for the OneTodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-one-todo',
  templateUrl: 'one-todo.html',
})
export class OneTodoPage {
  private todoList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.todoList = this.navParams.get('todoItem');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OneTodoPage');
    console.log(this.todoList);
  }

}
