import { Component, OnInit } from '@angular/core';

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

  quiz = [
    {
      question: 'Qual a tradução de "Had I known about the traffic, I would have left earlier"?',
      options: [
        'Se eu soubesse do trânsito, teria saído mais cedo',
        'Se eu soubesse do trânsito, saí mais cedo',
        'Se eu sei do trânsito, teria saído mais cedo',
        'Se eu soubesse do trânsito, sairia mais cedo'
      ],
      answer: 0,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    },
    {
      question: 'Qual a tradução de "The proposal, which was submitted yesterday, needs revisions"?',
      options: [
        'A proposta que foi enviada ontem precisa de revisões',
        'A proposta, que foi enviada ontem, precisa de revisões',
        'A proposta enviada ontem precisa de revisões',
        'A proposta que será enviada ontem precisa de revisões'
      ],
      answer: 1,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    },
    {
      question: 'Qual a tradução de "Not only did she finish the project, but she also helped her colleagues"?',
      options: [
        'Ela não terminou o projeto, mas ajudou os colegas',
        'Ela terminou o projeto e ajudou os colegas',
        'Não só ela terminou o projeto, mas também ajudou os colegas',
        'Ela terminou o projeto, mas não ajudou os colegas'
      ],
      answer: 2,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    },
    {
      question: 'Qual a tradução de "Were it not for your help, I would have failed"?',
      options: [
        'Se não fosse pela sua ajuda, eu teria falhado',
        'Se não é pela sua ajuda, eu falhei',
        'Se não fosse pela sua ajuda, eu falharia',
        'Se não for pela sua ajuda, eu teria falhado'
      ],
      answer: 0,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    },
    {
      question: 'Qual a tradução de "He is believed to have embezzled company funds"?',
      options: [
        'Acredita-se que ele desviou fundos da empresa',
        'Ele acredita ter desviado fundos da empresa',
        'Acredita-se que ele desvia fundos da empresa',
        'Ele é acreditado a desviar fundos da empresa'
      ],
      answer: 0,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    },
    {
      question: 'Qual a tradução de "Scarcely had he arrived when the meeting began"?',
      options: [
        'Ele chegou e a reunião começou',
        'Mal ele chegou, a reunião começou',
        'Ele chegou antes da reunião começar',
        'Ele chegou depois que a reunião começou'
      ],
      answer: 1,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    },
    {
      question: 'Qual a tradução de "The findings, albeit preliminary, are promising"?',
      options: [
        'Os resultados, embora preliminares, são promissores',
        'Os resultados, porque preliminares, são promissores',
        'Os resultados preliminares são promissores',
        'Os resultados, ainda que preliminares, não são promissores'
      ],
      answer: 0,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    },
    {
      question: 'Qual a tradução de "It is imperative that he be informed immediately"?',
      options: [
        'É importante que ele seja informado imediatamente',
        'É imperativo que ele seja informado imediatamente',
        'É imperativo que ele foi informado imediatamente',
        'É importante que ele foi informado imediatamente'
      ],
      answer: 1,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    },
    {
      question: 'Qual a tradução de "No sooner had they left than it started raining"?',
      options: [
        'Assim que eles saíram, começou a chover',
        'Logo que eles saíram, começou a chover',
        'Mal eles saíram, começou a chover',
        'Antes que eles saíssem, começou a chover'
      ],
      answer: 2,
      feedbackCorrect: 'Congratulations, you are magic!!!',
      feedbackIncorrect: 'Ops! Try again...'
    },
    {
      question: 'Qual a tradução de "Should you require further assistance, do not hesitate to contact us"?',
      options: [
        'Se você precisar de mais assistência, não hesite em nos contatar',
        'Caso você precise de mais assistência, não hesite em nos contatar',
        'Se você precisasse de mais assistência, não hesitaria em nos contatar',
        'Caso você precisasse de mais assistência, não hesite em nos contatar'
      ],
      answer: 1,
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