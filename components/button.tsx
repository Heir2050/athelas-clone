import Link from "next/link"

type ButtonProps = {
    className?: string;
    // ...other props
  };

export function  Button({ className, ...props }: ButtonProps) {
    return(
        <div className="demo">
            <Link href="more" className="btn btn_demo bg-white border rounded-[10rem] text-[var(--text-color-primary)];" {...props}>Get a Demo</Link>
        </div>
    )
}