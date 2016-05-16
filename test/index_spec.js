import { expect } from 'chai';

import { add } from '../src/index.js';

describe('index.js', () => {
    it('adds numbers', () => {
        expect(add(1,2)).to.eq(3);
    });
});
 