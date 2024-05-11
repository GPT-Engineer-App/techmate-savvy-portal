import { Box, Button, Container, Flex, Grid, Heading, Icon, Image, Link, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { FaRocket, FaUserCircle, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        {/* Header */}
        <Box as="header" bg="white" w="full" py={4} px={8} shadow="sm" position="fixed" top={0} left={0} right={0} zIndex="banner">
          <Flex justify="space-between" align="center">
            <Text fontSize="xl" fontWeight="bold" color="gray.800">
              TechMate
            </Text>
            <Stack direction="row" spacing={4} align="center">
              <Link href="#" fontWeight="medium">
                Product
              </Link>
              <Link href="#" fontWeight="medium">
                Pricing
              </Link>
              <Link href="#" fontWeight="medium">
                About Us
              </Link>
              <Button colorScheme="teal" variant="solid">
                Free Trial
              </Button>
            </Stack>
          </Flex>
        </Box>

        {/* Hero Section */}
        <Flex align="center" justify="center" bgImage="https://images.unsplash.com/photo-1503455637927-730bce8583c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwYWJzdHJhY3QlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTcxNTQ0NDAxMHww&ixlib=rb-4.0.3&q=80&w=1080" bgPos="center" bgSize="cover" h="100vh" pt="100px">
          <VStack spacing={4} textAlign="center" color="white">
            <Heading as="h1" size="2xl" fontWeight="bold">
              Automate Your Workflow with TechMate
            </Heading>
            <Text fontSize="lg">Innovative solutions to boost your business efficiency.</Text>
            <Button colorScheme="orange" size="lg">
              Get Started
            </Button>
          </VStack>
        </Flex>

        {/* Features Overview */}
        <Box py={12} px={8}>
          <Heading as="h2" size="xl" textAlign="center" mb={6}>
            Key Features
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <FeatureCard icon={FaRocket} title="Rapid Integration" description="Seamlessly integrates with your existing platforms." />
            <FeatureCard icon={FaUserCircle} title="User Management" description="Efficient handling and administration of user roles." />
            <FeatureCard icon={FaRocket} title="Real-Time Analytics" description="Get insights and reports instantly." />
          </SimpleGrid>
        </Box>

        {/* Testimonials */}
        <Box bg="gray.50" py={12} px={8}>
          <Heading as="h2" size="xl" textAlign="center" mb={6}>
            What Our Customers Say
          </Heading>
          <Testimonial text="TechMate has transformed our daily operations and increased our productivity!" author="John Doe, CEO of InnoTech" />
        </Box>

        {/* Pricing */}
        <Box py={12} px={8}>
          <Heading as="h2" size="xl" textAlign="center" mb={6}>
            Pricing Plans
          </Heading>
          <Pricing />
        </Box>

        {/* Footer */}
        <Box as="footer" bg="gray.800" color="white" py={6}>
          <Container maxW="container.md">
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
              <Text fontSize="sm">Contact Us</Text>
              <Text fontSize="sm">FAQs</Text>
              <Text fontSize="sm">Terms of Service</Text>
              <Stack direction="row" spacing={2}>
                <Icon as={FaFacebook} />
                <Icon as={FaTwitter} />
                <Icon as={FaInstagram} />
                <Icon as={FaLinkedin} />
              </Stack>
            </SimpleGrid>
          </Container>
        </Box>
      </Flex>
    </Container>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <VStack bg="white" p={6} shadow="md" borderRadius="md">
    <Icon as={icon} w={10} h={10} color="teal.500" />
    <Text fontWeight="bold">{title}</Text>
    <Text textAlign="center">{description}</Text>
  </VStack>
);

const Testimonial = ({ text, author }) => (
  <VStack bg="white" p={6} shadow="md" borderRadius="md" maxW="md" mx="auto">
    <Text fontStyle="italic">"{text}"</Text>
    <Text fontWeight="bold">{author}</Text>
  </VStack>
);

const Pricing = () => (
  <Grid templateColumns="repeat(3, 1fr)" gap={4}>
    <PricingCard plan="Basic" price="Free" features={["10 Projects", "5 GB Storage", "Community Support"]} />
    <PricingCard plan="Pro" price="$9.99/mo" features={["Unlimited Projects", "100 GB Storage", "Priority Support"]} highlight />
    <PricingCard plan="Enterprise" price="Contact Us" features={["Custom Integrations", "Unlimited Storage", "Dedicated Support"]} />
  </Grid>
);

const PricingCard = ({ plan, price, features, highlight = false }) => (
  <VStack bg={highlight ? "teal.500" : "white"} color={highlight ? "white" : "gray.800"} p={6} shadow="md" borderRadius="md" align="stretch">
    <Text fontWeight="bold" fontSize="xl">
      {plan}
    </Text>
    <Text fontSize="2xl" fontWeight="bold">
      {price}
    </Text>
    <Stack mt={3} spacing={2}>
      {features.map((feature, index) => (
        <Text key={index}>{feature}</Text>
      ))}
    </Stack>
  </VStack>
);

export default Index;
