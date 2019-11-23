export class Skill {
    public skillId: string;
      
    public skillName : string;

    public toc : string;

    public prerequisites : string;

    public fees : number;


    constructor() { 
        this.skillId="S" + Math.round((Math.random()*9000));
        
        
    }   
}
