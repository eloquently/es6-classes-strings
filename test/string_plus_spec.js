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