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
      question: 'Qual a tradução de "I have been studying English for three years"?',
      options: [
        'Eu estudo inglês há três anos',
        'Eu estudei inglês por três anos',
        'Eu estou estudando inglês há três anos',
        'Eu vou estudar inglês por três anos'
      ],
      answer: 2,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    },
    {
      question: 'Qual a tradução de "She would have come if you had invited her"?',
      options: [
        'Ela viria se você a convidasse',
        'Ela teria vindo se você a tivesse convidado',
        'Ela veio porque você a convidou',
        'Ela virá se você a convidar'
      ],
      answer: 1,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    },
    {
      question: 'Qual a tradução de "They must have forgotten about the meeting"?',
      options: [
        'Eles devem esquecer a reunião',
        'Eles esqueceram a reunião',
        'Eles devem ter esquecido a reunião',
        'Eles vão esquecer a reunião'
      ],
      answer: 2,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    },
    {
      question: 'Qual a tradução de "I wish I could travel more often"?',
      options: [
        'Eu queria poder viajar mais frequentemente',
        'Eu viajo mais frequentemente',
        'Eu vou viajar mais frequentemente',
        'Eu posso viajar mais frequentemente'
      ],
      answer: 0,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    },
    {
      question: 'Qual a tradução de "By the time we arrived, the movie had already started"?',
      options: [
        'Quando chegamos, o filme já tinha começado',
        'Quando chegamos, o filme começou',
        'Quando chegamos, o filme estava começando',
        'Quando chegamos, o filme vai começar'
      ],
      answer: 0,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    },
    {
      question: 'Qual a tradução de "He is used to waking up early"?',
      options: [
        'Ele costumava acordar cedo',
        'Ele está acostumado a acordar cedo',
        'Ele acordou cedo',
        'Ele vai acordar cedo'
      ],
      answer: 1,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    },
    {
      question: 'Qual a tradução de "If I were you, I would apologize"?',
      options: [
        'Se eu fosse você, eu pediria desculpas',
        'Se eu sou você, eu peço desculpas',
        'Se eu fosse você, eu pedi desculpas',
        'Se eu sou você, eu pediria desculpas'
      ],
      answer: 0,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    },
    {
      question: 'Qual a tradução de "She has been working here since 2015"?',
      options: [
        'Ela trabalha aqui desde 2015',
        'Ela trabalhou aqui em 2015',
        'Ela está trabalhando aqui desde 2015',
        'Ela vai trabalhar aqui desde 2015'
      ],
      answer: 2,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    },
    {
      question: 'Qual a tradução de "You should have told me the truth"?',
      options: [
        'Você deveria me contar a verdade',
        'Você me contou a verdade',
        'Você deveria ter me contado a verdade',
        'Você vai me contar a verdade'
      ],
      answer: 2,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    },
    {
      question: 'Qual a tradução de "Despite the rain, we went for a walk"?',
      options: [
        'Apesar da chuva, fomos caminhar',
        'Por causa da chuva, fomos caminhar',
        'Apesar da chuva, não fomos caminhar',
        'Por causa da chuva, ficamos em casa'
      ],
      answer: 0,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    }
  ];

  answer(option: number){
    if (option === this.quiz[this.perguntaAtual].answer){
      this.score++;
      this.correct = true;
    } else {
      this.correct = false;
    }
    this.showAnswer = true;
  }

  nextQuestion(){
    this.perguntaAtual++;
    this.showAnswer = false;
  }
}