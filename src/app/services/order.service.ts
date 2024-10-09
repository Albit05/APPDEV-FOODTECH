import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders: { customerNumber: string; items: { name: string, price: number, quantity: number }[] }[] = [];
  private customerCount = 0;

  addOrder(items: { name: string; price: number; quantity: number }[]) {
    this.customerCount++;
    const customerNumber = `Customer #${this.customerCount}`;
    this.orders.push({ customerNumber, items });
  }

  getOrders() {
    return this.orders;
  }
}

