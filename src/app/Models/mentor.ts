export class Mentor {


    public mentorId: string;
      
    public mentorName : string;

    public email : string;

    public contactNo : string;

    public password : string;

    public timeSlot : string;

    public yearsOfExperience : number;

    public facilities :string;
    
    public technologies : string;

    public linkedinUrl : string;

    public role : string;

    public active : string;
   
    constructor() { 
        this.mentorId="M" + Math.round((Math.random()*9000));
        this.role='Mentor';
        this.active="True";
        
    }   
    
}
