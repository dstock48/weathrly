class Node {
  constructor(letter = null) {
    this.letter = letter;
    this.children = {};
    this.isCompleteWord = false;
  }
}

export default Node;
