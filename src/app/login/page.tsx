import Image from "next/image";

export default function Login() {
    return (
        <div className="main flex ">
            <div className="coluna-2 w-5/12 bg-neutral-50 h-screen">
                <div className="flex flex-col justify-center items-center h-full">
                    <h1 className="text-4xl ">Login</h1>
                </div>
            </div>
            <div className="coluna-1 w-7/12 h-screen">
                <Image
                    src="/images/login-cat.jpg"
                    alt="Gato na janela"
                    width={1000}
                    height={1000}
                    style={{height:"120%",width:"100%"}}
                />
            </div>
        </div>
    )
}