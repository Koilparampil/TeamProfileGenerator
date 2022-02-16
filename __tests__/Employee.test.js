const Employee =require("../lib/Employee");



describe('Employee class', () => {
    it('Creates an Employee instance', () => {
      const john = new Employee('john',23987,'email@email.com');
  
      expect(john).toBeInstanceOf(Employee);
    });
  
    // describe('guessLetter', () => {
    //   it('Correct guess returns true', () => {
    //     expect(new Word('fish').guessLetter('i')).toBe(true);
    //   });
  
    //   it('Incorrect guess returns false', () => {
    //     expect(new Word('fish').guessLetter('o')).toBe(false);
    //   });
    // });
  
    // describe('guessedCorrectly ', () => {
    //   it('returns true if all letters are correct', () => {
    //     const word = new Word('hi');
    //     word.guessLetter('h');
    //     word.guessLetter('i');
    //     expect(word.guessedCorrectly()).toBe(true);
    //   });
    //   it('returns false if at least one letter is incorrect', () => {
    //     const word = new Word('hi');
    //     word.guessLetter('h');
    //     word.guessLetter('a');
    //     expect(word.guessedCorrectly()).toBe(false);
    //   });
    // });
  });