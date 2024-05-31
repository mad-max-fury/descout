import { Typography } from "@utils/typography";
import { Button } from "@utils/button";
import Cloud from "@assets/cloud";
import Trash from "@assets/trash";
import Profile from "@assets/profile";
import { Input } from "@utils/input";
import Upload from "@assets/upload";
import { TableData } from "@mock/index";
import TableComp from "@utils/table";
import columns from "@utils/table/tableColumn";

function Update() {
  return (
    <div className="">
      <div className="bg-[#000000] px-[48px]  py-[20px] mmd:px-[24px]">
        <div className="mb-5">
          <Typography
            variant="h1"
            color="white"
            fontWeight="bold"
            font="CabinetGrotesk"
          >
            Company Profile
          </Typography>
        </div>
        <div className="max-w-[548px] mb-5">
          <Typography variant="body-r" color="star5" fontWeight="regular">
            We are connected with the top ride-hailing companies in africa. Some
            of these companies include: Bolt, LagRide, Rider, Shuttlers, Uber
            and many more.
          </Typography>
        </div>
      </div>
      <div className="px-[48px] py-[20px] mmd:px-[24px]">
        <div className="flex flex-col gap-10">
          <div className="border-b">
            <div className="flex gap-2 mxxxs:items-center">
              <div className="border mxxxs:hidden">
                <Profile />
              </div>
              <div className="mxxxs:block sm:hidden mxxs:hidden mxxxs:h-full">
                <img src="/Shape.png" alt="bro" className="mxxxs:h-full"/>
              </div>
              <div className="">
                <div className="pb-4 pt-2 mxxxs:pb-2">
                  <Typography
                    variant="body-s"
                    font="CabinetGrotesk"
                    fontWeight="bold"
                    color="wood9"
                  >
                    Company’s Logo
                  </Typography>
                </div>
                <div className="flex gap-4 mmd:flex-col mmd:gap-2">
                  <Button
                    leftIcon={<Cloud />}
                    children="Upload Logo"
                    customClassName="border"
                    size="small"
                  />
                  <Button
                    leftIcon={<Trash />}
                    children="Delete Logo"
                    customClassName="border"
                    size="small"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4 pt-5 pb-10 mmd:flex-col mmd:gap-6">
              <Input
                name="Company Name"
                label="Company Name"
                bgcolor="bg-[#F9FAFB]"
                placeholder="Shuttlers NG"
                labelCustomClassName="text-woodsmoke-950 font-bold"
              />
              <Input
                name="Company Phone Contact"
                label="Company Phone Contact"
                placeholder="+2349091234567"
                bgcolor="bg-[#F9FAFB]"
                labelCustomClassName="text-woodsmoke-950 font-bold"
              />
              <Input
                name="Company Email Contact"
                label="Company Email Contact"
                placeholder="hello@shuttlers.ng"
                bgcolor="bg-[#F9FAFB]"
                labelCustomClassName="text-woodsmoke-950 font-bold"
              />
              <Input
                name="Company Address"
                label="Company Address"
                bgcolor="bg-[#F9FAFB]"
                placeholder="No 22, Silicon Avenue, Ikotun, Lagos, Nigeria"
                labelCustomClassName="text-woodsmoke-950 font-bold"
              />
            </div>
          </div>
          <div className="flex border gap-4 p-4 mmd:flex-col mmd:gap-16 ">
            <div className=" max-h-[122px] flex flex-col justify-between mmd:gap-4">
              <div>
                <Typography variant="body-r" color="wood9" fontWeight="bold">
                  Team Members
                </Typography>
              </div>
              <div className="md:max-w-[231px]">
                <Typography variant="body-r" color="star5" fontWeight="medium">
                  Invite your colleagues to work  faster and collaborate
                  together.
                </Typography>
              </div>
              <div className="flex gap-4 mxxxs:flex-col">
                <Button
                  leftIcon={<Upload />}
                  children="Export CSV"
                  customClassName="border"
                 
                />
                <Button
                 
                  children="Invite New Members"
                  customClassName="bg-[#654EF2] text-white"
                />
              </div>
            </div>
            <div className="flex-grow">
              <TableComp columns={columns} data={TableData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update;
