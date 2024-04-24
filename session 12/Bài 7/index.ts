class Account{
    protected accountNumber: string;
    protected balance: number;
    constructor(accountNumber: string, balance: number) {
        this.accountNumber=accountNumber;
        this.balance=balance;
    }
    deposit(amount: number){
        this.balance+=amount;
        console.log(`Tiền gửi ${amount} đến tài khoản ${this.accountNumber}`);
    }
    withdraw(amount: number): void{
        if(amount > this.balance){
            console.log(`TRong tài khoản không đủ tiền`);
            return
        }
        this.balance-=amount;
        console.log(`Ruts tiền ${amount} từ tài khoản ${this.accountNumber}`);
        
        
    }
}
class SavingsAccount extends Account{
    private interestRate: number;
    constructor(accountNumber: string, balance: number, interestRate: number) {
        super(accountNumber, balance)
        this.interestRate=interestRate;
    }
    calculateInterest(): void{
        const monthlyInterest = (this.balance*this.interestRate)/100/12;
    }

}
const savingsAccount = new SavingsAccount("123456", 1000, 0.5);

const monthlyInterest = savingsAccount.calculateInterest();
console.log(`Lãi hàng tháng cho tài khoản là ${savingsAccount}: ${monthlyInterest}`);

savingsAccount.deposit(500);

const newMonthlyInterest = savingsAccount.calculateInterest();
console.log(`Lãi mới hàng tháng cho tài khoản là: ${savingsAccount}: ${newMonthlyInterest}`);




