import { Fragment, h, homepage } from "./homepage/mod.tsx";

const PROJECTS: Record<string, string> = {
  Deno: "https://github.com/denoland/deno",
  "capsid": "https://github.com/capsidjs/capsid",
};

homepage(() => {
  return (
    <>
      <header>
        <img
          src="https://avatars.githubusercontent.com/u/7829205"
          style="max-width: 120px; border-radius: 100%;"
        />
        <h2>Luca Casonato</h2>
        <a href="mailto:yoshiya@deno.com">yoshiya@deno.com</a>
      </header>
      <div style="margin-top: 64px;">
        {Object.keys(PROJECTS).map((name) => (
          <p>
            <a href={PROJECTS[name]}>{name}</a>
          </p>
        ))}
      </div>
    </>
  );
});
