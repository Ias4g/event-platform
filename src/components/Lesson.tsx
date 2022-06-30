export function Lesson() {
    return (
        <a href="">
            <span className="text-gray-300">
                Domingo • 20 de junho • 19h00
            </span>

            <div className="rounded border border-gray-500 p-4 mt-4">
                <header className="flex items-center justify-between">
                    <span className="text-sm text-blue-500 font-medium">
                        Conteúdo liberado
                    </span>
                    <span
                        className="text-xs rounded py-[0.125rem] px-2 text-white border border-gray-300 font-bold"
                    >
                        ao vivo
                    </span>
                </header>
                <strong>Abertura do evento Ignite labs</strong>
            </div>
        </a>
    )
}