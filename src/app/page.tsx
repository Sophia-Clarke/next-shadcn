import * as React from "react";
import CustomDialog from "@/components/custom-modal/CustomDialog";
import CustomMenu from "@/components/custom-menu/CustomMenu";
import CustomHover from "@/components/custom-hover/CustomHover";

const Home = () => {
  return (
    <div className="grid gap-6">
      <CustomDialog />
      <CustomMenu />
      <CustomHover />
    </div>
  );
};

export default Home;
