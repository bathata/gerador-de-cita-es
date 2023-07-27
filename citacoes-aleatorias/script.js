const quotes = [
    {
      quote: "A vida é o que acontece enquanto você está ocupado fazendo outros planos.",
      author: "John Lennon"
    },
    {
      quote: "Não é a força, mas a constância dos bons sentimentos que conduz os homens à felicidade.",
      author: "Friedrich Nietzsche"
    },
    {
      quote: "O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.",
      author: "Henry Ford"
    },
    {
        quote: "Um livro deve ser o machado que quebra o mar gelado entre nós",
        author: "Franz Kafka"
      },
      {
        quote: "É isso que esse momento significa. É a prova do quanto mudei. Porque o antigo eu nunca se sentiria merecedor de tentar",
        author: "Pedro Rhuas"
      },
      {
        quote: "Sempre imaginei que seria super-romântico ir na Torre Eiffel com a pessoa que voce ama- gosta- ama e tirar fotos bem cafonas",
        author: "Alice Oseman"
      },
      {
        quote: "É um erro enorme teorizar sem fatos completos. Isso engana nosso julgamento",
        author: "Sir Arthur Conan Doyle"
      },
      {
        quote: "Quantas vezes lhe disse que, quando eliminar o impossível, o que restar, por improvável que seja,deve ser a verdade?",
        author: "Sir Arthur Conan Doyle"
      },
      {
        quote: "Eu estou apaixonada por um peru-pato-frango monstro",
        author: "casey McQuiston"
      },
      {
        quote: "Quem eu sou eu acho que me estaciona. Quem eu posso ser me mantém em movimento.",
        author: "Rita Von Hunty"
      },
      {
        quote: "Gritaram na rua: 'seu cabelo é duro!'. Quando cresci entendi a dureza, Em resistir, sobreviver e aprender a ser",
        author: "Luma de Lima"
      },
      {
        quote: "O amor não pode curar um transtorno mental...",
        author: "Alice Oseman"
      },
          // Adicione mais citações à lista
  ];
  
  const quoteDisplay = document.getElementById('quoteDisplay');
  const authorDisplay = document.getElementById('authorDisplay');
  const newQuoteButton = document.getElementById('newQuoteButton');
  
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.textContent = `"${randomQuote.quote}"`;
    authorDisplay.textContent = `- ${randomQuote.author}`;
  }
  
  newQuoteButton.addEventListener('click', generateRandomQuote);
  
  // Exibir uma citação aleatória ao carregar a página
  generateRandomQuote();