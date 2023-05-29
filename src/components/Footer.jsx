import { Icon, Stack, StackDivider, Text, VStack, Divider } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Footer() {
  const socialMedia = [
    {
      name: "Git Hub",
      url: "www.github.com/alangmartinez",
      icon: BsGithub,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/alan-martinez-000a7a188/",
      icon: BsLinkedin,
    },
  ];

  const menuLinks = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: "About",
      href: '/about'
    },
    {
      name: 'Contact',
      href: "/contact"
    }
  ]

  const handleOnClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <VStack gap={16} paddingBottom={6}>
      <Stack direction={{ base: "column", md: "row" }} justify={{ base: 'center', md: 'space-between'}} w='full' align='center' gap={8}>
        <VStack align={{ base: "center", md: 'start' }}>
          {
            menuLinks.map(({name, href}) => <Text key={name} as={Link} to={href} fontSize={19}>{name}</Text>)
          }
        </VStack>
        <Stack direction={{ base: 'row', md: 'column' }} justify="center" gap={3} align="center" >
          <Divider transform='rotate(90deg)' borderColor='black' borderWidth={1} marginBottom={6} w={16} display={{ base: 'none', md: "block"}}/>
          {socialMedia.map(({ name, url, icon }) => (
            <Icon as={icon} key={name} onClick={handleOnClick(url)} boxSize={8} cursor='pointer'/>
          ))}
        </Stack>
      </Stack>
      <Stack direction={{ base: 'column', md: 'row' }} align='center' divider={<StackDivider display={{ base: 'none', md: 'block'}}/>} gap={2}>
        <Text>All rigths reserved to Alan Martinez</Text> 
        <Text>Copy Right 2023</Text>
      </Stack>
    </VStack>
  );
}

export default Footer;
