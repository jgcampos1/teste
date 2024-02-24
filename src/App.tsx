import { Button } from "./application/shared/components/ui/button";
import { Input } from "./application/shared/components/ui/input";
import {
  Select,
  SelectGroup,
  SelectLabel,
} from "./application/shared/components/ui/select";

function App() {
  return (
    <>
      <Button variant={`default`} color="red">
        default
      </Button>
      <Button variant={`destructive`}>destructive</Button>
      <Button variant={`ghost`}> ghost</Button>
      <Button variant={`link`}>link</Button>
      <Button variant={`outline`}>outline</Button>
      <Button variant={`secondary`}> secondary</Button>

      <Input placeholder="oi" name="das" />
      <SelectGroup>
        <SelectLabel title="adsd" />
        <Select name="ads" />
      </SelectGroup>
    </>
  );
}

export default App;
