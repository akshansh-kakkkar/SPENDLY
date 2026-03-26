import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Title", "Category", "Date", "Amount", "Actions"];
export function TableWithoutBorder({ expenses = [] }) {
  return (
    <Card className=" w-[80vw] h-[40vh] overflow-scroll">
      <table className="w-full min-w-max table-auto border-collapse">
        <thead className="border-b border-gray-300">
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="p-4 pt-10">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold leading-none"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-center">
          {expenses.map((exp) => {
            return (
              <tr key={exp.id}>
                <td className="p-4 border-b border-gray-300">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold"
                  >
                    {exp.title}
                  </Typography>
                </td>
                <td className="p-4 border-l  border-b border-gray-300">
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {exp.category}
                  </Typography>
                </td>
                <td className="p-4 border-b border-l border-gray-300">
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {exp.date}
                  </Typography>
                </td>
                <td className="p-4 border-b border-l border-gray-300">
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    ${exp.amount}
                  </Typography>
                </td>
                <td className="p-4 border-b border-l border-gray-300">
                  <div className="flex justify-around items-center gap-2">
                    <img src="/assets/edit.svg" alt="" width={30} />
                    <img src="/assets/bin.png" width={30} alt="" />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}