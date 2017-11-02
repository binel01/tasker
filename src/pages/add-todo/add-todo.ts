import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

/**
 * Generated class for the AddTodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-todo',
  templateUrl: 'add-todo.html',
})
export class AddTodoPage {
  private todoListForm: FormGroup;

  // Permet de compter le nombre de tpaches dans la liste
  private nbTodos: number = 0;

  private count: number;

  private todoList = {
    "id": 0,
    "title": "Projet SYGISS",
    "category": "Travail",
    "todos": [
        {"id": 0, "value": "Rédiger la documentation", "status": 1},
        {"id": 1, "value": "Valider les modification par Ronald", "status": 0},
        {"id": 2, "value": "Utiliser la documeantation", "status":0}
      ]
    };

  Categories = [
    "Sport", "Divertissement", "Développment", "Personnel", "Professionnel"
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,
      private formBuilder: FormBuilder) {
      this.todoListForm = this.formBuilder.group({
        title: ['', Validators.required],
        category: ['']
      });

      // Ajout des deux premières tâches
      this.todoList.todos.forEach(t => {
        this.todoListForm.addControl("Todo" + this.nbTodos, new FormControl());
        this.todoListForm.addControl("Check" + this.nbTodos, new FormControl());
        this.nbTodos++;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTodoPage');
    //console.log(this.todo);

  }

  // On enregistre la dernière tâche et on ajoute un nouveau champ
  addInput(): void {
    // Ajout d'un InputBox pour une nouvelle tâche
    this.todoListForm.addControl("Todo" + this.nbTodos, new FormControl());
    this.todoListForm.addControl("Check" + this.nbTodos, new FormControl());
    this.todoList.todos.push({"id": this.nbTodos, value: "" + this.nbTodos, status: 0});
    this.nbTodos++;
  }

  saveTodoList(): void {
    console.log(this.todoList);
    console.log(this.todoListForm);
  }

}
