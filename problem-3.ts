const countWordOccurrences = (sentence: string, word: string): number => {
  const lowerSentence = sentence.toLowerCase();
  const lowerWord = word.toLowerCase();
  const words = lowerSentence.split(" ");

  return words.filter((w) => w === lowerWord).length;
};

countWordOccurrences("I am Hasan from Bangladesh, Hasan loves coding", "Hasan");
