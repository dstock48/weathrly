class Node {
  constructor(letter = null) {
    this.letter = letter;
    this.children = {};
    this.isCompleteWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
    this.wordCount = 0;
    this.selectedWords = [];
  }

  insert(word) {

    if (typeof word !== 'string') {
      console.log(word);
      console.error('You can only enter strings');
      return
    }

    let wordArr = word.toLowerCase().split('');
    let currentNode = this.root;

    wordArr.forEach((letter) => {
      if (!currentNode.children[letter]) {
        currentNode.children[letter] = new Node(letter);
      }
      currentNode = currentNode.children[letter];
    });

    this.wordCount++
    currentNode.isCompleteWord = true;
  }

  count() {
    return this.wordCount;
  }

  suggest(string) {
    let stringArr = string.toLowerCase().split(''); // normalize string to LC and split into array of letters
    let currentNode = this.root; // assign currentNode var to start at the root node

    stringArr.forEach( letter => { // loop over all the letters in the string
      currentNode = currentNode.children[letter] // set the currentNode to its child node in the key of the current letter
    }) // end with the current node as the node for the last letter in the string array
    let wordCompletions = this.findWords(currentNode) // pass currentNode into fn that will return an array of partial word matches

    // map over wordCompletions arr and add the original search term to the begining of each word completion
    let suggestions = wordCompletions.map( solution => string + solution )

    this.selectedWords.forEach((word) => {  // loop over the selectedWords array
      if (suggestions.includes(word)) {  //  if any word is included in the suggestions
        let wordIndex = suggestions.indexOf(word); //  find what index its in
        let preferedWord = suggestions.splice(wordIndex, 1);  //  remove it from the array

        suggestions.unshift(...preferedWord)  //  add it back to the beggining of the array
      }
    })

    return suggestions
  }


  findWords(node, prefix = [], wordCompletions = []) {

    if (node.isCompleteWord) { //  if this node is the last node in a word
      wordCompletions.push(prefix.join(''))  //  join the letter(s) in the prefix array and push them into the completions array
    }
    let nodeChildrenKeys = Object.keys(node.children);  //  get the key names of this node's children object

    nodeChildrenKeys.forEach((letter) => {
      //  for each letter node's letter, push it into the prefix array
      prefix.push(node.children[letter].letter);
      // recursively call findWords on all children nodes of the current node until it returns a string to the wordCompletions array
      this.findWords(node.children[letter], prefix, wordCompletions);
      //  remove the iterated letter from the prefix array to make room for the next one in the forEach loop.
      prefix.pop();  //  ??
    })

    return wordCompletions
  }

  populate(array) {
    array.forEach((word) => {
      this.insert(word)
    });
  }

  select(string) {
    this.selectedWords.push(string)
  }

}

export default Trie;
