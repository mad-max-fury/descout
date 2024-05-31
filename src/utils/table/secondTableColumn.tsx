import { ColumnDef } from "@tanstack/react-table";
// import { ITransaction, ITransactions } from "@mock/recentTransactions";
// import { formatCurrency, generateColors } from "../../../utils/helpers";
// import { Typography } from "@uiElements/Typography";
// import Complete from "@assets/svgs/Complete";
// import Rejected from "@assets/svgs/Rejected";
// import Pending from "@assets/svgs/Pending";
// import { mainTableProps, tableProps } from "@mock/index";
import { secondTableProps} from "@mock/secondmock";
import Avatar from "@assets/Avatar";
import { Typography } from "@utils/typography";

// {
//   productName: "Rhubarb",
//   TransactionID: "#E230A90",
//   Date: "2/22/2022",
//   Amount: "Krona",
//   Status: "Completed"
// },
const secondcolumns: ColumnDef<Partial<secondTableProps>>[] = [
  {
    accessorKey: "document",
    header: () => (
      <div className="text-start pl-6 text-[#1A1A1A] text-body-s font-medium">
        Name
      </div>
    ),
    cell: ({ row }: any) => {
      const { document, format } = row.original;
      return (
        <div className="flex items-center gap-4 ">
          <div className="mxxs:hidden">
            <Avatar />
          </div>
          <div>
            <Typography
              variant="caption-s"
              color="wood10"
              fontWeight="bold"
              customClassName="mmd:text-[#1A1A1A] mmd:text-caption-v mxxs:text-caption-v mmd:font-bold"
            >
              {document}
            </Typography>
            <Typography
              variant="caption-s"
              color="star5"
              font="CabinetGrotesk"
              fontWeight="light"
            >
              {format}
            </Typography>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "timestampUploaded",
    header: () => (
      <div className="text-start text-[#1A1A1A] text-body-s font-medium mmd:hidden">
        Date & Time Uploaded
      </div>
    ),
    cell: ({ row }: any) => {
      const { timestampUploaded } = row.original;
      return (
        <div className="mmd:hidden">
          <Typography variant="caption-s" color="wood10" fontWeight="light">
            {timestampUploaded}
          </Typography>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => (
      <div className="text-start mxxs:text-center text-[#1A1A1A] text-body-s font-medium">
        Status
      </div>
    ),
    cell: ({ row }: any) => {
      const { status } = row.original;
      const backGround = (stuff: any) => {
        if (stuff === "Approved") {
          return (
            <div className="bg-[#E7F6EC] text-[#0F973D] px-[12px] py-[4px] rounded-[12px] flex justify-center items-center w-[85px] ">
              {stuff}
            </div>
          );
        } else {
          return (
            <div>
              <div className="bg-[#FBEAE9] text-[#9E0A05] px-[12px] py-[4px] rounded-[12px] flex justify-center items-center w-[85px]">
                {stuff}
              </div>
            </div>
          );
        }
      };
      return <div className="font-bold">{backGround(status)}</div>;
    },
  },
];

export default secondcolumns;
