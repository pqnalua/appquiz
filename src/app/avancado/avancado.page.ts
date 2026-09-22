import { Component, OnInit } from '@angular/core';

interface Questao {
  question: string;
  options: string[];
  answer: number;
  feedbackCorrect: string;
  feedbackIncorrect: string;
}

@Component({
  selector: 'app-avancado',
  templateUrl: './avancado.page.html',
  styleUrls: ['./avancado.page.scss'],
  standalone: false,
})
export class AvancadoPage {
  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz: Questao[] = [
    // Adicione aqui as questões do nível avançado
  ];

  answer(option: number) {
    if (option === this.quiz[this.perguntaAtual].answer) {
      this.score++;
      this.correct = true;
    } else {
      this.correct = false;
    }
    this.showAnswer = true;
  }

  nextQuestion() {
    this.perguntaAtual++;
    this.showAnswer = false;
  }
}