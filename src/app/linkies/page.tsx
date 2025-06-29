import LinkiesTable from "@/components/LinkiesTable/LinkiesTable";
import { FormControlLabel, FormGroup, Switch, Typography } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Linkies"
};

const Home = () => {
  return (
    <>
      <Typography fontSize={40}>Linkies</Typography>
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked color="error" />} label="Show offline" />
        <FormControlLabel control={<Switch defaultChecked color="warning" />} label="Show unknown" />
      </FormGroup>
      <LinkiesTable />
    </>
  );
}

export default Home;