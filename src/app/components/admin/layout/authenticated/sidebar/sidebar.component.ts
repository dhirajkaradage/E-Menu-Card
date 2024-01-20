import { Component } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent {
  sideBarMenus = [
    {
      route: "",
      parentName: "Hotels",
      childs: [
        { name: "Hotel Listing", route: "/admin/hotel/listing" },
        { name: "Add Hotel", route: "/admin/hotel/add" },
      ],
    },
    {
      route: "",
      parentName: "Category",
      childs: [
        { name: "Category Listing", route: "/admin/category/listing" },
        { name: "Add Category", route: "/admin/category/add" },
      ],
    },
    {
      route: "",
      parentName: "Products",
      childs: [
        { name: "Products Listing", route: "/admin/product/listing" },
        { name: "Add Products", route: "/admin/product/add" },
      ],
    },
    {
      route: "",
      parentName: "Orders",
      childs: [
        { name: "Order Listing", route: "/admin/order/listing" },
        { name: "Add Order", route: "/admin/order/add" },
      ],
    },
  ];
  
  openSubmenu(index: number) {
    const submenuList = document.querySelectorAll(".sub-menu");
    for (let i = 0; i < submenuList.length; i++) {
      const submenu = submenuList[i];
      if (index == i) {
        submenu?.classList.toggle("active");
      } else {
        submenu?.classList.remove("active");
      }
    }
  }
}
