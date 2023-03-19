import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {

pincode: string = '';
pincodeDetails :any
displayErrorMsg :boolean = false
showDefaultPincode:boolean = true
@ViewChild('closeBtn') closeBtn!:ElementRef

verifyPincode() {
  const endPoint = "pin-code-details?"+"pincode="+this.pincode
  this.http.getDataFromServer(endPoint).subscribe((el:any)=>{
  if(el && el.length>0){
    this.pincodeDetails=el[0]
    this.displayErrorMsg = false
    this.showDefaultPincode = false
    this.closeBtn.nativeElement.click()
}else{
  this.displayErrorMsg = true
  this.showDefaultPincode = true
}
  },
    (  error: any)=>{
    console.log(error)
  })
}

  ngOnInit(): void {
  }
  constructor(private http : HttpService){}
 


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 2
      }
    },
    nav: true
  }
}
