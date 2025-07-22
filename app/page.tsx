
import Image from "next/image";

import { HomePage } from "./components/home";
import { Stories } from "./components/stories";

export default function Home() {
    return (
        <>
            <div className="wrapper">
                <HomePage />

                <main>
                    <Stories />
                </main>
            </div>
        </>
    );
}
