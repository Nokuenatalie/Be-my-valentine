const name = "Ruth";

const messages = [
  `Hey ${name}, will you be my Valentine? 💖`,

  "Are you sure? 😌",

  `I would take my heart a hundred times just to be with you, my love.
One life is not enough for me to show you how much I love you on this lovely day.

I simply want to confess it to you, baby.
I am so in love with you.

And with this, I'd love nothing more than to spend Valentine's Day with you.

Will you be my Valentine? 💕`,

  `You are not just my Valentine,
you are my always and forever. ❤️`
];

let step = 0;

const messageEl = document.getElementById("message");
messageEl.innerText = messages[step];

function answer(choice) {
  if (choice === "no") {
    messageEl.innerText =
      "It's okay 🌸 You are still special.";
    document.getElementById("buttons").style.display = "none";
    return;
  }

  step++;
  if (step < messages.length) {
    messageEl.innerText = messages[step];
  } else {
    document.getElementById("buttons").style.display = "none";
  }
}
