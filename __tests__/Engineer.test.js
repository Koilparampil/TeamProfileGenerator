const Engineer = require("../lib/Engineer");

describe('Engineer class', () => {
    it('Creates an Engineer instance', () => {
      const john = new Engineer('john',23987,'email@email.com','GitHubAccount');
  
      expect(john).toBeInstanceOf(Engineer);
    });
    it('sets GitHub Account via constructor', () => {
      const john = new Engineer('john',23987,'email@email.com','GitHubAccount');
  
      expect(john.gitHub).toBe('GitHubAccount');
    });
    it('gets GitHub Account via getGitHub', () => {
        const john = new Engineer('john',23987,'email@email.com','GitHubAccount');
    
        expect(john.getGitHub()).toBe('GitHubAccount');
      });
    it('gets `Engineer` as role for getRole()', () => {
        const john = new Engineer('john',23987,'email@email.com','GitHubAccount');
    
        expect(john.getRole()).toBe('Engineer');
      });
});