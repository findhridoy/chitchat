import { ModeToggle } from "@/components/toggle-mode";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      This is Home page
      <Button variant="outline">Button</Button>
      <ModeToggle />
    </div>
  );
}
