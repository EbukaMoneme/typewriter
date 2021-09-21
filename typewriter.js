const sentence = 'hello there from lighthouse labs';

const typewriter = function(sentence, time) {
  for (const char in sentence) {
    setTimeout(() => {
      if (char == sentence.length - 1) {
        process.stdout.write(sentence[char] + '\n');
      } else {
        process.stdout.write(sentence[char]);
      }
    }, time)
    time += 50;
  }
}

typewriter(sentence, 0)