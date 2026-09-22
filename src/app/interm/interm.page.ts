import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interm',
  templateUrl: './interm.page.html',
  styleUrls: ['./interm.page.scss'],
  standalone: false,
})
export class IntermPage {
  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [
    {
      question: '"Qual a tradução de "I was happy"?',
      options: ['Eu sou feliz', 'Eu estou feliz', 'Eu fui feliz', 'Eu feliz'],
      answer: 2,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    },
    {
      question: '"Qual a tradução de "I see if my eyes"?',
      options: ['Eu vi com os meus olhos', 'Eu pisquei os meus olhos', 'Vi meus olhos', 'Eu vejo com os meus olhos'],
      answer: 3,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    },
    {
      question: '"Qual a tradução de "She have one beautiful hair"?',
      options: ['Eu tenho um lindo cabelo', 'Ela tem um lindo cabelo', 'Ele tem um lindo cabelo', 'O cabelo é lindo'],
      answer: 1,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    },
    {
      question: 'Qual a tradução de "The cat sleeps on the bed"?',
      options: ['O cachorro dorme na cama', 'O gato dorme na cama', 'O gato come na cama', 'O gato corre na cama'],
      answer: 1,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    },
    {
      question: '"Qual a tradução de ""?',
      options: ['', '', '', ''],
      answer: 1,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    },
    {
      question: 'Qual a tradução de "She drinks water every day"?',
      options: ['Ela bebe suco todo dia', 'Ela come água todo dia', 'Ela bebe água todo dia', 'Ela bebe água toda semana'],
      answer: 2,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    },
    {
      question: 'Qual a tradução de "My brother is tall"?',
      options: ['Meu irmão é baixo', 'Meu pai é alto', 'Meu irmão é alto', 'Meu irmão é magro'],
      answer: 2,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    },
    {
      question: 'Qual a tradução de "We go to school by bus"?',
      options: ['Nós vamos à escola de carro', 'Nós vamos à escola de ônibus', 'Nós vamos ao trabalho de ônibus', 'Eles vão à escola de ônibus'],
      answer: 1,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    },
    {
      question: 'Qual a tradução de "He works in a big city"?',
      options: ['Ele mora em uma cidade grande', 'Ele trabalha em uma cidade pequena', 'Ele trabalha em uma cidade grande', 'Ele estuda em uma cidade grande'],
      answer: 2,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    },
    {
      question: 'Qual a tradução de "They eat rice and beans"?',
      options: ['Eles comem arroz e feijão', 'Eles comem pão e queijo', 'Eles bebem arroz e feijão', 'Eles comem arroz e carne'],
      answer: 0,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    },
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