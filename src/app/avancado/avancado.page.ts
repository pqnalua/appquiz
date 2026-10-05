import { Component } from '@angular/core';

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
      questao: 'Qual estilista belga é conhecido pela desconstrução e pelo uso de tecidos assimétricos?',
      opcoes: ['Martin Margiela', 'Dries Van Noten', 'Ann Demeulemeester', 'Walter Van Beirendonck', 'Raf Simons'],
      resposta: 0,
      feedbackCorreto: 'Parabéns, você é incrível!!',
      feedbackIncorreto: 'Ops! Tente novamente...'
    },
    {
      questao: 'Qual termo descreve a técnica de cortar e remontar roupas para criar novas formas?',
      opcoes: ['Upcycling', 'Patchwork', 'Bricolage', 'Deconstruction', 'Assemblage'],
      resposta: 3,
      feedbackCorreto: 'Parabéns, você é incrível!!',
      feedbackIncorreto: 'Ops! Tente novamente...'
    },
    {
      questao: 'Qual casa de moda italiana ficou famosa pelo vestido preto de alfinetes de segurança usado por Elizabeth Hurley?',
      opcoes: ['Gucci', 'Versace', 'Prada', 'Armani', 'Moschino'],
      resposta: 1,
      feedbackCorreto: 'Parabéns, você é incrível!!',
      feedbackIncorreto: 'Ops! Tente novamente...'
    },
    {
      questao: 'Qual fotógrafo de moda é conhecido por imagens surrealistas e colaborações com a Vogue?',
      opcoes: ['Richard Avedon', 'Helmut Newton', 'Tim Walker', 'Mario Testino', 'Annie Leibovitz'],
      resposta: 2,
      feedbackCorreto: 'Parabéns, você é incrível!!',
      feedbackIncorreto: 'Ops! Tente novamente...'
    },
    {
      questao: 'Qual é o nome do processo de tingimento com índigo usado em jeans japoneses?',
      opcoes: ['Aizome', 'Shibori', 'Katazome', 'Yuzen', 'Sashiko'],
      resposta: 0,
      feedbackCorreto: 'Parabéns, você é incrível!!',
      feedbackIncorreto: 'Ops! Tente novamente...'
    },
    {
      questao: 'Qual estilista britânico é conhecido por designs teatrais e plataformas gigantes?',
      opcoes: ['John Galliano', 'Vivienne Westwood', 'Paul Smith', 'Stella McCartney', 'Alexander McQueen'],
      resposta: 4,
      feedbackCorreto: 'Parabéns, você é incrível!!',
      feedbackIncorreto: 'Ops! Tente novamente...'
    },
    {
      questao: 'Qual termo define a estética japonesa de imperfeição e simplicidade?',
      opcoes: ['Kawaii', 'Wabi-sabi', 'Shibui', 'Iki', 'Mono no aware'],
      resposta: 1,
      feedbackCorreto: 'Parabéns, você é incrível!!',
      feedbackIncorreto: 'Ops! Tente novamente...'
    },
    {
      questao: 'Qual estilista francês criou o "tailleur bar" em 1947?',
      opcoes: ['Coco Chanel', 'Yves Saint Laurent', 'Christian Dior', 'Pierre Balmain', 'Hubert de Givenchy'],
      resposta: 2,
      feedbackCorreto: 'Parabéns, você é incrível!!',
      feedbackIncorreto: 'Ops! Tente novamente...'
    },
    {
      questao: 'Qual modelo de negócio de moda se baseia em produzir pequenas quantidades e repor conforme a demanda?',
      opcoes: ['Fast fashion', 'Slow fashion', 'Prêt-à-porter', 'Drop model', 'Made-to-order'],
      resposta: 3,
      feedbackCorreto: 'Parabéns, você é incrível!!',
      feedbackIncorreto: 'Ops! Tente novamente...'
    },
    {
      questao: 'Qual editora de moda foi editora-chefe da Vogue americana por mais de 30 anos?',
      opcoes: ['Diana Vreeland', 'Grace Coddington', 'Carine Roitfeld', 'Emmanuelle Alt', 'Anna Wintour'],
      resposta: 4,
      feedbackCorreto: 'Parabéns, você é incrível!!',
      feedbackIncorreto: 'Ops! Tente novamente...'
    }
  ];

  answer(option: number) {
    if (this.showAnswer) {
      return;
    }
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

  reiniciar() {
    this.perguntaAtual = 0;
    this.score = 0;
    this.correct = false;
    this.showAnswer = false;
  }
}