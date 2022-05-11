import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PriceCard';

  priceCardList = [
    {
      id: "1",
      price: "10",
      name: "Free",
      features: [
        {
          title: "10 users included"
        },
        {
          title: "2 GB of storage"
        },
        {
          title: "Email Support"
        },
        {
          title: "Help Center access"
        }
      ]
    },
    {
      id: "2",
      price: "20",
      name: "Plus",
      features: [
        {
          title: "20 users included"
        },
        {
          title: "10 GB of storage"
        },
        {
          title: "Priority email Support"
        },
        {
          title: "Help Center access"
        }
      ]
    },
    {
      id: "3",
      price: "30",
      name: "Pro",
      features: [
        {
          title: "30 users included"
        },
        {
          title: "15 GB of storage"
        },
        {
          title: "Phone and email Support"
        },
        {
          title: "Help Center access"
        }
      ]
    }
  ]
}
