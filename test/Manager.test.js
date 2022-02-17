const Manager = require("../lib/Manager");

describe('Manager class', () => {
    it('Creates an Manager instance', () => {
      const john = new Manager('john',23987,'email@email.com','718-127-0348');
  
      expect(john).toBeInstanceOf(Manager);
    });
    it('sets Office Number via constructor', () => {
      const john = new Manager('john',23987,'email@email.com','718-127-0348');
  
      expect(john.officeNumber).toBe('718-127-0348');
    });
    it('gets Office Number via getOffice', () => {
        const john = new Manager('john',23987,'email@email.com','718-127-0348');
    
        expect(john.getOffice()).toBe('718-127-0348');
      });
    it('gets `Manager` as role for getRole()', () => {
        const john = new Manager('john',23987,'email@email.com','718-127-0348');
    
        expect(john.getRole()).toBe('Manager');
      });
});