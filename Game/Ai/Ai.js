//0 = silence : 1 = betray
//betrayed - Whether or not they have been betrayed
let betrayed: boolean = false
class Ai {
    private aiMoves: boolean[];
    private enemyMoves: boolean[];
    private strategies: Strategy[];
    private currentStratIndex: number;

    //this function is called to create the AI    
    constructor() {
        this.aiMoves = [];
        this.enemyMoves = [];
        this.strategies = [];
        this.currentStratIndex = 0;
        this.strategies.push(new Strategy1(this));
    }

    //receives the human player's choice    
    receiveEnemyChoice(choice: boolean) {
        this.enemyMoves.push(choice);
    }

    //sends a response to the other player    
    // use the strategy     
    respondToEnemy() {
        let strategy: Strategy = this.strategies[this.currentStratIndex]
        let nextMove: boolean = strategy.getNextMove()
    }

    public getMoves(): boolean[] {
        return this.aiMoves;
    }
}


abstract class Strategy {
    protected parentAi: Ai;

    constructor(ai: Ai) {
        this.parentAi = ai;
    }

    //gets next move to make. True = betray. False = silent.    
    abstract getNextMove(): boolean {


    }
}

class Strategy1 extends Strategy {

    getNextMove(): boolean {
        let aiMoves = this.parentAi.getMoves();
        return false;
    }

}

class Strategy2 extends Strategy {
    getNextMove(): boolean {
        return false;
    }
}

input.onButtonPressed(Button.A, () => {
    //give AI the user choice

})

input.onButtonPressed(Button.B, () => {
//give AI the user choice})

/*
input.onButtonPressed(Button.A, () => {    
	move[turnNumber] = 0    
	turnNumber += 1    
	strategy()
})

input.onButtonPressed(Button.B, () => {    
	move[turnNumber] = 1   
	turnNumber += 1   
	strategy()
})

function titForTat() {    
	if (move[turnNumber] == 0) {        
		nextTurn = 0    
	} else {        
		nextTurn = 1    
	}
}

function unforgiving() {    
	betrayed = false    
	for (let i = 0; i = 9; i++) {        
		if (move[i] == 1) {            
			betrayed = true        
		}    
	}    

	if (betrayed == true) {        
		nextTurn = 1    
	} else {       
	 nextTurn = 0    
	}
}
*/
