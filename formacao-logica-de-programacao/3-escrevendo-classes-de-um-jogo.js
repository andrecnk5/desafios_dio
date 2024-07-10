// importando readline-sync como prompt
import readlineSync from "readline-sync";
const prompt = readlineSync.question;

class Hero {
  constructor(nameHero, ageHero, typeHero, powerHero, attackHero) {
    this.nameHero = nameHero;
    this.ageHero = ageHero;
    this.typeHero = typeHero;
    this.powerHero = powerHero;
    this.attackHero = attackHero;
  }

  // Função para cadastrar o Herói
  register() {
    this.typeHero = prompt(
      "Escolha que herói você quer ser (mago, guerreiro, monge ou ninja): "
    );
    this.nameHero = prompt("Digite o nome que deseja dar ao seu herói: ");
    this.ageHero = parseInt(prompt("Digite a idade do herói: "));

    // Inserindo poder conforme escolha do tipo de herói
    if (this.typeHero == "mago") {
      this.powerHero = "magia";
      this.attackHero = "Rajada de Vento";
    } else if (this.typeHero == "guerreiro") {
      this.powerHero = "espada";
      this.attackHero = "Lâmina do Destino";
    } else if (this.typeHero == "monge") {
      this.powerHero = "artes marciais";
      this.attackHero = "Impacto do Dragão";
    } else {
      this.powerHero = "shuriken";
      this.attackHero = "Sombra Cortante";
    }

    // Confirmando cadastro de herói
    if (
      this.typeHero &&
      this.nameHero &&
      this.ageHero &&
      this.powerHero &&
      this.attackHero
    ) {
      console.log(
        `\nO nome do seu herói é "${this.nameHero}" ele é um "${this.typeHero}" com "${this.ageHero} anos de idade" e seu poder é "${this.powerHero}" sendo seu golpe principal "${this.attackHero}".\n`
      );
    } else {
      console.log("\nAVerigue os dados cadastrados e tente novamente.");
    }
  }

  // Função ataque
  attack() {
    let wizardSound = `"Nas profundezas de sua alma, o ${this.typeHero} ${this.nameHero} sente a magia ancestral pulsar. Em meio ao caos que se desenrola ao seu redor, ele ergue seu cajado e invoca o poder que foi guardado por eras. Um grito primal ecoa pelos campos de batalha, uma súplica aos ventos antigos. '${this.attackHero}!', ele clama, liberando não apenas um golpe físico, mas o ímpeto de séculos de conhecimento e poder arcano. Que as forças da natureza atendam ao seu chamado, guiando cada fio de vento como um punhal afiado contra a escuridão que ameaça engolfar tudo. Este é seu último apelo, seu derradeiro esforço para mudar o curso do destino."\n`;

    let warriorSound = `"Com a batalha atingindo seu clímax e o destino do reino pendendo por um fio, o ${this.typeHero} ${this.nameHero} empunha sua espada lendária. A lâmina ressoa com a história de incontáveis ​​heróis que a empunharam antes dele, seu metal antigo cintilando à luz do sol agonizante. Com um olhar firme e determinado, ele enfrenta seu adversário, cada músculo tenso, cada respiração uma promessa de glória ou de ruína. '${this.attackHero}!', ele clama em um eco que parece atravessar os séculos, desafiando o próprio tecido do tempo. A lâmina corta o ar com um poder ancestral, uma fusão de habilidade mortal e vontade indomável. Que os deuses antigos guiem seu golpe, decidindo o destino deste momento épico de valor e sacrifício. Este é seu legado, sua prova final de coragem e honra diante das sombras que se erguem para consumir a luz."\n`;

    let monkSound = `"No ápice da batalha, quando ${this.nameHero} o ${this.typeHero} corre como um rio em suas veias e cada movimento é uma dança mortal, o monge mestre em artes marciais se prepara. Seus olhos brilham com a serenidade de quem domina o equilíbrio entre corpo e mente. Em um instante de pura concentração, ele canaliza sua energia, reunindo o poder do dragão ancestral que reside dentro de si. Com um grito que ecoa através das montanhas e dos vales, ele clama '${this.attackHero}!' e libera um golpe que desafia as leis da física. Seus punhos, envoltos em chi incandescente, rompem o ar como um rugido de fúria draconiana, perfurando o espaço à sua frente. Cada golpe é uma ode à perfeição das artes marciais, uma manifestação do legado dos grandes mestres que o precederam. Que seu impacto seja sentido além dos limites da carne, marcando o campo de batalha com a promessa implacável de triunfo ou sacrifício. Este é seu testamento, sua alma em chamas em busca da paz através da guerra."\n`;

    let ninjaSound = `"Nas sombras da noite, onde o silêncio é seu aliado e o perigo é seu companheiro mais próximo, ${this.nameHero} mestre ${this.typeHero} se prepara. Com uma shuriken lendária nas mãos, seu toque leve revela séculos de treinamento mortal. Em um movimento fluído, ele lança sua arma com precisão letal, a ${this.attackHero} rasgando o ar com um zumbido agudo. Seu grito ecoa como um aviso aos deuses e aos inimigos, uma reverência ao poder oculto nas artes das sombras. A shuriken, como uma estrela cadente, busca seu alvo com voracidade implacável, cortando através da escuridão com a promessa de um destino selado. Que cada lâmina lançada seja uma dança mortal, tecida com fios de destreza e fúria, como se a própria noite conspirasse para testemunhar sua habilidade lendária. Este é seu legado, uma lenda viva entre os sussurros da escuridão, onde apenas os mais fortes ousam enfrentar a ${this.attackHero}."\n`;

    if (this.typeHero == "mago") {
      return console.log(wizardSound);
    } else if (this.typeHero == "guerreiro") {
      return console.log(warriorSound);
    } else if (this.typeHero == "monge") {
      return console.log(monkSound);
    } else {
      return console.log(ninjaSound);
    }
  }
}

// Averiguando cadastro do herói
const newHero = new Hero();
newHero.register();
newHero.attack();
