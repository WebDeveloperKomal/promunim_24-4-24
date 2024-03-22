export class CustomerDocs {
    loan = [{
        emi: 0.0,
        bank: "",
        loanType: "",
        outstandingAmount: 0.0,
        endDate: "",
        documentname: "",
        id: 0,
        currIntrRate: 0.0,
        startDate: ""
    }];
    investment = [
        {
            premiumAmount: 0.0,
            mode: "",
            nameOfInvestor: "",
            dateOfMaturity: "",
            policyNo: "",
            documentname: "",
            id: 0,
            investmentCompany: ""
        }
    ];
    tax = [
        {
            fromDate: "",
            amount: 0.0,
            toDate: "",
            description: "",
            documentname: "",
            id: 0,
            taxType: ""
        }
    ];
    vehicle = [
        {
            insurance: "",
            goal: "",
            purpose: "",
            description: "",
            documentname: "",
            id: 0,
            vehicleType: "",
            currentValue: 0.0
        }
    ];
    bulkDocument = [
        {
            insertTime: "",
            accountNo: 0,
            bulkDocument: "",
            id: 0
        }
    ];
    payInSlips = [
        {
            fromDate: "",
            toDate: "",
            description: "",
            documentname: "",
            id: 0
        }
    ];
    chequeBook = [
        {
            fromDate: "",
            toDate: "",
            description: "",
            documentname: "",
            id: 0
        }
    ];
    expensesDtl = [
        {
            fromDate: "",
            toDate: "",
            description: "",
            documentname: "",
            id: 0
        }
    ];

    purchaseInvoice = [
        {
            fromDate: "",
            toDate: "",
            description: "",
            documentname: "",
            id: 0
        }
    ];
    salesInvoice = [
        {
            fromDate: "",
            toDate: "",
            description: "",
            documentname: "",
            id: 0
        }
    ];
    bankStatement = [
        {
            fromDate: "",
            toDate: "",
            description: "",
            bankAccountNo: 0,
            bankName: "",
            documentname: "",
            id: 0
        }
    ];
}