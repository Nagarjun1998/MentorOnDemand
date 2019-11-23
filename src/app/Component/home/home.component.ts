import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/Service/skill.service';
import { Skill } from 'src/app/Models/skill';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
item1:Skill;
list1:Skill[];
  constructor(private service:SkillService) { }

  ngOnInit() {
    this.service.GetAll().subscribe(data=>this.list1=data)

  }

}
