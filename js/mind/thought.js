
export function Thought(content, type){
    this.id = Date.now();
    this.content = content;
    this.type = type;
    this.createAt = new Date().toLocaleString();
}

Thought.prototype.summary = function(){
    return `${this.type.toUpperCase()} : ${this.content}`;
}
