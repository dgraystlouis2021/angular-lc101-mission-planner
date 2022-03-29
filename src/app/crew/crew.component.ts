import { Component, OnInit } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
  ];

  changeColor:boolean=false;

  color:string="black";

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember(candidate:object){
    console.log("hello");
    
    if(this.crew.includes(candidate)){
        let temp:object[];
        console.log("candidate in crew "+candidate["name"]);
        for(let i=0;i<this.crew.length;i++){
          console.log(this.crew[i]["name"]);
          console.log("index"+i+" "+candidate["name"]);
          if(this.crew[i]["name"]===candidate["name"]){
            temp=(this.crew).filter(member=>member["name"]!==candidate["name"]);
            //temp=(this.crew).slice(i,1);
            console.log("remove "+temp);
            this.crew=temp;
          }
        }
    }else if(this.crew.length<3){
      this.crew.push(candidate);
        console.log("add "+this.crew);
    }
  }

  changeListColor(candidate:object):string{
    //this.changeColor=true;
    if(this.crew.includes(candidate)){
      return this.color="red";
    }else{
      return this.color="black";
    }
  }
}
