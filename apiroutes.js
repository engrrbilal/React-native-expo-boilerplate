// export const host =
//   process.env.NODE_ENV === "production"
//     ? window.location.protocol +
//       "//" +
//       window.location.hostname +
//       ":" +
//       window.location.port
//     : window.location.protocol + "//192.168.100.56:9000";
export const host = "http://192.168.100.56:9000";
export const userAccess = "/core/access/user";
export const loginElements = "/core/sys/elements";
export const license = "/core/sys/license";
export const login = "/core/session";
export const sessions = "/core/sessions";
export const session = host + "/core/session";
export const users = "/core/users";
export const groups = "/core/groups";
export const prefs = "/core/prefs";
export const sysPrefs = "/core/prefs/sys";
export const userPrefs = "/core/prefs/user";
export const saveAccess = "/core/access";
export const principals = "/core/access/principals";
export const permissionByGroup = "/core/access/group/";
export const reportContributions = "/core/report/contributions";
export const generateReport = "/core/report/generate/";
export const getReportPage = "/core/report/";
export const reportDownload = "/core/report/download";
export const reportPageCount = "/core/report/count/";
export const productInfo = "/core/sys/product";

export const units = "/gl/units";
export const glUsers = "/gl/users";
export const unitFactors = "/gl/unit-factors";
export const companies = "/gl/companies";
export const branches = "/gl/branches";
export const userBranchSessionInfo = "/gl/user-branch-session-info";
export const accounts = "/gl/accounts";
export const accountTypes = "/gl/account-types";
export const currencies = "/gl/currencies";
export const currencyFactors = "/gl/currency-factors";
export const cashBankAccounts = "/gl/accounts/accountType/4";
export const partyTypes = "/gl/party-types";
export const partyCategories = "/gl/party-categories";
export const parties = "/gl/parties";
export const vouchers = "/gl/vouchers";
export const vouchersItems = "/gl/vouchers/items";
export const voucherTypes = "/gl/voucher-types";
export const glSysPrefs = "/core/prefs/sys/com.lyra.gl";
//export const payments = '/gl/payments';
export const paymentsMode = "/gl/payment-modes";
export const jobs = "/gl/jobs";
export const ledgerEntries = "/gl/ledger-entries";
export const trialBalance = "/gl/trial-balance";
export const dashBoardProfiAndLost = "gl/dashboard/profit-and-loss";
export const dashBoardTopExpense = "gl/dashboard/top-expense-accounts";
export const dashBoardCashAndBank = "gl/dashboard/cash-and-bank";
export const dashBoardCustomerBalances = "gl/dashboard/party-balances/customer";
export const dashBoardSupplierBalances = "gl/dashboard/party-balances/supplier";
export const partyBalances = "/gl/party-balances";
export const customerBalances = "/gl/party-balances/customer";
export const supplierBalances = "/gl/party-balances/supplier";
export const deposits = "/gl/deposits";
export const depositItems = "/gl/deposits/items";
//export const prefixAndSequencePrefs  = '/core/prefs/sys/com.lyra.gl.prefixAndSequencePrefs';
export const taxes = "/gl/taxes";
export const rateTypes = "/gl/rate-types";
export const taxNatures = "/gl/tax-natures";
export const employees = "/gl/employees";
export const ledgerEntriesToggleLock = "gl/ledger-entries/toggle-lock";
export const lockStatus = "gl/ledger-entries/lock-status";
//export const pdcRealization = '/gl/payments/pdc';
export const search = "/gl/search";
export const searchTransTypes = "gl/search/trans-types";
export const area = "/gl/areas";
export const revenueCenter = "/gl/revenue-centers";
export const rcClass = "/gl/classes";
export const expense = "/gl/expenses";
export const distribution = "/gl/ledger-entries/distribution";
export const partyChargeLevel = "/ledgermax/charge-levels/party";
export const accountManager = "/gl/account-managers";
export const periods = "/gl/periods";
export const narrations = "/gl/narrations";
export const gTransType = "/gl/attachment-trans-types";
export const taxTypes = "/gl/tax-types";
export const glPeriodType = "/gl/period-types";

export const products = "/ledgermax/products";
export const seralizeProduct = "/ledgermax/transactions/serial-nos";
export const productCategory = "/ledgermax/product/categories";
export const productBrand = "/ledgermax/product/brands";
export const productChargeLevel = "/ledgermax/charge-levels/product";
export const productCategoryChargeLevel =
  "/ledgermax/charge-levels/product-category";
