import { UnitestPipePipe } from './unitest-pipe.pipe';

describe('UnitestPipePipe', () => {
  const pipe = new UnitestPipePipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should not transform the valid original value', () => {
    expect(pipe.transform('usersurname1')).toBe('usersurname1 - UNIT TEST PIPE.');
  });
 
  it('should use the fallback value when original value is invalid', () => {
    expect(pipe.transform('')).toBe('Left side argument is mandatory');
  });


});
