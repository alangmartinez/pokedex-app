import  { Box, VStack, Heading, Text, Divider, Button } from '@chakra-ui/react';

function ErrorPage() {
  return (
    <Box w='full' h='100vh'>
        <VStack justify='start' align='center'>
            <Heading>Oops! 404 Not Found!</Heading>
            <Divider />
            <Text>We sorry!</Text>
            <Text>
                The page you are looking for does not exist.
            </Text>
            <Button variant='primary'>Back Home</Button>
        </VStack>
    </Box>
  )
}

export default ErrorPage