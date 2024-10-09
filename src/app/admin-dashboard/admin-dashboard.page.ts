import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {
  orders: { customerNumber: string, items: { name: string, price: number, quantity: number }[] }[] = [];

  constructor(private orderService: OrderService) {}

  deleteOrder(index: number) {
    this.orders.splice(index, 1);
  }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
  }
}

