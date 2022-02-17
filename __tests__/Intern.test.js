const Intern = require("../lib/Intern");

describe('Intern class', () => {
    it('Creates an Intern instance', () => {
      const john = new Intern('john',23987,'email@email.com','ThisisMySchool');
  
      expect(john).toBeInstanceOf(Intern);
    });
    it('sets School via constructor', () => {
      const john = new Intern('john',23987,'email@email.com','ThisisMySchool');
  
      expect(john.school).toBe('ThisisMySchool');
    });
    it('gets School name via getSchool', () => {
        const john = new Intern('john',23987,'email@email.com','ThisisMySchool');
    
        expect(john.getSchool()).toBe('ThisisMySchool');
      });
    it('gets `Intern` as role for getRole()', () => {
        const john = new Intern('john',23987,'email@email.com','ThisisMySchool');
    
        expect(john.getRole()).toBe('Intern');
      });
});