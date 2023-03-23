import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-top-deals-by-category',
  templateUrl: './top-deals-by-category.component.html',
  styleUrls: ['./top-deals-by-category.component.scss'],
})
export class TopDealsByCategoryComponent implements OnInit {
  topDealsByCategory: any = [];
  constructor(private http: HttpService , private cart : CartService) {}
  ngOnInit(): void {
    this.getTopDealsByCtegory();
  }
  getTopDealsByCtegory() {
    this.http.getDataFromServer("top-deals-by-category").subscribe(
      (el: any) => {
        if (el && el.length > 0) {
          this.topDealsByCategory = el;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  addToCart(item:any){
    this.cart.addItemToCart(item)
      
    }
}
