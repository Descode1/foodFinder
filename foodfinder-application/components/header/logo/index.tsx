import { JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/assets/logo.svg"

const Logo = (): JSX.Element =>{
    return(
        <Link href="/" passHref className="styles.root">
            <Image
            src={logo}
            alt="Logo: Food Finder"
            sizes="100vw"
            fill
            priority
            />            
        </Link>
    );
};

export default Logo;