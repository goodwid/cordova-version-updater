const { describe, it, expect } = require('../lib/testrunner');
const { major, minor, patch } = require ('../lib/update');

describe('Updater', () => {
  let version = '2.4.1';
  it('Updates major version', () => {
    expect(major(version)).toBe('3.4.1');
  });

  it('Updates minor version', () => {
    expect(minor(version)).toBe('2.5.1');
  });

  it('Updates patch version', () => {
    expect(patch(version)).toBe('2.4.2');
  });

  describe('with zero option', () => {
    it('Updates major version with zero', () => {
      expect(major(version, { zero: true })).toBe('3.0.0');
    });
  
    it('Updates minor version with zero', () => {
      expect(minor(version, { zero: true })).toBe('2.5.0');
    });

  });
});
