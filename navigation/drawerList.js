import SalesReportScreen from "../screens/Reports/SaleReportScreen";
import PurchaseReportScreen from "../screens/Reports/PurchaseReportScreen";

// import TestScreen from "../screens/TestScreen";
// import ProductBrandsScreen from "../screens/products/ProductBrandsScreen";
// import ProductBrandsDialog from "../screens/products/ProductBrandDialog";
// import CurrencyFactorList from "../screens/currency/CurrencyFactorsList";
// import CurrencyFactorsDialog from "../screens/currency/CurrencyFactorsDialog";
// import CurrencyListScreen from "../screens/currency/CurrencyListPage";
// import CurrencyDialog from "../screens/currency/CurrencyDialog";
// import BundleDialog from "../screens/products/BundleDialog";
// import BundleListScreen from "../screens/products/BundleListScreen";

export const menuItems = [
  {
    type: "command",
    screen: "HomeScreen",
    label: "Home",
    icon: "home"
    // group: TopNavGroup.LIST,
  },
  {
    type: "command",
    screen: "SalesReport",
    label: "Sales Report",
    // group: TopNavGroup.LIST,
    column: 2
  },
  {
    type: "command",
    screen: "PurchaseReport",
    label: "Purchase Report",
    // group: TopNavGroup.LIST,
    column: 2
  }
  // {
  //   type: "command",
  //   screen: "ProductBrands",
  //   label: "ProductBrands",
  //   // group: TopNavGroup.LIST,
  //   column: 2
  // },
  // {
  //   type: "command",
  //   screen: "CurrencyListScreen",
  //   label: "Currencies",
  //   // group: TopNavGroup.LIST,
  //   column: 2
  // },
  // {
  //   type: "command",
  //   screen: "CurrencyFactor",
  //   label: "Currency Factor",
  //   // group: TopNavGroup.LIST,
  //   column: 2
  // },
  // {
  //   type: "command",
  //   screen: "BundleListScreen",
  //   label: "Product Bundle",
  //   // group: TopNavGroup.LIST,
  //   column: 2
  // },
  // {
  //   type: "command",
  //   screen: "Test",
  //   label: "Test"
  //   // group: TopNavGroup.REPORTS
  // }
];

export default {
  SalesReport: {
    screen: SalesReportScreen
  },
  PurchaseReport: {
    screen: PurchaseReportScreen
  }

  // ProductBrands: {
  //   screen: ProductBrandsScreen
  // },
  // ProductBrandsDialog: {
  //   screen: ProductBrandsDialog
  // },
  // CurrencyListScreen: {
  //   screen: CurrencyListScreen
  // },
  // CurrencyDialog: {
  //   screen: CurrencyDialog
  // },
  // CurrencyFactor: {
  //   screen: CurrencyFactorList
  // },
  // CurrencyFactorsDialog: {
  //   screen: CurrencyFactorsDialog
  // },
  // BundleListScreen: {
  //   screen: BundleListScreen
  // },
  // BundleDialog: {
  //   screen: BundleDialog
  // },
  // Test: {
  //   screen: TestScreen
  // },
};
