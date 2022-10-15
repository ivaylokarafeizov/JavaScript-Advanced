class LibraryCollection {
  constructor(capacity) {
    this.capacity = capacity;
    this.books = [];
  }

  addBook(bookName, bookAuthor) {
    if (this.books.length >= this.capacity) {
      throw new Error('Not enough space in the collection.');
    } else {
      this.books.push({ bookName, bookAuthor, payed: false });
      return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }
  }

  payBook(bookName) {
    let wantedBook = this.books.find((e) => e.bookName == bookName);

    if (!wantedBook) {
      throw new Error(`${bookName} is not in the collection.`);
    }

    if (wantedBook.payed) {
      throw new Error(`${bookName} has already been paid.`);
    }

    wantedBook.payed = true;
    return `${bookName} has been successfully paid.`;
  }

  removeBook(bookName) {
    let bookToRemove = this.books.find((e) => e.bookName == bookName);

    if (!bookToRemove) {
      throw new Error("The book, you're looking for, is not found.");
    }

    if (!bookToRemove.payed) {
      throw new Error(
        `${bookName} need to be paid before removing from the collection.`
      );
    }

    this._removeBook(bookToRemove);
    return `${bookName} remove from the collection.`;
  }

  getStatistics(bookAuthor) {
    let result = [];
    if (bookAuthor) {
      let author = this.books.find((e) => e.bookAuthor == bookAuthor);

      if (!author) {
        throw new Error(`${bookAuthor} is not in the collection.`);
      }

      result.push(
        `${author.bookName} == ${author.bookAuthor} - ${this._payCheck(
          author.payed
        )}.`
      );
    } else {
      let emptySlots = this._emptySlots(this.capacity, this.books);

      result.push(`The book collection has ${emptySlots} empty spots left.`);

      this.books.sort((x, y) => x.bookName.localeCompare(y.bookName));
      this.books.forEach((b) =>
        result.push(
          `${b.bookName} == ${b.bookAuthor} - ${this._payCheck(b.payed)}.`
        )
      );
    }
    return result.join('\n');
  }

  _removeBook(book) {
    let bookIndex = this.books.indexOf(book);
    return this.books.splice(bookIndex, 1);
  }

  _emptySlots(capacity, books) {
    let leftSlots = capacity - books.length;
    return leftSlots;
  }

  _payCheck(value) {
    let isPaid = value == true ? 'Has Paid' : 'Not Paid';
    return isPaid;
  }
}

const library = new LibraryCollection(5);
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());
