//https://www.youtube.com/watch?v=zVqczFZr124



import SHA256 = require('crypto-js/sha256');

class Block{
    constructor(index, timestamp, data, previousHash= ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash =  previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }
    createGenesisBlock(){
        return new Block(0, "10/27/17", "Genesis Block", "0" );
    }

    getLatestBlock(){
        return this.chain[this.chain.length -1];
    }

    addBlock(newBlock){
        newBlock.previousHash =  this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid(){
        for (let i = 1; i < this.chain.length; i++ ){
            const curentBlock = this.chain[i];
            const previousBlock = this.chain[ i-1 ];

            if (currentBlock.hash !== currentBlock.calculateHash()){
                return: false;
            }

            if(curentBlock.previousHash !== previousBlock.hash(){
                return false;
            }) 
        }

        return true;
    }
}

let fodenCoin = new Blockchain();
fodenCoin.addBlock(new Block(1, "10/30/17"), { amount: 100});
fodenCoin.addBlock(new Block(2, "12/25/17"), { amount: 1000});

console.log('Is blockchain valid? ' + fodencoin.isChainValid(();

//console.log(JSON.stringify(fodenCoin, null, 4));