const GameState = Object.freeze({
    INTRO:   Symbol("introduction"),
    JANUARY:   Symbol("january"),
    FEBRUARY:  Symbol("february"),
    MARCH: Symbol("march"),
    APRIL: Symbol("april"),
    MAY: Symbol("may"),
    JUNE: Symbol("june"),
    JULY: Symbol("july"),
    AUGUST: Symbol("august"),
    SEPTEMBER: Symbol("september"),
    OCTOBER: Symbol("october"),
    NOVEMBER: Symbol("november"),
    DECEMBER: Symbol("december")
});

module.exports = class Game{
    constructor(){
        this.stateCur = GameState.INTRO;   
         this.initialized = false;     
    }
    
    makeAMove(sInput)
    {   
        let sReply =" ";		
        let month=sInput.toLowerCase();
			switch(month){            
				case GameState.INTRO:
					sReply="Welcome to Lucky Game bot, I will be telling you about your day if you enter your month of birth. Please enter your birth month in lowercase";
					//this.stateCur = GameState.JANUARY;
					break;
				case "january":
					sReply ="You will be meeting a wonderful person today - Thats me!";
					break;
				case "february":
					sReply ="You will be winning 1 million today!";
					break;
				case "march":				
					sReply = "Today will be your best day if you send me $100 :P !";
					break;
				case "april":
					sReply = "You will be getting a surprise from your parents!";
					break;
				case "may":   
					sReply = "You will be getting unexpected gift from someone special today!";   
					break;
				case "june":
					sReply = "Things happen the way that you want them today!";
					break;            
				case "july":
					sReply = "If you put little hard work today, you will get good things!";
					break;            
				case "august":
					sReply = "Your lucky number is 8 today, so, give something to 8 people!";
					break;     
				case "september":
					sReply = "You day will be very bright, one condition: if you donate at least $5 to charity!";
					break;   
				case "october":      
					sReply = "You will be getting high scores today on your assignment!";
					break;   
				case "november":        
					sReply = "You will have a very peaceful day today!";
					break;  
				case "december":                   
					sReply = "Push your creative projects forward this morning, you will succeed!";
					break;            
				default:
					if (this.initialized){
						sReply ="Keep going!, Please enter valid month!";
					}
					else{
						this.initialized = true;
						sReply ="Welcome to Lucky Game bot, I will be telling you about your day if you enter your month of birth. Please enter your birth month in lowercase!";
					}	
			}		  
			return([sReply]);
		
    }
}