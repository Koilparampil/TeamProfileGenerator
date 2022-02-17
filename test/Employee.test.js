const Employee =require("../lib/Employee");



describe('Employee class', () => {
    it('Creates an Employee instance', () => {
      const john = new Employee('john',23987,'email@email.com');
  
      expect(john).toBeInstanceOf(Employee);
    });
    it('sets name via constructor', () => {
      const john = new Employee('john',23987,'email@email.com');
  
      expect(john.name).toBe('john');
    });
    it('sets id via constructor', () => {
      const john = new Employee('john',23987,'email@email.com');
  
      expect(john.id).toBe(23987);
    });
    it('sets email via constructor', () => {
      const john = new Employee('john',23987,'email@email.com');
  
      expect(john.email).toBe('email@email.com');
    });
    it('gets name via getName()', () => {
      const john = new Employee('john',23987,'email@email.com');
  
      expect(john.getName()).toBe('john');
    });
    it('gets id via getId()', () => {
      const john = new Employee('john',23987,'email@email.com');
  
      expect(john.getId()).toBe(23987);
    });
    it('gets email via getEmail()', () => {
      const john = new Employee('john',23987,'email@email.com');
  
      expect(john.getEmail()).toBe('email@email.com');
    });
    it('gets role `employee` via getRole()', () => {
      const john = new Employee('john',23987,'email@email.com');
  
      expect(john.getRole()).toBe('Employee');
    });
  });