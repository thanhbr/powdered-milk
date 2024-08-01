import { Button } from "@/components";
import { Checkbox } from "@/components/checkbox/Checkbox";

export default function Home() {
  return (
    <main>
      NextJS
      <div className="ml-8">
        <Button variant="destructive" className="ml-8">
          Click
        </Button>
        <Checkbox name="school"></Checkbox>
      </div>
    </main>
  );
}
