const sentence = "hello there from lighthouse labs";
const sentenceArray = sentence.split('');

sentenceArray.forEach((char, i) => {
  setTimeout(() => {
    (i === sentenceArray.length - 1) ? process.stdout.write(char+ "\n") : process.stdout.write(char);
  }, 50*i);
});