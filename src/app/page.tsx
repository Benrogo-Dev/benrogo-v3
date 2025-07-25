import { Checkbox, Switch, Slider, Button, Rating, Link } from "@/components";

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
      <div style={{
        display: "flex",
        flexFlow: "row",
        gap: 10,
      }}>
        <Rating value={0} color="scarlet" />
        <Rating value={0} color="orange" />
        <Rating value={0} color="green" />
        <Rating value={0} color="cyan" />
        <Rating value={0} color="blue" />
        <Rating value={0} color="magenta" />
      </div>
      <br/>
      <div style={{
        display: "flex",
        flexFlow: "row",
        gap: 10,
      }}>
        <Rating value={1} max={2} color="scarlet" />
        <Rating value={1} max={2} color="orange" />
        <Rating value={1} max={2} color="green" />
        <Rating value={1} max={2} color="cyan" />
        <Rating value={1} max={2} color="blue" />
        <Rating value={1} max={2} color="magenta" />
      </div>
      <br/>
      <div style={{
        display: "flex",
        flexFlow: "row",
        gap: 10,
      }}>
        <Rating value={2} max={2} color="scarlet" />
        <Rating value={2} max={2} color="orange" />
        <Rating value={2} max={2} color="green" />
        <Rating value={2} max={2} color="cyan" />
        <Rating value={2} max={2} color="blue" />
        <Rating value={2} max={2} color="magenta" />
      </div>
      <br/>
      <br/>
      <div style={{
        display: "flex",
        flexFlow: "row",
        gap: 20,
      }}>
        <Link href="#" color="scarlet">Underline off</Link>
        <Link href="#" color="orange">Underline off</Link>
        <Link href="#" color="green">Underline off</Link>
        <Link href="#" color="cyan">Underline off</Link>
        <Link href="#" color="blue">Underline off</Link>
        <Link href="#" color="magenta">Underline off</Link>
      </div>
      <br/>
      <div style={{
        display: "flex",
        flexFlow: "row",
        gap: 20,
      }}>
        <Link href="#" hoverUnderline color="scarlet">Underline on</Link>
        <Link href="#" hoverUnderline color="orange">Underline on</Link>
        <Link href="#" hoverUnderline color="green">Underline on</Link>
        <Link href="#" hoverUnderline color="cyan">Underline on</Link>
        <Link href="#" hoverUnderline color="blue">Underline on</Link>
        <Link href="#" hoverUnderline color="magenta">Underline on</Link>
      </div>
    </>
  );
}

export default Home;