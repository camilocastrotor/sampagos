import { Component } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';


@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css'],
  standalone: true,
  imports: [FormsModule, DropdownModule], // Agrega FormsModule aquí

})
export class PaymentFormComponent {
  amount: number | null = null;
  paymentMethod: string = '';
  paymentMethods = [
    { label: 'Tarjeta de Crédito', value: 'creditCard' },
    { label: 'PayPal', value: 'paypal' },
  ];

  constructor(private paymentService: PaymentService) {}

  handlePayment(): void {
    if (this.amount && this.paymentMethod) {
      const data = { amount: this.amount, paymentMethod: this.paymentMethod };
      this.paymentService.createPayment(data).subscribe({
        next: (response) => console.log('Pago exitoso:', response),
        error: (err) => console.error('Error en el pago:', err),
      });
    }
  }
}
