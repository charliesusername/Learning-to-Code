function DNA(genes) {
    if (genes) {
        this.genes = genes;
    } else {
        this.genes = [];
        for (var i = 0; i < lifespan; i++) {
            this.genes[i] = p5.Vector.random2D();
            this.genes[i].setMag(maxforce);
        }
    }

    this.crossover = function (partner) {
        var newgenes = [];
        var mid = floor(random(this.genes.length));
        for (var i = 0; i < this.genes.length; i++) {
            // if before mid select parentA, after select parentB
            newgenes[i] = (i > mid) ? this.genes[i] : partner.genes[i];            
        }
        return new DNA(newgenes);
    }

    this.mutation = function (){
        for (var i = 0; i < this.genes.length; i++) {
            if(random(1) < mutationrate){
                this.genes[i] = p5.Vector.random2D();
                this.genes[i].setMag(maxforce);
            }
        }
    }

}