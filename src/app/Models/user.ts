export class User {

    public userId: string;
      
    public userName : string;

    public email : string;

    public password : string;

    public contact : string;

    public role : string;
    
    public active : string;


   
    constructor() { 
        this.userId="U" + Math.round((Math.random()*9000));
        this.role='User';
        this.active="True";
        
    }   
    
}
