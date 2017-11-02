import { Component } from "@angular/core";
import { NavController } from 'ionic-angular';

import { HomePage } from "../home/home";
import { OneTodoPage } from "../one-todo/one-todo";

@Component({
  selector: 'page-all-todos',
  templateUrl: 'all-todos.html'
})
export class AllTodosPage {
  todoList = [
    {
      "title": "Apprendre le dev en Android",
      "category": "Developpement",
      "todos": [
        {"value": "Aller sur Openclassrooms", "status": 0},
        {"value": "Aller sur Developper.com", "status": 0},
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
    },
    {
      "title": "Liste 4",
      "category": "Sécurité",
      "todos": [
        {"value": "Aller sur Cybrary.it", "status": 0},
        {"value": "Choisir le Mooc à réaliser", "status": 0},
        {"value": "Suivre le cours", "status":0},
        {"value": "Faire l'evaluation", "status":0},
        {"value": "Réclammer le certificat de complétion", "status":0}
      ]
    },
    {
      "title": "Liste 5",
      "category": "Sécurité",
      "todos": [
        {"value": "Aller sur Cybrary.it", "status": 0},
        {"value": "Choisir le Mooc à réaliser", "status": 0},
        {"value": "Suivre le cours", "status":0},
        {"value": "Faire l'evaluation", "status":0},
        {"value": "Réclammer le certificat de complétion", "status":0}
      ]
    },
    {
      "title": "Liste 6",
      "category": "Sécurité",
      "todos": [
        {"value": "Aller sur Cybrary.it", "status": 0},
        {"value": "Choisir le Mooc à réaliser", "status": 0},
        {"value": "Suivre le cours", "status":0},
        {"value": "Faire l'evaluation", "status":0},
        {"value": "Réclammer le certificat de complétion", "status":0}
      ]
    },
    {
      "title": "Liste 7",
      "category": "Sécurité",
      "todos": [
        {"value": "Aller sur Cybrary.it", "status": 0},
        {"value": "Choisir le Mooc à réaliser", "status": 0},
        {"value": "Suivre le cours", "status":0},
        {"value": "Faire l'evaluation", "status":0},
        {"value": "Réclammer le certificat de complétion", "status":0}
      ]
    },
    {
      "title": "Liste 8",
      "category": "Sécurité",
      "todos": [
        {"value": "Aller sur Cybrary.it", "status": 0},
        {"value": "Choisir le Mooc à réaliser", "status": 0},
        {"value": "Suivre le cours", "status":0},
        {"value": "Faire l'evaluation", "status":0},
        {"value": "Réclammer le certificat de complétion", "status":0}
      ]
    },
    {
      "title": "Liste 9",
      "category": "Sécurité",
      "todos": [
        {"value": "Aller sur Cybrary.it", "status": 0},
        {"value": "Choisir le Mooc à réaliser", "status": 0},
        {"value": "Suivre le cours", "status":0},
        {"value": "Faire l'evaluation", "status":0},
        {"value": "Réclammer le certificat de complétion", "status":0}
      ]
    },
    {
      "title": "Liste 10",
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

  constructor(private navCtrl: NavController) { }

  // Afficher les détails de la liste sélectionnée dans une nouvelle vue
  goToSelected(todo: any) {
    console.log("Todo selectionné: " + todo.title);

    this.navCtrl.push(OneTodoPage, {todoItem: todo});
  }

}
