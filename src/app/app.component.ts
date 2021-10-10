import { Component, OnInit } from '@angular/core';
import { Cd } from './models/cd.model';
import { CdsService } from './services/cds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cd-manager';
  filterText : string = '';
  cds : Cd[] = [];
  companies : string[] = [];
  filterCompany:string='';
  selectedCompany:string='';
  cdToAdd : Cd = {title:'',artist:'',company:'',country:'',price:0,year:2021};

  //DOM ist noch nicht aufgebaut
  constructor(private cdsService:CdsService){
    
  }

  //DOM ist bereits aufgebaut
  ngOnInit(): void {
    this.cds = this.cdsService.getCds();
    this.getCompaniesFromCds();
  }

  isCdVisible(cd:Cd): boolean{
    return cd.title.toLowerCase().indexOf(this.filterText.toLowerCase())>-1 && (this.filterCompany=='' || cd.company==this.filterCompany);
    //return cd.title.toLowerCase().startsWith(this.filterText.toLowerCase());
  }

  addCd(){
    this.cds.push(this.cdToAdd);
    console.log(this.cdToAdd);
    this.cdToAdd = {title:'',artist:'',company:'',country:'',price:0,year:2021};
  }

  deleteCd(idx:number){
    console.log(idx);
    let savedCds = this.cds;
    this.cds = this.cds.slice(0,idx);
    this.cds = this.cds.concat(savedCds.slice(idx+1));
    /*
    [0,1,2,3,4,5,6,7,8,9]
    [0,1,2,3,4]
    [6,7,8,9]
    */
   
  }

  markupCds(company:string){
    this.selectedCompany = company;
    console.log(this.selectedCompany);
  }

  filterByCompany(company:string){
    if(this.filterCompany!=company){
      this.filterCompany = company;
    }
    else{
      this.filterCompany = '';
    }
    
  }

  getCompaniesFromCds(): string[]{
    this.companies = [];
    for (let i = 0; i < this.cds.length; i++) {
      const cd = this.cds[i];
      /* if(this.companies.findIndex(element => element == cd.company)==-1){
        
      } */
      if(this.companies.includes(cd.company)==false){
        this.companies.push(cd.company);
      }
    }

    return this.companies;

  }
}
