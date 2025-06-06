export default class Quote {
  constructor(id, text, author) {
    this.id = id;
    this.text = text;
    this.author = author;
  }

  info() {
    return `Quote has id: ${this.id} and author is ${this.author}`;
  }
}
