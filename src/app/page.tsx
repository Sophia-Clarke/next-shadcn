import * as React from "react";
import CustomDialog from "@/components/custom-modal/CustomDialog";
import CustomMenu from "@/components/custom-menu/CustomMenu";
import CustomHover from "@/components/custom-hover/CustomHover";
import CustomForm from "@/components/custom-form-request/CustomForm";

const Home = () => {
  return (
    <div className="grid gap-6">
      <CustomDialog />
      <CustomMenu />
      <CustomHover />
      <CustomForm />
    </div>
  );
};

export default Home;
