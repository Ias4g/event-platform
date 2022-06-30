import { CheckCircle } from 'phosphor-react'

interface LessonProps {
    title: string
    slug: string
    availabeAt: Date
    type: "live" | 'class'
}

export function Lesson(props: LessonProps) {
    return (
        <a href="">
            <span className="text-gray-300">
                {props.availabeAt.toString()}
            </span>

            <div className="rounded border border-gray-500 p-4 mt-4">
                <header className="flex items-center justify-between">
                    <span
                        className="text-sm text-blue-500 font-medium flex items-center gap-2"
                    >
                        <CheckCircle
                            size={20}
                        />
                        Conteúdo liberado
                    </span>
                    <span
                        className="text-xs rounded py-[0.125rem] px-2 text-white border border-gray-300 font-bold"
                    >
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <strong className="text-gray-200 mt-5 block">
                    {props.title}
                </strong>
            </div>
        </a>
    )
}