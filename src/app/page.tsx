import { Rating } from "@mui/material";
import { Checkbox, Switch, Slider, Button } from "@/components";

const Home = () => {
  return (
    <>
      <br/>
      <br/>
      <br/>
      <div style={{
        display: "flex",
        flexFlow: "row",
        gap: 10
      }}>
        <Button color="scarlet">Scarlet</Button>
        <Button color="orange">Orange</Button>
        <Button color="green">Green</Button>
        <Button color="cyan">Cyan</Button>
        <Button color="blue">Blue</Button>
        <Button color="magenta">Magenta</Button>
      </div>
      <br/>
      <div style={{
        display: "flex",
        flexFlow: "row",
        gap: 10
      }}>
        <Button color="scarlet" disabled>Scarlet</Button>
        <Button color="orange" disabled>Orange</Button>
        <Button color="green" disabled>Green</Button>
        <Button color="cyan" disabled>Cyan</Button>
        <Button color="blue" disabled>Blue</Button>
        <Button color="magenta" disabled>Magenta</Button>
      </div>
      <br/>
      <div style={{
        display: "flex",
        flexFlow: "row",
        gap: 10
      }}>
        <Checkbox color="scarlet" defaultChecked />
        <Checkbox color="scarlet" />
        <Checkbox color="orange" defaultChecked />
        <Checkbox color="orange" />
        <Checkbox color="green" defaultChecked />
        <Checkbox color="green" />
        <Checkbox color="cyan" defaultChecked />
        <Checkbox color="cyan" />
        <Checkbox color="blue" defaultChecked />
        <Checkbox color="blue" />
        <Checkbox color="magenta" defaultChecked />
        <Checkbox color="magenta" />
      </div>
      <br/>
      <div style={{
        display: "flex",
        flexFlow: "row",
        gap: 10
      }}>
        <Checkbox color="scarlet" defaultChecked disabled />
        <Checkbox color="scarlet" disabled />
        <Checkbox color="orange" defaultChecked disabled />
        <Checkbox color="orange" disabled />
        <Checkbox color="green" defaultChecked disabled />
        <Checkbox color="green" disabled />
        <Checkbox color="cyan" defaultChecked disabled />
        <Checkbox color="cyan" disabled />
        <Checkbox color="blue" defaultChecked disabled />
        <Checkbox color="blue" disabled />
        <Checkbox color="magenta" defaultChecked disabled />
        <Checkbox color="magenta" disabled />
      </div>
      <br/>
      <div style={{
        display: "flex",
        flexFlow: "row",
        gap: 10
      }}>
        <Slider color="scarlet" defaultValue={50} />
        <Slider color="orange" defaultValue={50} />
        <Slider color="green" defaultValue={50} />
        <Slider color="cyan" defaultValue={50} />
        <Slider color="blue" defaultValue={50} />
        <Slider color="magenta" defaultValue={50} />
      </div>
      <br/>
      <div style={{
        display: "flex",
        flexFlow: "row",
        gap: 10
      }}>
        <Slider color="scarlet" defaultValue={50} disabled />
        <Slider color="orange" defaultValue={50} disabled />
        <Slider color="green" defaultValue={50} disabled />
        <Slider color="cyan" defaultValue={50} disabled />
        <Slider color="blue" defaultValue={50} disabled />
        <Slider color="magenta" defaultValue={50} disabled />
      </div>
      <br/>
      <div style={{
        display: "flex",
        flexFlow: "row",
        gap: 10,
      }}>
        <Switch color="scarlet" />
        <Switch color="scarlet" defaultChecked />
        <Switch color="orange" />
        <Switch color="orange" defaultChecked />
        <Switch color="green" />
        <Switch color="green" defaultChecked />
        <Switch color="cyan" />
        <Switch color="cyan" defaultChecked />
        <Switch color="blue" />
        <Switch color="blue" defaultChecked />
        <Switch color="magenta" />
        <Switch color="magenta" defaultChecked />
      </div>
      <br/>
      <div style={{
        display: "flex",
        flexFlow: "row",
        gap: 10,
      }}>
        <Switch color="scarlet" disabled />
        <Switch color="scarlet" defaultChecked disabled />
        <Switch color="orange" disabled />
        <Switch color="orange" defaultChecked disabled />
        <Switch color="green" disabled />
        <Switch color="green" defaultChecked disabled />
        <Switch color="cyan" disabled />
        <Switch color="cyan" defaultChecked disabled />
        <Switch color="blue" disabled />
        <Switch color="blue" defaultChecked disabled />
        <Switch color="magenta" disabled />
        <Switch color="magenta" defaultChecked disabled />
      </div>
      <br/>
      <Rating readOnly value={1.5} precision={0.1} />
      <Rating readOnly value={2} />
      <Rating readOnly value={3} />
      <Rating readOnly value={4} />
      <Rating readOnly value={5} />
    </>
  );
}

export default Home;