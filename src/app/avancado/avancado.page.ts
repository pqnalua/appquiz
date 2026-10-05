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
      question: 'Qual filme detém o recorde de 11 Oscars ao lado de "Ben-Hur" e "Titanic"?',
      options: [
        'O Senhor dos Anéis: O Retorno do Rei (2003)',
        'Avatar (2009)',
        'La La Land: Cantando Estações (2016)',
        'E.T.: O Extraterrestre (1982)'
      ],
      answer: 0,
      feedbackCorrect: 'Espetacular! Venceu todas as 11 categorias em que foi indicado! 🏆🎬',
      feedbackIncorrect: 'Ops! O filme que completou a tríade dos 11 Oscars é "O Retorno do Rei".'
    },
    {
      question: 'Em "Pulp Fiction" (1994), qual é a famosa passagem bíblica recitada por Jules Winnfield?',
      options: ['Ezequiel 25:17', 'Salmos 23:4', 'Apocalipse 13:8', 'João 3:16'],
      answer: 0,
      feedbackCorrect: 'Sensacional! "O caminho do homem justo..." Ezequiel 25:17! 🔫📖',
      feedbackIncorrect: 'Não foi dessa vez! Jules cita Ezequiel 25:17 (com adaptações de Tarantino).'
    },
    {
      question: 'Qual cineasta dirigiu "Psicose" (1960), "Janela Indiscreta" (1954) e "Um Corpo Que Cai" (1958)?',
      options: ['Alfred Hitchcock', 'Stanley Kubrick', 'Orson Welles', 'Billy Wilder'],
      answer: 0,
      feedbackCorrect: 'Mestre do suspense! Alfred Hitchcock em pessoa! 🔪🕊️',
      feedbackIncorrect: 'Errou! O mestre do suspense cinematográfico é Alfred Hitchcock.'
    },
    {
      question: 'Em "O Poderoso Chefão" (1972), qual fruta surge em tela antes de tragédias ou assassinatos?',
      options: ['Maçã vermelha', 'Laranja', 'Pera', 'Uva roxa'],
      answer: 1,
      feedbackCorrect: 'Incrível olhar de cinéfilo! A laranja é um prenúncio célebre na trilogia! 🍊🕶️',
      feedbackIncorrect: 'Incorreto! Na trilogia de Coppola, laranjas sempre antecedem mortes e perigo.'
    },
    {
      question: 'Qual diretor polonês realizou a trilogia "Trois Couleurs" (Azul, Branco e Vermelho)?',
      options: ['Krzysztof Kieślowski', 'Andrei Tarkovsky', 'Roman Polanski', 'Ingmar Bergman'],
      answer: 0,
      feedbackCorrect: 'Genial! Krzysztof Kieślowski marcou a história do cinema mundial! 🎨🇫🇷',
      feedbackIncorrect: 'Ops! O diretor polonês da trilogia das cores é Krzysztof Kieślowski.'
    },
    {
      question: 'Em "O Iluminado" (1980) de Stanley Kubrick, qual é o nome do isolado hotel nas montanhas?',
      options: ['Hotel Overlook', 'Bates Motel', 'Hotel Grand Budapest', 'Hotel Cortez'],
      answer: 0,
      feedbackCorrect: 'Here\'s Johnny! Acertou o aterrorizante Hotel Overlook! 🪓🚪',
      feedbackIncorrect: 'Errou! Jack Torrance e sua família vão cuidar do Hotel Overlook.'
    },
    {
      question: 'Qual foi o primeiro filme de língua não inglesa a vencer o Oscar de Melhor Filme da história?',
      options: ['Parasita (2019)', 'A Vida é Bela (1997)', 'O Tigre e o Dragão (2000)', 'Roma (2018)'],
      answer: 0,
      feedbackCorrect: 'Histórico! O aclamado longa sul-coreano "Parasita", de Bong Joon-ho! 🏆🇰🇷',
      feedbackIncorrect: 'Não foi dessa vez! O marco histórico foi alcançado por "Parasita" (2019).'
    },
    {
      question: 'No clássico "Cidadão Kane" (1941) de Orson Welles, o que era a misteriosa palavra "Rosebud"?',
      options: [
        'O trenó de sua infância',
        'O nome de sua primeira esposa',
        'O primeiro jornal que ele comprou',
        'Uma mansão de veraneio'
      ],
      answer: 0,
      feedbackCorrect: 'Magnífico! "Rosebud" era o trenó da infância humilde de Kane! 🛷❄️',
      feedbackIncorrect: 'Errou! O grande enigma do filme: Rosebud era o trenó de infância de Kane.'
    },
    {
      question: 'Em "Blade Runner" (1982), qual teste mede reações empáticas para identificar replicantes?',
      options: ['Teste Turing', 'Teste Voight-Kampff', 'Teste Weyland', 'Teste Tyrell-Rachael'],
      answer: 1,
      feedbackCorrect: 'Impressionante! O teste Voight-Kampff avalia dilatação pupilar e empatia! 🦉👁️',
      feedbackIncorrect: 'Ops! Os caçadores de androides aplicam o teste Voight-Kampff.'
    },
    {
      question: 'Qual compositor assina as trilhas de "Tubarão", "Star Wars", "Indiana Jones" e "Jurassic Park"?',
      options: ['Hans Zimmer', 'Ennio Morricone', 'John Williams', 'Howard Shore'],
      answer: 2,
      feedbackCorrect: 'Absoluto! John Williams, uma das maiores lendas da história do cinema! 🎼🎺',
      feedbackIncorrect: 'Incorreto! Todas essas melodias inesquecíveis foram compostas por John Williams.'
    },
    {
      question: 'No clássico "Apocalypse Now" (1979) de Francis Ford Coppola, qual ator viveu o Coronel Kurtz?',
      options: ['Robert De Niro', 'Marlon Brando', 'Al Pacino', 'Jack Nicholson'],
      answer: 1,
      feedbackCorrect: '"O horror... o horror!" Atuação lendária de Marlon Brando! 🚁🌴',
      feedbackIncorrect: 'Não! O inesquecível Coronel Kurtz foi interpretado por Marlon Brando.'
    },
    {
      question: 'Em "Clube da Luta" (1999) dirigido por David Fincher, quem interpreta Tyler Durden?',
      options: ['Edward Norton', 'Brad Pitt', 'Christian Bale', 'Guy Pearce'],
      answer: 1,
      feedbackCorrect: 'Primeira regra do Clube da Luta: Brad Pitt brilha no papel de Tyler Durden! 🧼🥊',
      feedbackIncorrect: 'Errou! Brad Pitt interpreta o icônico vendedor de sabão Tyler Durden.'
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

