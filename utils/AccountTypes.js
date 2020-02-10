import filter from 'lodash/filter';

const AccountTypes = {
	ACCOUNT_RECEIVABLE: { key: 1, value: 'Account Receivable (A/R)', superType: 'ASSETS', haveOpeningBalance: false },
	INVENTORY: { key: 2, value: 'Inventory', superType: 'ASSETS', haveOpeningBalance: false },
	OTHER_CURRENT_ASSETS: { key: 3, value: 'Other Current Assets', superType: 'ASSETS', haveOpeningBalance: true },
	BANK: { key: 4, value: 'Cash & Bank', superType: 'ASSETS', haveOpeningBalance: true },
	FIXED_ASSESTS: { key: 5, value: 'Fixed Assets', superType: 'ASSETS', haveOpeningBalance: true },
	OTHER_ASSETS: { key: 6, value: 'Other Assets', superType: 'ASSETS', haveOpeningBalance: true },
	ACCOUNT_PAYABLE: { key: 7, value: 'Account Payable (A/P)', superType: 'LIBAILITIES', haveOpeningBalance: false },
	OTHER_CURRENT_LIABILITIES: { key: 8, value: 'Other Current Liabilities', superType: 'LIBAILITIES', haveOpeningBalance: true },
	LONG_TERM_LIBAILITIES: { key: 9, value: 'Long Term Liabilities', superType: 'LIBAILITIES', haveOpeningBalance: true },
	EQUITY: { key: 10, value: 'Equity', superType: 'EQUITY', haveOpeningBalance: true },
	INCOME: { key: 11, value: 'Income', superType: 'INCOME', haveOpeningBalance: false },
	OTHER_INCOME: { key: 12, value: 'Other Income', superType: 'INCOME', haveOpeningBalance: false },
	COST_OF_GOODS_SOLD: { key: 13, value: 'Cost of Goods Sold', superType: 'EXPENSE', haveOpeningBalance: false },
	EXPENSE:{ key: 14, value: 'Expense', superType: 'EXPENSE', haveOpeningBalance: false },
	OTHER_EXPENSE: { key: 15, value: 'Other Expense', superType: 'EXPENSE', haveOpeningBalance: false }
};
export const IncomeAccountTypes = '11,12' ;
export const ExpenseAccountTypes = '13,14,15' ;
export const IncomeAndExpenseAccountTypes = '11,12,13,14,15' ;

export function getAccountType(key) {
	return filter(AccountTypes, {key: key})[0]	
}
export default AccountTypes;			