import Link from "next/link";

function Button({ to, href, children, onClick, ...passProps }) {
    let Comp = 'button';

    const props = {
        ...passProps,
    };

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }

    // const classes = ("btn", {
    //     signup,
    //     download,
    //     learnMore,
    // });

    return (
        <Comp {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;