import { useState, useMemo } from "react";

export const useExpenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [searchExpenses, setSearchExpenses] = useState("");
  const [category, setCategory] = useState("All");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [budget, setBudget] = useState(2000);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };
  const deleteExpense = (id)=>{
    setExpenses((prev)=> prev.filter((e)=>e.id!==id));
  }
  const editExpense = (updatedExpenses)=>{
    setExpenses((prev)=> prev.map((e)=> e.id === updatedExpenses.id ? updatedExpenses : e))
  }
  const filteredExpense = useMemo(() => {
    return expenses.filter((expense) => {
      const matchSearch = expense.title
        .toLowerCase()
        .includes(searchExpenses.toLowerCase());

      const matchCategory =
        category === "All" || expense.category === category;

      const matchFrom = !fromDate || expense.date >= fromDate;
      const matchTo = !toDate || expense.date <= toDate;

      return matchSearch && matchCategory && matchFrom && matchTo;
    });
  }, [expenses, searchExpenses, category, fromDate, toDate]);

  const totalEntries = filteredExpense.length;

  const totalSpending = useMemo(() => {
    return filteredExpense.reduce((sum, e) => sum + e.amount, 0);
  }, [filteredExpense]);

  const monthlyExpenses = useMemo(() => {
    const thisMonth = new Date().getMonth();

    return expenses
      .filter(
        (e) => new Date(e.date).getMonth() === thisMonth
      )
      .reduce((sum, e) => sum + e.amount, 0);
  }, [expenses]);

  return {
    expenses,
    addExpense,
    filteredExpense,
    totalEntries,
    setExpenses,
    searchExpenses,
    deleteExpense,
    editExpense,
    setSearchExpenses,
    category,
    setCategory,
    fromDate,
    setFromDate,
    toDate,
    setToDate,
    totalSpending,
    monthlyExpenses,
    budget,
    setBudget,
  };
};