
import { Typography } from "@utils/typography";
import Notify from "@assets/notify";

function NotLoader() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <Notify />
        </div>
        <div>
          <Typography variant="h2" align="center" color="star5">
            You are yet to search for a <br /> driver’s information
          </Typography>
        </div>
      </div>
    </>
  );
}

export default NotLoader;
