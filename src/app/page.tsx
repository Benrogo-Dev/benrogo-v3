import { Button, Checkbox } from "@mui/material";
import TestBar from "@/components/TestBar/TestBar";
import { lime } from "@mui/material/colors";

const Home = () => {
  return (
    <>
      <br/>
      <div style={{
        display: "grid",
        gridTemplateRows: "repeat(12, 4px)",
        gridTemplateColumns: "repeat(auto-fill, 100px)",
        gridAutoFlow: "column",
        gap: 20
      }}>
        <TestBar color="scarlet-100"></TestBar>
        <TestBar color="scarlet-200"></TestBar>
        <TestBar color="scarlet-300"></TestBar>
        <TestBar color="scarlet-400"></TestBar>
        <TestBar color="scarlet-500"></TestBar>
        <TestBar color="scarlet-600"></TestBar>
        <TestBar color="scarlet-100" neon></TestBar>
        <TestBar color="scarlet-200" neon></TestBar>
        <TestBar color="scarlet-300" neon></TestBar>
        <TestBar color="scarlet-400" neon></TestBar>
        <TestBar color="scarlet-500" neon></TestBar>
        <TestBar color="scarlet-600" neon></TestBar>
        <TestBar color="orange-100"></TestBar>
        <TestBar color="orange-200"></TestBar>
        <TestBar color="orange-300"></TestBar>
        <TestBar color="orange-400"></TestBar>
        <TestBar color="orange-500"></TestBar>
        <TestBar color="orange-600"></TestBar>
        <TestBar color="orange-100" neon></TestBar>
        <TestBar color="orange-200" neon></TestBar>
        <TestBar color="orange-300" neon></TestBar>
        <TestBar color="orange-400" neon></TestBar>
        <TestBar color="orange-500" neon></TestBar>
        <TestBar color="orange-600" neon></TestBar>
        <TestBar color="green-100"></TestBar>
        <TestBar color="green-200"></TestBar>
        <TestBar color="green-300"></TestBar>
        <TestBar color="green-400"></TestBar>
        <TestBar color="green-500"></TestBar>
        <TestBar color="green-600"></TestBar>
        <TestBar color="green-100" neon></TestBar>
        <TestBar color="green-200" neon></TestBar>
        <TestBar color="green-300" neon></TestBar>
        <TestBar color="green-400" neon></TestBar>
        <TestBar color="green-500" neon></TestBar>
        <TestBar color="green-600" neon></TestBar>
        <TestBar color="cyan-100"></TestBar>
        <TestBar color="cyan-200"></TestBar>
        <TestBar color="cyan-300"></TestBar>
        <TestBar color="cyan-400"></TestBar>
        <TestBar color="cyan-500"></TestBar>
        <TestBar color="cyan-600"></TestBar>
        <TestBar color="cyan-100" neon></TestBar>
        <TestBar color="cyan-200" neon></TestBar>
        <TestBar color="cyan-300" neon></TestBar>
        <TestBar color="cyan-400" neon></TestBar>
        <TestBar color="cyan-500" neon></TestBar>
        <TestBar color="cyan-600" neon></TestBar>
        <TestBar color="blue-100"></TestBar>
        <TestBar color="blue-200"></TestBar>
        <TestBar color="blue-300"></TestBar>
        <TestBar color="blue-400"></TestBar>
        <TestBar color="blue-500"></TestBar>
        <TestBar color="blue-600"></TestBar>
        <TestBar color="blue-100" neon></TestBar>
        <TestBar color="blue-200" neon></TestBar>
        <TestBar color="blue-300" neon></TestBar>
        <TestBar color="blue-400" neon></TestBar>
        <TestBar color="blue-500" neon></TestBar>
        <TestBar color="blue-600" neon></TestBar>
        <TestBar color="magenta-100"></TestBar>
        <TestBar color="magenta-200"></TestBar>
        <TestBar color="magenta-300"></TestBar>
        <TestBar color="magenta-400"></TestBar>
        <TestBar color="magenta-500"></TestBar>
        <TestBar color="magenta-600"></TestBar>
        <TestBar color="magenta-100" neon></TestBar>
        <TestBar color="magenta-200" neon></TestBar>
        <TestBar color="magenta-300" neon></TestBar>
        <TestBar color="magenta-400" neon></TestBar>
        <TestBar color="magenta-500" neon></TestBar>
        <TestBar color="magenta-600" neon></TestBar>
      </div>
      <br/>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 300px)",
        gap: 10
      }}>
        <Button variant="contained" color="primary">MUI Button Primary Color</Button>
        <Button variant="contained" color="secondary">MUI Button Secondary Color</Button>
        <Button variant="contained" color="success">MUI Button Success Color</Button>
        <Button variant="contained" color="error">MUI Button Error Color</Button>
        <Button variant="contained" color="info">MUI Button Info Color</Button>
        <Button variant="contained" color="warning">MUI Button Warning Color</Button>
      </div>
      <br/>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 53px)",
        gap: 10
      }}>
        <Checkbox color="primary" size="small" defaultChecked/>
        <Checkbox color="secondary" size="small" defaultChecked />
        <Checkbox color="success" size="small" defaultChecked />
        <Checkbox color="error" size="small" defaultChecked />
        <Checkbox color="info" size="small" defaultChecked />
        <Checkbox color="warning" size="small" defaultChecked />
        <Checkbox color="primary" size="medium" defaultChecked/>
        <Checkbox color="secondary" size="medium" defaultChecked />
        <Checkbox color="success" size="medium" defaultChecked />
        <Checkbox color="error" size="medium" defaultChecked />
        <Checkbox color="info" size="medium" defaultChecked />
        <Checkbox color="warning" size="medium" defaultChecked />
        <Checkbox color="primary" size="large" defaultChecked/>
        <Checkbox color="secondary" size="large" defaultChecked />
        <Checkbox color="success" size="large" defaultChecked />
        <Checkbox color="error" size="large" defaultChecked />
        <Checkbox color="info" size="large" defaultChecked />
        <Checkbox color="warning" size="large" defaultChecked />
      </div>
    </>
  );
}

export default Home;