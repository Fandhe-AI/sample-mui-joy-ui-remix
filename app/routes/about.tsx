import { Link } from "@remix-run/react";
import Button from "@mui/joy/Button";

import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const Index = () => {
  return (
    <div>
      <h1>About</h1>
      <ul>
        <li>
          <Button component={Link} to="/">
            Top
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Index;