export const locations = "/ledgermax/locations";
export const fixedAssetsItems = "/ledgermax/fixed-assets";
export const productTypes = "/ledgermax/product-types";
export const costingMethods = "/ledgermax/costing-methods";
export const salesTransactions = "/ledgermax/transactions/sales";
export const purchaseTransactions = "/ledgermax/transactions/purchases";
export const invoice = "/ledgermax/transactions/invoice";
export const bill = "/ledgermax/transactions/bill";
export const refundInvoice = "/ledgermax/transactions/refund-invoice";
export const refundBill = "/ledgermax/transactions/refund-bill";
export const quotation = "/ledgermax/transactions/quotation";
export const purchaseRequisition =
  "/ledgermax/transactions/purchase-requisition";
export const purchaseOrder = "/ledgermax/transactions/purchase-order";
export const saleOrder = "/ledgermax/transactions/sale-order";
export const transAllocation = "/ledgermax/transactions/allocations";
export const fixedAssetsPurchase = "/ledgermax/transactions/quotation";
export const deliveryNote = "/ledgermax/transactions/delivery-note";
export const returnDeliveryNote =
  "/ledgermax/transactions/return-delivery-note";
export const goodsReceivedNote = "/ledgermax/transactions/goods-received-note";
export const returnGoodsReceivedNote =
  "/ledgermax/transactions/return-goods-received-note";
export const fixedAssetsSale = "/ledgermax/transactions/quotation";
export const advanceInvoice = "/ledgermax/transactions/advance-invoice";
export const arrearsInvoice = "/ledgermax/transactions/arrears-invoice";
export const arrearsBill = "/ledgermax/transactions/arrears-bill";
export const advanceBill = "/ledgermax/transactions/advance-bill";

export const allocations = "/ledgermax/allocations";
export const paymentAllocation = "/ledgermax/allocations/payment";
export const productAvailStock = "/ledgermax/stocks";
export const productAvgCost = "/ledgermax/stocks/avg-cost";
export const stockAdjustment = "/ledgermax/stocks/adjustments";
export const purchaseOrdersAvailbleStock = "/ledgermax/purchase-orders";
export const saleOrdersAvailbleStock = "/ledgermax/sale-orders";
export const dnAvailbleStock = "/ledgermax/delivery-notes";
export const grnAvailbleStock = "/ledgermax/goods-received-notes";
export const convertQuotation = "/ledgermax/transactions/convert-quotation";
export const dashBoardSalesChart = "/ledgermax/dashboard/sales-chart";
export const salesPrefs = "/core/prefs/sys/com.lyra.ledgermax.salesPrefs";
export const defaultsPrefs = "/core/prefs/sys/com.lyra.ledgermax.defaultsPrefs";
export const notificationPrefs =
  "/core/prefs/sys/com.lyra.ledgermax.notificationPrefs";
export const prefixAndSequencePrefs =
  "/core/prefs/sys/com.lyra.ledgermax.prefixAndSequencePrefs";
export const recentTrans = "/ledgermax/recent-transactions";
export const timeSheet = "/ledgermax/timesheets";
export const billableTimeSheet = "/ledgermax/billable-timesheets";
export const productAssemblies = "/ledgermax/products/assemblies";
export const workOrders = "/ledgermax/work-orders";
export const attendance = "/payroll/attendance";
export const transCharges = "/ledgermax/charges";
export const transChargesNature = "/ledgermax/charge-natures";
export const transFormats = "/ledgermax/transaction-formats";
export const recurTrans = "/ledgermax/recur-trans-schedules";
export const transaction = "/ledgermax/transactions";
export const templates = "/ledgermax/templates";
export const salesRealization = "/ledgermax/sales-realizations";
export const purchaseRealization = "/ledgermax/purchase-realizations";
export const salesPerson = "/ledgermax/sale-persons";
export const transChargeLevel = "/ledgermax/product-charge-levels"; ///party/:partyId/products/:productIds
export const lotBatchNo = "/ledgermax/batches";
export const customField = "/ledgermax/custom-fields";
export const customFieldTypes = "/ledgermax/custom-field-types";
export const manifest = "/ledgermax/manifest";
export const manifestTypes = "/ledgermax/manifest-types";
export const searByTransNo = "/ledgermax/transactions/transNo";
export const bundles = "/ledgermax/bundles";
export const fixedAssetsAssignment = "/ledgermax/fixed-asset-client-assignment";
export const assetsLastValue =
  "/ledgermax/client-fixed-asset-last-value/fixedAssetWithPartyId";
export const reOrderNotification =
  "/ledgermax/notifications/products-to-reorder";
export const importTransaction = "/ledgermax/transactions/import-from-file";
export const attributes = "/ledgermax/attributes";
export const productAttributes = "/ledgermax/products/attributes";
export const paymentAllocationDetails = "/ledgermax/payments/allocations";
export const dueTransaction = "/ledgermax/transactions/dueDays";
export const taxPayment = "/ledgermax/tax-payments";
export const taxLibility = "/ledgermax/tax-payments/liability";
