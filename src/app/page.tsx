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
        <Button color="red">Red</Button>
        <Button color="orange">Orange</Button>
        <Button color="yellow">Yellow</Button>
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
        <Button color="red" disabled>red</Button>
        <Button color="orange" disabled>Orange</Button>
        <Button color="yellow" disabled>Yellow</Button>
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
        <Checkbox color="red" defaultChecked />
        <Checkbox color="red" />
        <Checkbox color="orange" defaultChecked />
        <Checkbox color="orange" />
        <Checkbox color="yellow" defaultChecked />
        <Checkbox color="yellow" />
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
        <Checkbox color="red" defaultChecked disabled />
        <Checkbox color="red" disabled />
        <Checkbox color="orange" defaultChecked disabled />
        <Checkbox color="orange" disabled />
        <Checkbox color="yellow" defaultChecked disabled />
        <Checkbox color="yellow" disabled />
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
        <Slider color="red" defaultValue={50} />
        <Slider color="orange" defaultValue={50} />
        <Slider color="yellow" defaultValue={50} />
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
        <Slider color="red" defaultValue={50} disabled />
        <Slider color="orange" defaultValue={50} disabled />
        <Slider color="yellow" defaultValue={50} disabled />
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
        <Switch color="red" />
        <Switch color="red" defaultChecked />
        <Switch color="orange" />
        <Switch color="orange" defaultChecked />
        <Switch color="yellow" />
        <Switch color="yellow" defaultChecked />
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
        <Switch color="red" disabled />
        <Switch color="red" defaultChecked disabled />
        <Switch color="orange" disabled />
        <Switch color="orange" defaultChecked disabled />
        <Switch color="yellow" disabled />
        <Switch color="yellow" defaultChecked disabled />
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
        <Rating value={0} color="red" />
        <Rating value={0} color="orange" />
        <Rating value={0} color="yellow" />
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
        <Rating value={1} max={2} color="red" />
        <Rating value={1} max={2} color="orange" />
        <Rating value={1} max={2} color="yellow" />
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
        <Rating value={2} max={2} color="red" />
        <Rating value={2} max={2} color="orange" />
        <Rating value={2} max={2} color="yellow" />
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
        <Link href="#" color="red">Example link</Link>
        <Link href="#" color="orange">Example link</Link>
        <Link href="#" color="yellow">Example link</Link>
        <Link href="#" color="green">Example link</Link>
        <Link href="#" color="cyan">Example link</Link>
        <Link href="#" color="blue">Example link</Link>
        <Link href="#" color="magenta">Example link</Link>
      </div>
      <br/>
      <div style={{
        display: "flex",
        flexFlow: "row",
        gap: 20,
      }}>
        <Link href="#" hoverUnderline color="red">Example link</Link>
        <Link href="#" hoverUnderline color="orange">Example link</Link>
        <Link href="#" hoverUnderline color="yellow">Example link</Link>
        <Link href="#" hoverUnderline color="green">Example link</Link>
        <Link href="#" hoverUnderline color="cyan">Example link</Link>
        <Link href="#" hoverUnderline color="blue">Example link</Link>
        <Link href="#" hoverUnderline color="magenta">Example link</Link>
      </div>
      <br/>
      <div style={{
        display: "flex",
        flexFlow: "row",
        gap: 20,
      }}>
        <Link href="#" glow color="red">Example link</Link>
        <Link href="#" glow color="orange">Example link</Link>
        <Link href="#" glow color="yellow">Example link</Link>
        <Link href="#" glow color="green">Example link</Link>
        <Link href="#" glow color="cyan">Example link</Link>
        <Link href="#" glow color="blue">Example link</Link>
        <Link href="#" glow color="magenta">Example link</Link>
      </div>
      <br/>
      <div style={{
        display: "flex",
        flexFlow: "row",
        gap: 20,
      }}>
        <Link href="#" glow hoverUnderline color="red">Example link</Link>
        <Link href="#" glow hoverUnderline color="orange">Example link</Link>
        <Link href="#" glow hoverUnderline color="yellow">Example link</Link>
        <Link href="#" glow hoverUnderline color="green">Example link</Link>
        <Link href="#" glow hoverUnderline color="cyan">Example link</Link>
        <Link href="#" glow hoverUnderline color="blue">Example link</Link>
        <Link href="#" glow hoverUnderline color="magenta">Example link</Link>
      </div>
    </>
  );
}

export default Home;