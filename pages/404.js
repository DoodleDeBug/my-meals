import Link from "next/link";

const NoPage = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Nothing to see here...</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NoPage;
