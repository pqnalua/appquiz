import { Component } from '@angular/core';

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
      question: 'Na série "Stranger Things", qual é o nome do mundo paralelo sombrio e assustador?',
      options: ['O Abismo', 'Mundo Invertido (Upside Down)', 'Terra das Sombras', 'Dimensão Zero'],
      answer: 1,
      feedbackCorrect: 'Correto! Cuidado com o Demogorgon no Mundo Invertido! 🚲🔦',
      feedbackIncorrect: 'Ops! O mundo alternativo da série é o Mundo Invertido.'
    },
    {
      question: 'Em "O Senhor dos Anéis", quantos anéis de poder foram dados aos Reis-Elfos?',
      options: ['Três Anéis', 'Sete Anéis', 'Nove Anéis', 'Um Único Anel'],
      answer: 0,
      feedbackCorrect: 'Exato! "Três anéis para os Reis-Elfos sob este céu..." 🧝‍♂️💍',
      feedbackIncorrect: 'Errou! Foram 3 anéis para os Elfos, 7 para os Anões e 9 para os Homens.'
    },
    {
      question: 'No Universo Marvel (MCU), quantas Joias do Infinito compõem a Manopla do Thanos?',
      options: ['4 Joias', '5 Joias', '6 Joias', '7 Joias'],
      answer: 2,
      feedbackCorrect: 'Perfeito! São 6 Joias: Espaço, Mente, Realidade, Poder, Tempo e Alma! 💎🫰',
      feedbackIncorrect: 'Incorreto! A Manopla do Infinito reúne 6 Joias.'
    },
    {
      question: 'Na série "Breaking Bad", sob qual codinome o professor Walter White é conhecido no crime?',
      options: ['Saul Goodman', 'Gus Fring', 'Heisenberg', 'El Camino'],
      answer: 2,
      feedbackCorrect: 'Say my name! É o Heisenberg! 🧪🕶️',
      feedbackIncorrect: 'Errado! Walter White adota o pseudônimo de Heisenberg.'
    },
    {
      question: 'Qual é o verdadeiro nome da criatura chamada de "Baby Yoda" em "The Mandalorian"?',
      options: ['Grogu', 'Yaddle', 'Gideon', 'Din Djarin'],
      answer: 0,
      feedbackCorrect: 'Isso aí! O nome dele é Grogu! This is the Way! 🛸💚',
      feedbackIncorrect: 'Ops! Seu nome verdadeiro revelado na 2ª temporada é Grogu.'
    },
    {
      question: 'Em "Matrix" (1999), qual pílula Neo escolhe tomar para acordar no mundo real?',
      options: ['A pílula azul', 'A pílula verde', 'A pílula vermelha', 'A pílula dourada'],
      answer: 2,
      feedbackCorrect: 'Boa escolha! Neo toma a pílula vermelha e acorda na realidade! 🕶️💊',
      feedbackIncorrect: 'Não! Neo escolhe a pílula vermelha; a azul o manteria na ilusão.'
    },
    {
      question: 'Na série "Game of Thrones", qual é o lema oficial da Casa Stark de Winterfell?',
      options: [
        'Fogo e Sangue',
        'O Inverno está Chegando (Winter is Coming)',
        'Nós Não Semeamos',
        'Família, Dever, Honra'
      ],
      answer: 1,
      feedbackCorrect: 'Winter is Coming! Acertou em cheio! 🐺❄️',
      feedbackIncorrect: 'Errou! O lema da Casa Stark é "O Inverno está Chegando".'
    },
    {
      question: 'No clássico "Jurassic Park" (1993), de onde os cientistas extraíram o DNA dos dinossauros?',
      options: [
        'Ossos fossilizados',
        'Mosquitos preservados em pedras de âmbar',
        'Solo congelado da Antártida',
        'Ovos petrificados no deserto'
      ],
      answer: 1,
      feedbackCorrect: 'Fantástico! Mosquitos fossilizados em âmbar com sangue de dinossauro! 🦟🦕',
      feedbackIncorrect: 'Não foi dessa vez! O DNA foi retirado de mosquitos pré-históricos em âmbar.'
    },
    {
      question: 'Qual ator interpretou o lendário Coringa em "Batman: O Cavaleiro das Trevas" (2008)?',
      options: ['Jack Nicholson', 'Joaquin Phoenix', 'Heath Ledger', 'Jared Leto'],
      answer: 2,
      feedbackCorrect: 'Why so serious? Heath Ledger entregou uma atuação inesquecível! 🃏🎭',
      feedbackIncorrect: 'Incorreto! A atuação marcante de 2008 foi de Heath Ledger.'
    },
    {
      question: 'Na aclamada série "The Last of Us", qual espécie de fungo causa a infecção global?',
      options: ['Cordyceps', 'Penicillium', 'Aspergillus', 'Rhizopus'],
      answer: 0,
      feedbackCorrect: 'Exato! O fungo mutante Cordyceps causou o apocalipse! 🍄🧟',
      feedbackIncorrect: 'Errou! Trata-se do fungo mutante Cordyceps.'
    },
    {
      question: 'No filme de ficção "Interestelar" (2014), qual é o nome do gigantesco buraco negro?',
      options: ['TARS', 'Gargântua', 'Cygnus X', 'Endurance'],
      answer: 1,
      feedbackCorrect: 'Impressionante! Gargântua, um dos buracos negros mais icônicos do cinema! 🌌🚀',
      feedbackIncorrect: 'Ops! O buraco negro visitado pelos astronautas se chama Gargântua.'
    },
    {
      question: 'Qual série britânica retrata a gangue familiar liderada por Thomas Shelby em Birmingham?',
      options: ['Peaky Blinders', 'Downton Abbey', 'Sherlock', 'The Crown'],
      answer: 0,
      feedbackCorrect: 'By order of the Peaky Blinders! Resposta certa! 🥃🧢',
      feedbackIncorrect: 'Não foi dessa vez! A série de Thomas Shelby é "Peaky Blinders".'
    }
  ];

  answer(option: number) {
    if (this.showAnswer) {
      return;
    }
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

  reiniciar() {
    this.perguntaAtual = 0;
    this.score = 0;
    this.correct = false;
    this.showAnswer = false;
  }
}
