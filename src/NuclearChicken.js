export default class NuclearChicken {
    
    constructor(chickenName, PromiseClass = Promise) {
        this.name = chickenName;
        this.PromiseClass = PromiseClass;
        this.cluckCounter = 0;

        console.log(`Nuclear chicken (${chickenName}) was born.`);
    }

    inhaleFor(milisecs) {
        const PromiseClass = this.PromiseClass;
        return new PromiseClass((resolve) => {
            setTimeout(resolve, milisecs);
        });
    }

    async cluck() {
        try {
            console.log(`${this.name}: *preparing for clucking, inhale deeply...*`);
            await this.inhaleFor(3000);
            console.log(`${this.name}: cluck (async rulz!)`);
        } catch (e) {
            console.log(`The chicken's respiration is malfunctioning. The chicken can't cluck.`);
            return;
        }
        
        this.cluckCounter++;
    }
}