import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>NotFound</h2>
      <p>Sorry, the page you're looking for does not exists.</p>
      <Link href="/">Return Home Page</Link>
    </div>
  );
};

export default NotFound;