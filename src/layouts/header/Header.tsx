import { RiShoppingCartFill, RiShoppingCartLine } from "@remixicon/react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-around items-center ">
      <div>Logo</div>
      <div className="flex justify-around items-center">
        <ul className="flex justify-center items-center gap-x-5">
          <li>
            <Link href="#">خانه</Link>
          </li>
          <li>
            <Link href="#">منو</Link>
          </li>
          <li>
            <Link href="#">درباره ما</Link>
          </li>
          <li>
            <Link href="#">تماس با ما</Link>
          </li>
        </ul>
        <div className="flex justify-center items-center gap-x-4">
          <div>
            <RiShoppingCartLine />
          </div>
          <div>پروفایل</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
