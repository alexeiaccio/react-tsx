import { If } from "@accio-ui/react-tsx";
import { Button } from "@accio-ui/ui";
import { useState } from "react";

export function IFExample() {
  const [isTruthy, setIstruthy] = useState(false);

  return (
    <div className="space-y-6">
      <If test={isTruthy}>
        <h1>Truthy</h1>
        <h1>Falsy</h1>
      </If>
      <Button onClick={() => setIstruthy(!isTruthy)}>Toggle</Button>
    </div>
  );
}
