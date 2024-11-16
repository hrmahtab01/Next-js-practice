import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="bg-teal-500 w-full  h-[40px] flex justify-around items-center">
          <div>Logo</div>
          <div>
            <ul className="flex gap-3">
              <li>
                {" "}
                <Link href="/">home</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="/About">About</Link>
              </li>
              <li>
                {" "}
                <Link href="/Contact">Contact</Link>
              </li>
              <li>Pricing</li>
              <li>LOcation</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
