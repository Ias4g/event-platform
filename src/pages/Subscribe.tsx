import { Logo } from "../components/Logo";

export function Subscribe() {
    return (
        <div
            className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center"
        >
            <div className="max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Logo />
                    <h1>
                        Construa uma aplicação completa, do zero, com Raect JS.
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi illo suscipit, sed, blanditiis at dolor quos ut harum optio voluptatem, dignissimos dolorem corporis molestiae enim eligendi ea consequuntur sint fugiat.
                    </p>
                </div>
            </div>
        </div>
    )
}