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
    });
});