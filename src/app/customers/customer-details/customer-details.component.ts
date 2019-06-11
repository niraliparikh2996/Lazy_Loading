import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customerRecord: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log("params",params)
      var id = params['id'];
      this.getCustomer(id);
    });
  }

  getCustomer(id){
    this.customerRecord = this.customerList.filter(x=>
      x.id == id)[0];  
  } 
  customerList:Array<any> = [
    {"id":100,"name":"Hamish Irwin","city":"Aylesbury","country":"Greece","zipcode":22101},
    {"id":101,"name":"Travis Vincent","city":"Nässjö","country":"Mali","zipcode":14782},
    {"id":102,"name":"Drew Gay","city":"Bonnyville","country":"Virgin Islands, United States","zipcode":338208},
    {"id":103,"name":"Kennedy Hunt","city":"Skegness","country":"Sao Tome and Principe","zipcode":78728},
    {"id":104,"name":"Kyle Price","city":"Velden am Wörther See","country":"Greenland","zipcode":50960},
    {"id":105,"name":"Zeph Case","city":"Emarèse","country":"Saint Pierre and Miquelon","zipcode":9723},
    {"id":106,"name":"Tad Beasley","city":"San Martino in Badia/St. Martin in Thurn","country":"Indonesia","zipcode":32235},
    {"id":107,"name":"Quinn Booth","city":"Nicolosi","country":"Tuvalu","zipcode":40695},
    {"id":108,"name":"Wayne Sanders","city":"Devizes","country":"India","zipcode":43380},
    {"id":109,"name":"Malik Suarez","city":"Stamford","country":"Cook Islands","zipcode":7831},
    {"id":110,"name":"Jin Peck","city":"Chile Chico","country":"Aruba","zipcode":34753},
    {"id":111,"name":"Ross Mcpherson","city":"Belsele","country":"Sudan","zipcode":548162},
    {"id":112,"name":"Ahmed Good","city":"Foligno","country":"Togo","zipcode":81218},
    {"id":113,"name":"Stone Cote","city":"Wałbrzych","country":"Rwanda","zipcode":80222},
    {"id":114,"name":"Erasmus Kirkland","city":"Naro","country":"Central African Republic","zipcode":872483},
    {"id":115,"name":"Quinn Burns","city":"Chillán Viejo","country":"Argentina","zipcode":36179}
  ]
}
