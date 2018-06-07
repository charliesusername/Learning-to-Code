function Rocket(dna) {

    this.pos = createVector(width / 2, height - 10);
    this.vel = createVector();
    this.acc = createVector();
    this.trail = [];
    this.completed = false;
    this.crashed = false;
    this.dna = dna ? dna : new DNA();
    this.fitness = 0;
    this.deathCount = 0;

    this.applyForce = function (force) {
        this.acc.add(force);
    }

    // calculates the rockets fitness and assigns the value to this.fitness
    this.calcFitness = function () {
        var d = dist(this.pos.x, this.pos.y, target.x, target.y);

        this.fitness = map(d, 0, width, width, 0);

        if (this.completed) {
            this.fitness *= 10;
        }
        if (this.crashed) {
            this.fitness /= 10;
        }
    }

    this.update = function () {
        var d = dist(this.pos.x, this.pos.y, target.x, target.y);
        if (d < 10) {
            this.completed = true;
            this.pos = target.copy();
        }
        // hits bottom or obstacle
        if (this.pos.x > rx && this.pos.x < rx + rw
            && this.pos.y > ry && this.pos.y < ry + rh
            || this.pos.y > height) {
            this.crashed = true;
            this.deathCount = count;
        }
        //hits right  or left wall
        if (this.pos.x > width || this.pos.x < 0) {
            this.vel.x *= -1;
        }
        // hits ceiling
        if (this.pos.y < 0) {
            this.vel.y *= -1;
        }     

        this.applyForce(this.dna.genes[count]);

        if (!this.completed && !this.crashed) {
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.mult(0);
            this.vel.limit(4);
        }

        
    }

    this.show = function () {
        push();
        translate(this.pos.x, this.pos.y)
        rotate(this.vel.heading());
        rectMode(CENTER);
        noStroke();
        fill(255, 180);
        rect(0, 0, 8, 3);
        pop();

       /*  for (var i = 1; i < this.trail.length; i++) {
            noStroke();
            fill(255);
            line(this.trail[i].pos.x, this.trail[i].pos.y,
                this.trail[i - 1].pos.x, this.trail[i-1].pos.y);
        } */
    }
}