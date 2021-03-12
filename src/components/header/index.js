import React from 'react'
import { Container, Logo, Title } from "./styles/header"

export default function Header({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo(props) {
    return <Logo {...props} />
}

Header.Title = function HeaderTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}