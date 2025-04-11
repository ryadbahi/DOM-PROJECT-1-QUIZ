document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form from submitting

  // Correct answers
  const answers = {
    q1: "c", // Paris
    q2: "b", // Jupiter
    q3: "a", // Au
  };

  let score = 0;
  let total = Object.keys(answers).length;

  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  // Display the result
  let resultBox = document.getElementById("result");
  if (!resultBox) {
    resultBox = document.createElement("div");
    resultBox.id = "result";
    document.querySelector("form").appendChild(resultBox);
  }
  resultBox.textContent = `You scored ${score} out of ${total}`;
});
