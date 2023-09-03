export default function sigilString(inputString: string): string {
  // Step 1: Remove vowels and spaces
  const withoutVowelsAndSpaces = inputString.replace(/[aeiouAEIOU\s]/g, '');

  // Step 2: Remove duplicate consonants
  const uniqueConsonants = withoutVowelsAndSpaces
    .split('')
    .filter((char, _index, array) => {
      const isConsonant = char.match(
        /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/,
      );
      return isConsonant && array.indexOf(char) === array.lastIndexOf(char);
    })
    .join('');

  return uniqueConsonants;
}
