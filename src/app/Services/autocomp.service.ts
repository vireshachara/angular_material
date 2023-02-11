import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

interface Product {
  pName:string;
  desc:string;
  price:number;
  id? : string;
  date : string;
} 

@Injectable({
  providedIn: 'root'
})
export class AutocompService {

  constructor(private http:HttpClient) { }

  fetchProduct() {
    return this.http.get<{[key: string]: Product}>("https://procadamy-default-rtdb.firebaseio.com/product.json")
    .pipe(map((res)=> {
      const products = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          products.push({...res[key], id : key})
        }
      }
      return products; 
    }))
  }


}
