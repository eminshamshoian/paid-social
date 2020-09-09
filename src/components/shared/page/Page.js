import React, { useEffect } from 'react';
import Container from '../container/Container';

const Page = props => {
    useEffect(() => {
        document.title = `${props.title} | Paid Social`;
        window.scrollTo(0, 0);
    }, []);

    return <Container wide={props.wide}>{props.children}</Container>;
};

export default Page;
