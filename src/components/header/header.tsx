import Image from "next/image";
import imageLogo from "../../assets/LOGO.png";
import Link from "next/link";
import { ModeToggle } from "../ui/toggleTheme";
import { FaGithub } from "react-icons/fa";

export function Header() {
  return (
    <div className="w-screen border-b border-slate-300 dark:border-slate-800">
      <div className="flex justify-between items-center container lg p-4">
        <div className="flex w-60">
          <Image
            src={imageLogo}
            width={45}
            height={45}
            alt="Prime logo"
            loading="lazy"
            quality={80}
          />
          <h3 className="content-end relative top-1">
            Prime Numbers Calculator
          </h3>
        </div>

        <div className="flex items-center">
          <ModeToggle />
          <Link
            className="ml-2"
            href={"https://github.com/Johnymonteiiro/bridgeFrontend"}
          >
            <FaGithub size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
}
