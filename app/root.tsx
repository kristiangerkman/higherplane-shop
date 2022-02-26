import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import styles from "./tailwind.css";
import NavHeader from './components/NavHeader'
import Footer from './components/Footer'
import Error from './Error'

import toastifyStyles from 'react-toastify/dist/ReactToastify.css';

export const meta: MetaFunction = () => {
  return { title: "HIGHERPLANE SHOP" };
};

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: toastifyStyles },
  ];
}

export function ErrorBoundary({ error }:any) {
  console.error(error);
  return (
    <html lang="en" className='bg-hp text-primary font-hp'>
      <head>
        <title>Oh no!</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body  className='pr-3 pl-3'>
        {/* add the UI you want your users to see */}
        <Error />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <html lang="en" className='bg-hp text-primary font-hp'>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body  className='pr-3 pl-3'>
        <NavHeader />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <Footer />
        
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
