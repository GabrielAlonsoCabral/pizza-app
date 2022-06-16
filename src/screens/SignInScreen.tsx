import {
  StyleSheet,
} from "react-native";
import {
  Center,
  Box,
  Heading,
  FormControl,
  Input,
  Button,
  Link,
  VStack,
  HStack,
  Text
} from "native-base";

const SignInScreen = ({ navigation }) => {

  return (
    <Center w="100%" h="90%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" _dark={{ color: "white" }} _light={{ color: "black" }}>
          Eazy Pizza
        </Heading>
        <Heading mt="1" _dark={{ color: "white" }} _light={{ color: "black" }} fontWeight="medium" size="xs">
          Nunca foi tão facil pedir sua pizza.
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label >Email</FormControl.Label>
            <Input _dark={{ color: "white" }} _light={{ color: "black" }} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Senha</FormControl.Label>
            <Input type="password" _dark={{ color: "white" }} _light={{ color: "black" }} />
            <Link _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "indigo.500"
            }} alignSelf="flex-end" mt="1">
              Esqueci minha senha
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={() => navigation.push("Root")}>
            Entrar
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" _dark={{ color: "white" }} _light={{ color: "black" }} >
              Não possuo conta.{" "}
            </Text>
            <Link _text={{
              color: "indigo.500",
              fontWeight: "medium",
              fontSize: "sm"
            }} onPress={() => navigation.push("SignUp")}>
              Registrar
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36393E",
    flex: 1,
    padding: 10,
    paddingVertical: 30,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 10,
  },
  subtitle: {
    color: "lightgrey",
    fontSize: 20,
    alignSelf: "center",
    marginBottom: 30,
  },
  input: {
    backgroundColor: "#202225",
    marginVertical: 5,
    padding: 15,
    color: "white",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#5964E8",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  forgotPasswordText: {
    color: "#4CABEB",
    marginVertical: 5,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    marginVertical: 5,
  },
});

export default SignInScreen;
