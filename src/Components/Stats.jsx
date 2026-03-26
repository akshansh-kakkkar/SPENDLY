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
    <div className="h-[86vh] w-full flex">
      <div className="bg-white p-4 rounded-xl shadow m-6">
        <div className="text-xl font-semibold text-purple-700 mb-3">
          Bar Chart
        </div>
        <div className="w-[550px] h-[400px]">
          <ResponsiveContainer>
            <BarChart data={data} barCategoryGap="5%">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="amount"
                radius={[12, 12, 0, 0]}
                barSize={35}
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
      <div className="bg-white p-4 rounded-xl shadow m-6">
        <div className="text-xl font-semibold text-purple-700 mb-3">
          Pie Chart
        </div>
        <div className="w-[550px] h-[400px]">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="amount"
                nameKey="category"
                outerRadius={110}
                innerRadius={50}
                paddingAngle={3}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;
