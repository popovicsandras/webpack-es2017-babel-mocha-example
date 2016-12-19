import assert from 'assert';
import NuclearChicken from '../src/NuclearChicken';

class ResolvedPromise {
    constructor() { this.promise = Promise.resolve(); }
    then() { return this.promise.then.apply(this.promise, arguments) }
}

class RejectedPromise {
    constructor() { this.promise = Promise.reject('retek'); }
    then() { return this.promise.then.apply(this.promise, arguments) }
}

describe('NuclearChicken', function() {

    it('should set the name of the chicken properly', function() {
        const chicken = new NuclearChicken('Tutum');
        assert.equal(chicken.name, 'Tutum');
    });

    it('should increase the cluck counter after successful inhalation', async function() {
        const chicken = new NuclearChicken('Tutum', ResolvedPromise);
        assert.equal(chicken.cluckCounter, 0, 'cluck counter should be zero by default');

        await chicken.cluck();
        assert.equal(chicken.cluckCounter, 1, 'cluck counter should be increased after resolved promise');
    });

    it('should NOT increase the cluck counter after UNSUCCESSFUL inhalation', async function() {
        const chicken = new NuclearChicken('Tutum', RejectedPromise);
        assert.equal(chicken.cluckCounter, 0, 'cluck counter should be zero by default');

        await chicken.cluck();
        assert.equal(chicken.cluckCounter, 0, 'cluck counter should NOT be increased after rejected promise');
    });
});