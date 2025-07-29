import NextLink from 'next/link';
import {
    Box,
    Heading,
    Container,
    Divider,
    Button,
    Text
} from '@chakra-ui/react';

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1"> Not found </Heading>;
            <Text>The page you&apos;ve been looking for isn&apos;t here currently....... Maybe it will be added in near future.</Text>;
            <Divider my={6}/>;
            <Box my={6} align="center">
                <Button as={NextLink} href="/" colorScheme="teal">
                  Return to Home page
                </Button>;
            </Box>;
        </Container>
    );
};
export default NotFound;