import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  navBarItems = [
    "Medical Care",
    "Groceries",
    "Best Sellers",
    "Amazon Basics",
    "Prime",
    "New Releases",
    "Music",
    "Customer Service",
    "Todays Deal",
    "Registry",
    "Amazon Home",
    "Books",
    "Pharmacy",
    "Fasion",
  ];
  boxItems1 = [
    {
      title: "Free International Returns",
      image: "/assets/images/box1-1.jpg"
    },
    {
      title: "Lunar New Year",
      image: "/assets/images/box1-2.jpg"
    },
    {
      title: "Toy Under $25",
      image: "/assets/images/box1-3.jpg"
    },
    {
      title: "Deals in PC",
      image: "/assets/images/box1-4.jpg"
    }
  ];
  boxItems2 = [
    {
      title: "Grooming Products",
      image: "/assets/images/box2-1.jpg"
    },
    {
      title: "Latest Devices",
      image: "/assets/images/box2-2.jpg"
    },
    {
      title: "Pets Food",
      image: "/assets/images/box2-3.jpg"
    },
    {
      title: "Fashion Mart",
      image: "/assets/images/box2-4.jpg"
    }
  ];
  boxItems3 = [
    {
      title: "Stationary",
      image: "/assets/images/box3-1.jpg"
    },
    {
      title: "Laptops for Study",
      image: "/assets/images/box3-2.jpg"
    },
    {
      title: "Office chairs",
      image: "/assets/images/box3-3.jpg"
    },
    {
      title: "Gaming monitor",
      image: "/assets/images/box3-4.jpg"
    }
  ];
  bestSeller = [
    "/assets/images/product1-1.jpg",
    "/assets/images/product1-2.jpg",
    "/assets/images/product1-3.jpg",
    "/assets/images/product1-4.jpg",
    // "/assets/images/product1-5.jpg",
    "/assets/images/product1-6.jpg",
    "/assets/images/product1-7.jpg",
    "/assets/images/product1-8.jpg",
    "/assets/images/product1-9.jpg",
    "/assets/images/product1-10.jpg"
  ];
  deals = [
    {image: "/assets/images/product2-1.jpg", price: "$4", offer: "50% off", desc: "Lorem, ipsum dolor sit amet"},
    {image: "/assets/images/product2-2.jpg", price: "$4", offer: "50% off", desc: "Lorem, ipsum dolor sit amet"},
    {image: "/assets/images/product2-3.jpg", price: "$4", offer: "50% off", desc: "Lorem, ipsum dolor sit amet"},{image: "/assets/images/product2-4.jpg", price: "$4", offer: "50% off", desc: "Lorem, ipsum dolor sit amet"},{image: "/assets/images/product2-5.jpg", price: "$4", offer: "50% off", desc: "Lorem, ipsum dolor sit amet"},{image: "/assets/images/product2-6.jpg", price: "$4", offer: "50% off", desc: "Lorem, ipsum dolor sit amet"},{image: "/assets/images/product2-7.jpg", price: "$4", offer: "50% off", desc: "Lorem, ipsum dolor sit amet"},{image: "/assets/images/product2-8.jpg", price: "$4", offer: "50% off", desc: "Lorem, ipsum dolor sit amet"},{image: "/assets/images/product2-9.jpg", price: "$4", offer: "50% off", desc: "Lorem, ipsum dolor sit amet"},{image: "/assets/images/product2-10.jpg", price: "$4", offer: "50% off", desc: "Lorem, ipsum dolor sit amet"},{image: "/assets/images/product2-11.jpg", price: "$4", offer: "50% off", desc: "Lorem, ipsum dolor sit amet"},{image: "/assets/images/product2-12.jpg", price: "$4", offer: "50% off", desc: "Lorem, ipsum dolor sit amet"},
  ]
}
