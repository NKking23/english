const flashcards = [{'question': 'To lurch', 'answer': 'walk; Move unsteadily/suddenly'}, {'question': 'Ensconced', 'answer': 'sitting very comfortably'}, {'question': 'Stout', 'answer': 'fat'}, {'question': 'Laborious', 'answer': 'hard working'}, {'question': 'Vice', 'answer': 'evil habit'}, {'question': 'Benevolent', 'answer': 'kind, generous'}, {'question': 'Preeminent', 'answer': 'most important'}, {'question': 'To expound (on)', 'answer': 'to explain at length'}, {'question': 'To counteract', 'answer': 'to oppose'}, {'question': 'Ecstasy', 'answer': 'extreme happiness'}, {'question': 'To shirk', 'answer': 'to avoid work/duty'}, {'question': 'indefatigable', 'answer': 'untiring'}, {'question': 'Faculty', 'answer': 'staff/ability'}, {'question': 'To murmur', 'answer': 'to speak under your breath'}, {'question': 'To toil', 'answer': 'to work very hard'}, {'question': 'Shrewd', 'answer': 'clever, wise'}, {'question': 'Distorted', 'answer': 'twisted, wrong'}, {'question': 'Contemptible', 'answer': 'disgusting'}, {'question': 'Irrepressible', 'answer': 'unstoppable'}, {'question': 'ignominious', 'answer': 'cowardly, shameful'}, {'question': 'Blithely', 'answer': 'care free'}, {'question': 'Manifest', 'answer': 'showing'}, {'question': 'To articulate', 'answer': 'to put into words'}, {'question': 'Aloof', 'answer': 'distant (above)'}, {'question': 'To advocate', 'answer': 'to support a cause'}, {'question': 'indignant', 'answer': 'angry'}, {'question': 'Malignant', 'answer': 'bad'}, {'question': 'Cryptic', 'answer': 'not clear'}, {'question': 'Tmid', 'answer': 'scared'}, {'question': 'begrudge', 'answer': 'to do something unwillingly'}, {'question': 'To lure', 'answer': 'to trap'}, {'question': 'Retribution', 'answer': 'payback'}, {'question': 'Tumult', 'answer': 'storm'}, {'question': 'Countenance', 'answer': 'face'}, {'question': 'To ganw', 'answer': 'to eat "away"'}, {'question': 'Lamentation', 'answer': 'sadness'}, {'question': 'Treachery', 'answer': 'betrayal'}, {'question': 'Impending', 'answer': 'about to happen'}, {'question': 'To excess', 'answer': 'too much'}, {'question': 'To be privy to', 'answer': 'to know a secret'}, {'question': 'To waft', 'answer': '(a smell) moving'}, {'question': 'To temper', 'answer': 'to soften'}, {'question': 'To offset', 'answer': 'to balance out'}, {'question': 'Complicity', 'answer': 'working with'}, {'question': 'Contempt', 'answer': 'hate'}, {'question': 'Misgiving', 'answer': 'doubt'}, {'question': 'Contrary (to)', 'answer': 'opposed to'}, {'question': 'Speculating', 'answer': 'thinking about'}, {'question': 'Incumbent upon', 'answer': 'duty'}, {'question': 'To suppress', 'answer': 'to push down'}];

const container = document.getElementById("flashcard-container");

flashcards.forEach((cardData) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">${cardData.question}</div>
      <div class="card-back">${cardData.answer}</div>
    </div>
  `;

  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

  container.appendChild(card);
});
