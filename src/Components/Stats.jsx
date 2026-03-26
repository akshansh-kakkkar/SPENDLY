import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Stats = ({ expenses = [] }) => {
  const categoryData = {};

  if (!expenses || expenses.length === 0) {
    return (
      <div className="h-[86vh] w-full flex justify-center items-center">
        <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center gap-4 animate-scaleIn">
          <img
            src="/assets/empty.png"
            width={100}
            alt="no data"
            className="opacity-40"
          />
          <p className="text-xl font-medium text-purple-400 poppins">
            No expenses added yet!
          </p>
        </div>
      </div>
    );
  }
  const COLORS = [
    "#7c3aed",
    "#22c55e",
    "#f59e0b",
    "#ef4444",
    "#3b82f6",
    "#ec4899",
    "#14b8a6",
  ];
  expenses.forEach((e) => {
    if (!categoryData[e.category]) {
      categoryData[e.category] = 0;
    }
    categoryData[e.category] += e.amount;
  });

  const data = Object.keys(categoryData).map((key) => ({
    category: key,
    amount: categoryData[key],
  }));
  return (
    <div className="min-h-[86vh] w-full flex flex-col lg:flex-row lg:flex-wrap justify-center items-start gap-6 p-6">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full lg:w-[calc(50%-1.5rem)] min-w-[300px] animate-scaleIn">
        <div className="text-xl font-semibold text-purple-700 mb-6 flex items-center gap-2">
          <span className="w-2 h-6 bg-purple-600 rounded-full"></span>
          Bar Chart
        </div>
        <div className="w-full h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barCategoryGap="10%">
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3e8ff" />
              <XAxis 
                dataKey="category" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#7c3aed', fontSize: 12}}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#7c3aed', fontSize: 12}}
              />
              <Tooltip 
                cursor={{fill: '#f5f3ff'}}
                contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}}
              />
              <Bar
                dataKey="amount"
                radius={[8, 8, 0, 0]}
                barSize={40}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`bar-cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg w-full lg:w-[calc(50%-1.5rem)] min-w-[300px] animate-scaleIn">
        <div className="text-xl font-semibold text-purple-700 mb-6 flex items-center gap-2">
          <span className="w-2 h-6 bg-purple-600 rounded-full"></span>
          Pie Chart
        </div>
        <div className="w-full h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="amount"
                nameKey="category"
                outerRadius="80%"
                innerRadius="50%"
                paddingAngle={5}
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}}
              />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;
