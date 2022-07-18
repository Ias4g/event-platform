import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "phosphor-react";

export function Footer() {
    return (
        <footer
            className="w-full bg-transparent px-6 py-3 flex items-center justify-between"
        >
            <p>Todos os direitos reservados</p>
            <p>&copy; Silva, I. A. - 2022</p>
            <nav>
                <p>Redes socias:</p>
                <ul className="flex gap-2 text-green-500 group">
                    <li>
                        <a href="#" className="">
                            <GithubLogo fill="" weight="bold" size={24} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <LinkedinLogo size={24} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <EnvelopeSimple size={24} />
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}