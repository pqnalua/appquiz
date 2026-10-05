import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basico',
  templateUrl: './basico.page.html',
  styleUrls: ['./basico.page.scss'],
  standalone: false,
})
export class BasicoPage {
  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [
    {
    questão: 'Qual peça de roupa é tradicionalmente usada em formaturas?',
    opções: ['Toga', 'Kimono', 'Sari', 'Kilt', 'Smoking'],
    resposta: 0,
    feedbackCorreto: 'Parabéns, você é incrível!!',
    feedbackIncorreto: 'Ops! Tente novamente...'
    },
    {
    questão: 'Qual é o nome do tecido mais comum em camisetas básicas?',
    opções: ['Seda', 'Linho', 'Poliéster', 'Algodão', 'Lã'],
    resposta: 3,
    feedbackCorreto: 'Parabéns, você é incrível!!',
    feedbackIncorreto: 'Ops! Tente novamente...'
    },
    {
    questão: 'Qual acessório é usado para segurar as calças?',
    opções: ['Gravata', 'Cinto', 'Cachecol', 'Chapéu', 'Luva'],
    resposta: 1,
    feedbackCorreto: 'Parabéns, você é incrível!!',
    feedbackIncorreto: 'Ops! Tente novamente...'
    },
    {
    questão: 'Qual dessas é uma cor neutra?',
    opções: ['Vermelho', 'Azul', 'Verde', 'Rosa', 'Preto'],
    resposta: 4,
    feedbackCorreto: 'Parabéns, você é incrível!!',
    feedbackIncorreto: 'Ops! Tente novamente...'
    },
    {
    questão: 'Qual estilista é conhecido pelo "New Look"?',
    opções: ['Coco Chanel', 'Yves Saint Laurent', 'Christian Dior', 'Giorgio Armani', 'Versace'],
    resposta: 2,
    feedbackCorreto: 'Parabéns, você é incrível!!',
    feedbackIncorreto: 'Ops! Tente novamente...'
    },
    {
    questão: 'Qual peça é típica do guarda-roupa masculino clássico?',
    opções: ['Terno', 'Saia', 'Vestido', 'Bolsa', 'Salto alto'],
    resposta: 0,
    feedbackCorreto: 'Parabéns, você é incrível!!',
    feedbackIncorreto: 'Ops! Tente novamente...'
    },
    {
    questão: 'Qual material é usado para fazer jeans?',
    opções: ['Seda', 'Linho', 'Poliéster', 'Cetim', 'Brim'],
    resposta: 4,
    feedbackCorreto: 'Parabéns, você é incrível!!',
    feedbackIncorreto: 'Ops! Tente novamente...'
    },
    {
    questão: 'Qual acessório é usado no pescoço?',
    opções: ['Anel', 'Brinco', 'Colar', 'Pulseira', 'Tornozeleira'],
    resposta: 2,
    feedbackCorreto: 'Parabéns, você é incrível!!',
    feedbackIncorreto: 'Ops! Tente novamente...'
    },
    {
    questão: 'Qual é o nome da semana de moda de Paris?',
    opções: ['Milano Moda', 'Paris Fashion Week', 'London Fashion Week', 'New York Fashion Week', 'São Paulo Fashion Week'],
    resposta: 1,
    feedbackCorreto: 'Parabéns, você é incrível!!',
    feedbackIncorreto: 'Ops! Tente novamente...'
    },
    {
    questão: 'Qual tecido é conhecido por ser transparente e leve?',
    opções: ['Jeans', 'Lã', 'Couro', 'Seda', 'Algodão'],
    resposta: 3,
    feedbackCorreto: 'Parabéns, você é incrível!!',
    feedbackIncorreto: 'Ops! Tente novamente...'
    },
  ];

  answer(option: number) {
    if (option === this.quiz[this.perguntaAtual].resposta) {
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