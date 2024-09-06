import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { JoyUiDocument } from "~/joy-ui/document";
import { joyUiLinks } from "~/joy-ui/links";
import { JoyUiMeta } from "~/joy-ui/meta";
import style from "~/styles/common.scss?url";

import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  ...joyUiLinks(),
  { rel: "stylesheet", href: style },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <JoyUiMeta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

const App = () => {
  return (
    <JoyUiDocument>
      <Outlet />
    </JoyUiDocument>
  );
};

export default App;
