import { TextAnimate } from "./magicui/text-animate";

function HeroText() {
  return (
    <>
      <h1 className="mt-10 text-balance text-3xl font-bold md:text-4xl">
        <TextAnimate animation="fadeIn" by="character" once>
          FURIA AI, Seu Guia para o Mundo dos FURIOSOS!
        </TextAnimate>
      </h1>
      <TextAnimate
        className="mt-8 text-balance"
        animation="fadeIn"
        by="line"
        once
      >
        Conheça o nosso assistente virtual, que traz novidades e informações
        sobre a FURIA no mundo do eSports, seus jogadores, equipe e tudo mais
        sobre essa lenda do eSports.
      </TextAnimate>
    </>
  );
}

export default HeroText;
