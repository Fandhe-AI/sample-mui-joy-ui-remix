import { Link } from "@remix-run/react";
import Button from "@mui/joy/Button/Button.js";

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
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Button component={Link} to="/about/">
            About
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Index;
