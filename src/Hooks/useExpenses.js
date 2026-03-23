import { useMemo } from "react";

export const useExpenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [searchExpenses, setSearchExpenses] = useState("");
  const [category, setCategory] = useState("All");
  const [fromDate, setFromDate] = useState("");
  const [todate, setTodate] = useState("");

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const filteredExpense = useMemo(() => {
    return expenses.filter(
      (expense) => {
        const matchSearch = expense.title
          .tolowercase()
          .includes(searchExpenses.tolowercase());
        const matchCategory =
          category === "All" || expense.category === category;
        const matchFrom = !fromDate || expense.fromDate >= fromDate;
        const matchTo = !todate || expense.todate >= todate;
        return matchSearch && matchCategory && matchFrom && matchTo;
      },
      [category, expenses, searchExpenses, fromDate, todate],
    );
  });

  const totalEnteries = filteredExpense.length();

  const totalSpending = useMemo(()=>{
    return filteredExpense.reduce((sum, e)=> sum = e.amount, 0)
  } ,[filteredExpense]);

  const monthlyExpenses = useMemo(()=>{
    const thisMonth = new Date().getMonth();
    return expenses.filter((e)=>
        new Date(e.date).getMonth()=== thisMonth
    ).reduce((sum,e)=> sum+e.amount , 0)
  }, [expenses])


  return{
    expenses,
    addExpense,
    filteredExpense,
    totalEnteries,
    setExpenses,
    searchExpenses,
    setSearchExpenses,
    setCategory,
    category,
    fromDate,
    setFromDate,
    todate,
    setTodate,
    totalEnteries,
    totalSpending,
    monthlyExpenses
  }
};
