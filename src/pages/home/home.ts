import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AllTodosPage } from "../all-todos/all-todos";
import { OneTodoPage } from "../one-todo/one-todo";
import { AddTodoPage } from "../add-todo/add-todo";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private todoList = [
    {
      "title": "Apprendre le dev en Android",
      "category": "Developpement",
      "todos": [
        {"value": "Aller sur Openclassrooms", "status": 1},
        {"value": "Aller sur Developper.com", "status": 1},
        {"value": "Installer Android Studio", "status":0}
      ]
    },
    {
      "title": "Projet SYGISS",
      "category": "Travail",
      "todos": [
        {"value": "Rédiger la documentation", "status": 1},
        {"value": "Valider les modification par Ronald", "status": 0},
        {"value": "Utiliser la documeantation", "status":0}
      ]
    },
    {
      "title": "Faire un Mooc en sécurité",
      "category": "Sécurité",
      "todos": [
        {"value": "Aller sur Cybrary.it", "status": 0},
        {"value": "Choisir le Mooc à réaliser", "status": 0},
        {"value": "Suivre le cours", "status":0},
        {"value": "Faire l'evaluation", "status":0},
        {"value": "Réclammer le certificat de complétion", "status":0}
      ]
    }
  ];

  // Afficher les détails de la liste sélectionnée dans une nouevelle vue
  todoSelected(todo: any) {
    console.log("Todo selectionné: " + todo.title);

    this.navCtrl.push(OneTodoPage, {todoItem: todo});
  }

  // Afficher toutes les listes dans une nouvelle vue
  goToAllLists() {
    this.navCtrl.push(AllTodosPage);

    console.log("Aller à la page qui affiche toutes les listes");
  }

  // Aller à la page qui permet d'jouter une liste
  goToAddList() {
    this.navCtrl.push(AddTodoPage);

    console.log("Aller à la page qui ajoute une nouvelle liste");
  }

  constructor(public navCtrl: NavController) { }
}
