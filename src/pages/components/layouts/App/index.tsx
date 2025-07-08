import Navbar from "../Navbar"

type App = {
    children: React.ReactNode
}

const AppShell = (props: App) => {
    const { children } = props
    return (
        <main>
            <Navbar />
            {children}
        </main>
    )
}

export default AppShell