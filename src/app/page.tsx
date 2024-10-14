import * as React from "react";
import CustomDialog from "@/components/custom-modal/CustomDialog";
import CustomMenu from "@/components/custom-menu/CustomMenu";

const Home = () => {
  return (
    <div className="grid gap-6">
      <CustomDialog />
      <CustomMenu />
    </div>
  );
};

export default Home;
