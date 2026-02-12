
export class Vault{

    constructor(){
        this.thoughts = [];
    }

    add(thought){
        this.thoughts.push(thought);
    }

    all(){
        return this.thoughts;
    }


}


export class AdminVault extends Vault{
    constructor(){
        super();
        this.role = "admin";
    }
}


