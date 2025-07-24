
import Image from "next/image";

import { HomePage } from "@/components/home";
import { Stories } from "@/components/stories";
import { Separator } from "@/components/seperator";
import { Middle } from "@/components/middle";
import { Product } from "@/components/product";

export default function Home() {
    return (
        <>
            <div className="wrapper">
                <HomePage />

                <main>
                    <Stories />

                    <Middle />
                    
                    <Product />
                    
                </main>
            </div>
        </>
    );
}
