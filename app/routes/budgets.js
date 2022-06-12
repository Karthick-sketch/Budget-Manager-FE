import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    async model() {
        let response = await fetch('/budgets.json');
        let { data } = await response.json();

        let expense = 0.0, income = 0.0;

        for (let datum of data) {
            if (datum.budget_type === "expense") {
                expense += datum.amount;
            } else if (datum.budget_type === "income") {
                income += datum.amount;
            }
        }

        let balance = income-expense;

        return [
            {type : "Expense", amount : `-₹${expense}`, number_type : "negative"},
            {type : "Income", amount : `+₹${income}`, number_type : "positive"},
            {
                type : "Balance",
                amount : (balance < 0 ? `-₹${-1*balance}` : `+₹${balance}`),
                number_type : (balance < 0 ? "negative" : "positvie")
            }
        ];
    }
}
