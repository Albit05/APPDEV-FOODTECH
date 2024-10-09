import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { OrderService } from '../services/order.service'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.page.html',
  styleUrls: ['./customer-dashboard.page.scss'],
})
export class CustomerDashboardPage implements OnInit {
  quantities: number[] = new Array(22).fill(0);
  orderList: { name: string; price: number; quantity: number; totalPrice: number }[] = [];

  prices: { [key: string]: number } = {
    'FT1 Combo!': 149.00,
    'FT2 Combo!': 249.00,
    'FT3 Combo!': 349.00,
    'FT4 Combo!': 449.00,
    'FT5 Combo!': 549.00,
    'FT6 Combo!': 649.00,
    'FT7 Single!': 749.00,
    'FT8 Single': 849.00,
    'FT9 Single!': 949.00,
    'FT10 Single!': 1049.00,
    'FT11 Single!': 1149.00,
    'FT12 Drink!': 1249.00,
    'FT13 Drink!': 1349.00,
    'FT14 Drink!': 1449.00,
    'FT15 Drink!': 1549.00,
    'FT16 Drink!': 1649.00,
    'FT17 Dessert!': 1749.00,
    'FT18 Dessert!': 1849.00,
    'FT19 Dessert!': 1949.00,
    'FT20 Dessert!': 2049.00,
    'FT21 Dessert!': 2149.00,


    // Add more prices as needed
  };

  selectedButton: string = 'single'; 

  constructor(
    private alertController: AlertController, 
    private orderService: OrderService, 
    private router: Router,
    private toastController: ToastController // Inject ToastController
  ) {}

  ngOnInit() {}

  selectButton(button: string) {
    this.selectedButton = button; 
  }

  increaseQuantity(index: number) {
    this.quantities[index]++; 
  }

  decreaseQuantity(index: number) {
    if (this.quantities[index] > 0) {
      this.quantities[index]--; 
    }
  }

  async addToOrderList(itemName: string, index: number) {
    const quantity = this.quantities[index]; // Get the quantity for the specific item index
    console.log(`Item: ${itemName}, Index: ${index}, Quantity: ${quantity}`); // Log item details

    if (quantity > 0) {
        const price = this.prices[itemName]; // Get the price using itemName
        if (price !== undefined) { // Ensure the price is defined
            const totalPrice = price * quantity; // Calculate the total price for the item
            const orderItem = { name: itemName, price, quantity, totalPrice }; // Include totalPrice

            // Log item being added
            console.log('Adding item:', orderItem);

            this.orderList.push(orderItem); // Add the item to the order list
            console.log('Order List after addition:', this.orderList); // Log current order list

            this.quantities[index] = 0; // Reset the specific quantity after adding to order

            // Optional: Display a success message
            await this.presentToast(`${itemName} added to your order!`);

            // Navigate back to the combo tab
            this.router.navigate(['/tabs/combo-tab']);
        } else {
            console.error('Price for item not found:', itemName); // Log if price not found
        }
    } else {
        const alert = await this.alertController.create({
            header: 'Invalid Quantity',
            message: 'Please select a quantity greater than zero.',
            buttons: ['OK']
        });
        await alert.present(); // Show alert if quantity is invalid
    }
}


  getTotalPrice(): number {
    return this.orderList.reduce((total, item) => total + item.totalPrice, 0);
  }

  async confirmDeleteItem(index: number) {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Do you really want to delete this item from your order list?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteItem(index);
          }
        }
      ]
    });

    await alert.present();
  }

  deleteItem(index: number) {
    this.orderList.splice(index, 1); 
    this.presentToast('Item deleted from order list!'); // Notify user
  }

  async confirmOrder() {
    const totalPrice = this.getTotalPrice(); 
    const alert = await this.alertController.create({
        header: 'Confirm Order',
        message: `Are you sure you want to place your order? Total: $${totalPrice}`,
        buttons: [
            {
                text: 'No',
                role: 'cancel',
                cssClass: 'secondary',
            },
            {
                text: 'Yes',
                handler: () => {
                    this.placeOrder(); // This will add the order only if confirmed
                }
            }
        ]
    });
    
    // Don't call addOrder here to avoid duplication
    await alert.present();
}

placeOrder() {
    this.orderService.addOrder(this.orderList); // Now it will only be called after confirmation
    console.log('Order placed:', this.orderList);
    this.presentToast('Order placed successfully!'); // Notify user
    this.orderList = []; // Clear order list after placing the order
}


  async confirmLogout() {
    const alert = await this.alertController.create({
      header: 'Confirm Logout',
      message: 'Are you sure you want to log out?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Yes',
          handler: () => {
            this.logout(); 
            this.router.navigate(['/admin-customer']);
          }
        }
      ]
    });

    await alert.present();
  }

  logout() {
    console.log('User logged out');
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
