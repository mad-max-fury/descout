import { ColumnDef } from "@tanstack/react-table";
// import { ITransaction, ITransactions } from "@mock/recentTransactions";
// import { formatCurrency, generateColors } from "../../../utils/helpers";
// import { Typography } from "@uiElements/Typography";
// import Complete from "@assets/svgs/Complete";
// import Rejected from "@assets/svgs/Rejected";
// import Pending from "@assets/svgs/Pending";
import {tableProps } from "@mock/index";
import { Typography } from "@utils/typography";
import { Button } from "@utils/button";
import Trash from "@assets/trash";
import Note from "@assets/note";


const columns: ColumnDef<Partial<tableProps>>[] = [
  {
    accessorKey: "deleteCar",
    header: () => <div className="text-start pl-6 mxxs:hidden" >Delete</div>,
    cell: () => {
    
      return (
        <div className="mxxs:hidden">
          <Button
            leftIcon={<Trash />}
            size="tiny"
            customClassName=""
            fit
          />
        </div>
      );
    },
  },
  {
    accessorKey: "editColor",
    header: () => <div className="text-start mxxs:hidden">Edit</div>,
    cell: () => {
   
      return (
        <div className="mxxs:hidden">
          <Button
            leftIcon={<Note />}
            size="tiny"
            customClassName="border"
            fit
          />
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: () => <div className="text-start mxxs:font-bold">Name</div>,
    cell: ({ row }: any) => {
      const data = row.original;
      return (
        <div className="flex gap-4 items-center">
          <div>
            <img
              src={data.image}
              style={{ borderRadius: "200px", width: "40px", height: "40px" }}
            />
          </div>
          <div>
            <Typography
              variant="caption-s"
              color="wood9"
              font="CabinetGrotesk"
              fontWeight="bold"
            >
              {data.name}
            </Typography>
            <Typography variant="caption-s" color="star5" fontWeight="regular">
              {data.email}
            </Typography>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "dateAdded",
    header: () => <div className="text-start mxxs:hidden">Date added</div>,
    cell: ({ row }: any) => {
      const data = row.original;
      return <div className="mxxs:hidden"><Typography variant="body-s">{data.dateAdded}</Typography></div>;
    },
  },
  {
    accessorKey: "role",
    header: () => <div className="text-start px-4 mxxs:hidden">Role</div>,
    cell: ({ row }: any) => {
      const transaction = row.original;
      const { role } = transaction;
      const ExactColor = (text: string) => {
        if (text === "Admin") {
          return <div className={`bg-[#E3EFFC] text-#1671D9] px-[12px] py-[4px] rounded-[12px] flex justify-center items-center w-[85px] mxxs:hidden`}>{text}</div>;
        } else if (text === "Auditor") {
          return <div className={`bg-[#E7F6EC] text-[#0F973D] px-[12px] py-[4px] rounded-[12px] flex justify-center items-center w-[85px] mxxs:hidden`}>{text}</div>;
        } else {
          return <div className={`text-[#F3A218] bg-[#FEF6E7]  px-[12px] py-[4px] rounded-[12px] flex justify-center items-center w-[85px] mxxs:hidden `}>{text}</div>;
        }
      };
      return <div className="">{ExactColor(role)}</div>;
    },
  },
];

export default columns;
