

export default function Index() {
  return (
    <>
      <p id="zero-state">
        This is an experiment with React and React Router.
        <br />
        Check out{" "}
        <a href="https://google.com/">
          Google
        </a>
        .

      </p>

      <br />
      <pre>
        <strong>window.location:</strong><br />

        { JSON.stringify(window.location, null, 2) }
      </pre>
    </>
  );
}
