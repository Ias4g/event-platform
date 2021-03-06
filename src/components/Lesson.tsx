import classNames from 'classnames'
import { format, isPast } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CheckCircle, Lock } from 'phosphor-react'
import { Link, useParams } from 'react-router-dom'

interface LessonProps {
    title: string
    slug: string
    availableAt: Date
    type: "live" | 'class'
}

export function Lesson(props: LessonProps) {
    const { slug } = useParams<{ slug: string }>()
    const isLessonAvailable = isPast(props.availableAt)
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'dd MMMM' • 'k'h'mm", {
        locale: ptBR
    })

    const isActiveLesson = slug === props.slug

    return (
        <Link
            
            to={`/event/lesson/${props.slug}`}
            className={
                classNames('group', {
                    // 'cursor-not-allowed': !isLessonAvailable
                    // 'pointer-events-none cursor-pointer': !isLessonAvailable,
                })
            }
        >
            <span className="text-gray-300 capitalize">
                {availableDateFormatted}
            </span>

            <div
                className={
                    classNames('relative rounded border border-gray-500 p-4 mt-2', {
                        'bg-green-500': isActiveLesson,
                        'after:absolute after:content-[""] after:w-6 after:h-6 after:-left-3 after:top-[50%] after:translate-y-[-50%] after:rotate-45 after:bg-green-500': isActiveLesson,
                        'group-hover:border-green-500': isLessonAvailable,
                        // 'cursor-not-allowed': !isLessonAvailable
                    })
                }
            >
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span
                            className={
                                classNames('text-sm font-medium flex items-center gap-2', {
                                    'text-white': isActiveLesson,
                                    'text-blue-500': !isActiveLesson
                                })
                            }
                        >
                            <CheckCircle
                                size={20}
                            />
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span
                            className="text-sm text-orange-500 font-medium flex items-center gap-2"
                        >
                            <Lock
                                size={20}
                            />
                            Em breve
                        </span>
                    )}
                    <span
                        className={
                            classNames('text-xs rounded py-[0.125rem] px-2 text-white border font-bold', {
                                'border-white': isActiveLesson,
                                'border-gray-300': !isActiveLesson
                            })
                        }
                    >
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <strong className={
                    classNames('mt-5 block', {
                        'text-white': isActiveLesson,
                        'text-gray-200': !isActiveLesson
                    })
                }>
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}