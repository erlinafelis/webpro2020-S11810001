/* 
        Exercise 2

*/

let account = {
        //1
        name: "Jhon",
        expenses: [],
        //2
        addExpenses: function(description, amount){
            this.expenses.push({"description": description, "amount": amount});
        },
        //3
        getAccountSummary(){
          let sum = 0;
          this.expenses.forEach((item)=>{
            sum+=item.amount;
          })
          return `${sum}`;
        }
    };
    //4
    account.addExpenses('Beli Makanan', 15000);
    account.addExpenses('Ongkos', 30000);
    account.addExpenses('Beli Tas',98000);
    account.addExpenses('beli aqua',12000);
    console.log(`Total pengeluaran ${account.name} adalah sebanyak Rp. ${account.getAccountSummary()}`);