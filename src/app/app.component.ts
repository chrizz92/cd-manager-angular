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
  actYear : number = (new Date(Date.now())).getFullYear();
  filterText : string = '';
  cds : Cd[] = [];
  companies : string[] = [];
  filterCompany ?: string;
  selectedCompany:string='';
  cdToAdd : Cd = {title:'',artist:'',company:'',country:'',price:9.99,year:this.actYear};
  addButtonClicked : boolean = false;
  savingSuccessful : boolean = false;
  validPrice : boolean = true;
  validYear : boolean = true;
  

  //DOM ist noch nicht aufgebaut
  constructor(private cdsService:CdsService){
    
  }

  //DOM ist bereits aufgebaut
  ngOnInit(): void {
    this.cds = this.cdsService.getCds();
    this.getCompaniesFromCds();
  }

  isCdVisible(cd:Cd): boolean{
    return cd.title.toLowerCase().indexOf(this.filterText.toLowerCase())>-1 && (this.filterCompany==''|| this.filterCompany == null || cd.company==this.filterCompany);
    //return cd.title.toLowerCase().startsWith(this.filterText.toLowerCase());
  }

  checkYear(){
    this.validYear = false;
    if(this.cdToAdd.year == null || isNaN(parseFloat(this.cdToAdd.year.toString()))){
      
    }else{
      if(this.cdToAdd.year%1==0){
        this.validYear = true;
      } 
    }
  }

  checkPrice(){
    this.validPrice = false;
    if(this.cdToAdd.price == null || isNaN(parseFloat(this.cdToAdd.price.toString()))){
    }else{
      this.validPrice = true;
    }
  }

  addCd(){
    this.addButtonClicked = true;
    let errors = document.getElementsByClassName('error').length;
    console.log(errors);
    isNaN
    if(errors==0){
      this.cds.push(this.cdToAdd);
      this.cdToAdd = {title:'',artist:'',company:'',country:'',price:9.99,year:2021};
      this.addButtonClicked = false;
      this.savingSuccessful = true;
      this.getCompaniesFromCds();
    }else{
      this.savingSuccessful = false;
    }
  }

  deleteCd(idx:number){
    console.log(idx);
    let savedCds = this.cds;
    this.cds = this.cds.slice(0,idx);
    this.cds = this.cds.concat(savedCds.slice(idx+1));
    this.getCompaniesFromCds();
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

    if(this.filterCompany!=null){
      let filterCompanyString = this.filterCompany.toString();
      if(this.companies.includes(filterCompanyString)){

      }else{
        this.filterCompany = '';
      }
    }

    return this.companies;

  }
}
