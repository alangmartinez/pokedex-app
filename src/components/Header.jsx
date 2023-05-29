import { Button, HStack, Icon } from "@chakra-ui/react";
import { BiMenuAltRight } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const pages = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <HStack align="center" justify="space-between" w="full" as='header' py={5}>
      <Icon as={FaUserAlt} boxSize={6} cursor="pointer" />
      <Icon
        as={BiMenuAltRight}
        boxSize={8}
        cursor="pointer"
        display={{ base: "block", md: "none" }}
      />
      <HStack
        justify="end"
        gap={10}
        display={{ base: "none", md: "flex" }}
        as="nav"
      >
        {pages.map(({ name, href }) => (
          <Button
            as={Link}
            to={href}
            key={name}
            variant="unstyled"
            textTransform="uppercase"
            fontWeight="black"
            lineHeight={10}
            fontSize={24}
          >
            {name}
          </Button>
        ))}
      </HStack>
    </HStack>
  );
}

export default Header;
