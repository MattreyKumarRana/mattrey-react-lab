import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev" },
    { name: "description", content: "Custom Wesbite Development" },
  ];
}

export default function Home() {
  return (
    <>
      <h1>My App</h1>
    </>
  );
}
