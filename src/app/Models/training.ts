export class Training {
    public  trainingId : string;
        public  trainingName : string;
        public  userId : string;
        public  mentorId : string;
        public  skillId : string;
        public  timeslot : string;
        public  duration : string;
        public  status : string;
        public  progress : string
        public  rating : string;
        public  startDate : Date;
        public  endDate : Date;
        public  requested : boolean;
        public  rejectNotify : boolean;
        public  paymentStatus : boolean;

        constructor(){
            this.trainingId="T" + Math.round((Math.random()*9000));

        }
}
