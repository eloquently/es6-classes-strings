import { expect } from 'chai';

import { StringPlus } from '../src/string_plus';

describe("StringPlus", () => {
    describe("constructor()", () => {
        it('sets str', () => {
            const sp = new StringPlus('parameter');
            expect(sp.str).to.eq('parameter');
        });
        
        it('works with no parameter', () => {
            const sp = new StringPlus();
            expect(sp.str).to.eq(undefined);
        });
    });
    
    describe("replaceNthChar()", () => {
        const sp = new StringPlus('test string');
        
        it('replaces n-th char', () => {
            sp.replaceNthChar(0, 'T');
            expect(sp.str).to.eq('Test string');
            sp.replaceNthChar(4, '!');
            expect(sp.str).to.eq('Test!string');
        });
        
        it('does not return anything', () => {
            expect(sp.replaceNthChar(0, 'A')).to.eq(undefined);
        });
    });
    
    describe("reverse()", () => {
        it('reverses str', () => {
            const sp = new StringPlus('parameter');
            sp.reverse();
            expect(sp.str).to.eq('retemarap');
            sp.str = 'race car';
            sp.reverse();
            expect(sp.str).to.eq('rac ecar');
        });
        
        it('does not return anything', () => {
            const sp = new StringPlus('parameter');
            expect(sp.reverse()).to.eq(undefined);
        });
    });
    
    describe("isPalindrome()", () => {
        it('returns true for a palindrome', () => {
            const sp = new StringPlus('racecar');
            expect(sp.isPalindrome()).to.eq(true);
            sp.str = 'a';
            expect(sp.isPalindrome()).to.eq(true);
            sp.str = 'aa';
            expect(sp.isPalindrome()).to.eq(true);
            sp.str = 'aba';
            expect(sp.isPalindrome()).to.eq(true);
        });
        
        it('returns false if not a palindrome', () => {
            const sp = new StringPlus('race car');
            expect(sp.isPalindrome()).to.eq(false);
            sp.str = 'aA';
            expect(sp.isPalindrome()).to.eq(false);
            sp.str = 'ab';
            expect(sp.isPalindrome()).to.eq(false);
            sp.str = 'abb';
            expect(sp.isPalindrome()).to.eq(false);
        });
        
        it('does not change state', () => {
            const sp = new StringPlus('racecar');
            sp.isPalindrome();
            expect(sp.str).to.eq('racecar');
            sp.str = 'race car';
            sp.isPalindrome();
            expect(sp.str).to.eq('race car');
        });
    });
});