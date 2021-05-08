export default function TestComponent({ children }) {
    return (
        <>
            <div>{children}</div>
            <style jsx>{`
                div {
                    background-color: magenta;
                    border-radius: 0.5em;
                    color: #fff;
                    margin-bottom: 1.5em;
                    padding: 0.5em 0.75em;
                }
            `}</style>
        </>
    );
}
