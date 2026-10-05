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
      questao: 'Qual movimento de moda dos anos 1970 ficou marcado por alfinetes e roupas rasgadas?',
      opcoes: ['Hippie', 'Disco', 'Punk', 'Grunge', 'Preppy'],
      resposta: 2,
      feedbackCorreto: 'Parabéns, você é incrível!!',
      feedbackIncorreto: 'Ops! Tente novamente...'
    },
    {
      questao: 'Qual peça foi popularizada por Mary Quant nos anos 1960?',
      opcoes: ['Calça jeans', 'Terno', 'Blazer', 'Minissaia', 'Salto agulha'],
      resposta: 3,
      feedbackCorreto: 'Parabéns, você é incrível!!',
      feedbackIncorreto: 'Ops! Tente novamente...'
    },
    {
      questao: 'Qual casa de moda foi fundada por Yves Saint Laurent e Pierre Bergé?',
      opcoes: ['Chanel', 'Yves Saint Laurent', 'Dior', 'Gucci', 'Prada'],
      resposta: 1,
      feedbackCorreto: 'Parabéns, você é incrível!!',
      feedbackIncorreto: 'Ops! Tente novamente...'
    },
    {
      questao: 'Qual técnica japonesa de tingimento por amarração é usada em tecidos?',
      opcoes: ['Tie-dye', 'Batik', 'Ikat', 'Plangi', 'Shibori'],
      resposta: 4,
      feedbackCorreto: 'Parabéns, você é incrível!!',
      feedbackIncorreto: 'Ops! Tente novamente...'
    },
    {
      questao: 'Qual estilista é conhecido por criar o tailleur feminino?',
      opcoes: ['Dior', 'Balenciaga', 'Chanel', 'Givenchy', 'Lacroix'],
      resposta: 2,
      feedbackCorreto: 'Parabéns, você é incrível!!',
      feedbackIncorreto: 'Ops! Tente novamente...'
    },
    {
      questao: 'Qual modelo de calça foi criado por Levi Strauss?',
      opcoes: ['Jeans', 'Chino', 'Alfaiataria', 'Legging', 'Cargo'],
      resposta: 0,
      feedbackCorreto: 'Parabéns, você é incrível!!',
      feedbackIncorreto: 'Ops! Tente novamente...'
    },
    {
      questao: 'Qual é o nome da semana de moda de Milão?',
      opcoes: ['Paris Fashion Week', 'London Fashion Week', 'New York Fashion Week', 'Milano Fashion Week', 'São Paulo Fashion Week'],
      resposta: 3,
      feedbackCorreto: 'Parabéns, você é incrível!!',
      feedbackIncorreto: 'Ops! Tente novamente...'
    },
    {
      questao: 'Qual estilista japonesa fundou a Comme des Garçons?',
      opcoes: ['Yohji Yamamoto', 'Rei Kawakubo', 'Issey Miyake', 'Kenzo', 'Junya Watanabe'],
      resposta: 1,
      feedbackCorreto: 'Parabéns, você é incrível!!',
      feedbackIncorreto: 'Ops! Tente novamente...'
    },
    {
      questao: 'Qual acessório é usado para proteger as mãos em cerimônias formais?',
      opcoes: ['Cachecol', 'Cinto', 'Chapéu', 'Óculos', 'Luvas'],
      resposta: 4,
      feedbackCorreto: 'Parabéns, você é incrível!!',
      feedbackIncorreto: 'Ops! Tente novamente...'
    },
    {
      questao: 'Qual termo define roupas feitas sob medida?',
      opcoes: ['Prêt-à-porter', 'Fast fashion', 'Alta-costura', 'Streetwear', 'Vintage'],
      resposta: 2,
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