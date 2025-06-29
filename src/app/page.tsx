import { Button, Checkbox, Rating, Slider, Switch } from "@mui/material";
import TestBar from "@/components/TestBar/TestBar";

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
        display: "flex",
        flexFlow: "row",
        gap: 10
      }}>
        <Checkbox color="primary" defaultChecked/>
        <Checkbox color="primary" defaultChecked disabled />
        <Checkbox color="secondary" defaultChecked />
        <Checkbox color="secondary" defaultChecked disabled />
        <Checkbox color="success" defaultChecked />
        <Checkbox color="success" defaultChecked disabled />
        <Checkbox color="error" defaultChecked />
        <Checkbox color="error" defaultChecked disabled />
        <Checkbox color="info" defaultChecked />
        <Checkbox color="info" defaultChecked disabled />
        <Checkbox color="warning" defaultChecked />
        <Checkbox color="warning" defaultChecked disabled />
      </div>
      <div style={{
        display: "grid",
        gridTemplateRows: "repeat(4, 20px)",
        gridTemplateColumns: "repeat(auto-fill, 200px)",
        gap: 20,
        gridAutoFlow: "column"
      }}>
        <Slider color="primary" defaultValue={50} />
        <Slider color="primary" defaultValue={50} disabled />
        <Slider color="secondary" defaultValue={50} />
        <Slider color="secondary" defaultValue={50} disabled />
        <Slider color="success" defaultValue={50} />
        <Slider color="success" defaultValue={50} disabled />
        <Slider color="error" defaultValue={50} />
        <Slider color="error" defaultValue={50} disabled />
        <Slider color="info" defaultValue={50} />
        <Slider color="info" defaultValue={50} disabled />
        <Slider color="warning" defaultValue={50} />
        <Slider color="warning" defaultValue={50} disabled />
      </div>
      <div style={{
        display: "grid",
        gridTemplateRows: "repeat(4, 20px)",
        gridTemplateColumns: "repeat(auto-fill, 200px)",
        gap: 20,
        gridAutoFlow: "column"
      }}>
        <Switch color="primary" defaultChecked />
        <Switch color="primary" defaultChecked disabled />
        <Switch color="secondary" defaultChecked />
        <Switch color="secondary" defaultChecked disabled />
        <Switch color="success" defaultChecked />
        <Switch color="success" defaultChecked disabled />
        <Switch color="error" defaultChecked />
        <Switch color="error" defaultChecked disabled />
        <Switch color="info" defaultChecked />
        <Switch color="info" defaultChecked disabled />
        <Switch color="warning" defaultChecked />
        <Switch color="warning" defaultChecked disabled />
      </div>
      <br/>
      <Rating readOnly value={1} />
      <Rating readOnly value={2} />
      <Rating readOnly value={3} />
      <Rating readOnly value={4} />
      <Rating readOnly value={5} />
    </>
  );
}

export default Home;