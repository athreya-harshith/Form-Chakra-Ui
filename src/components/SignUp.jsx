import {
  Container,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  HStack,
  Select,
  Text,
  FormErrorMessage,
  useColorMode,
  useColorModeValue,
  Switch,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
const SignUp = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { colorMode, toggleColorMode } = useColorMode();
  const formColor = useColorModeValue("gray", "white");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container color={formColor}>
      <Text fontSize={"4xl"} fontWeight={"bolder"}>
        Sign Up
      </Text>
      <Text>Enter details mentioned below</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl my={5} isInvalid={errors.fullname}>
          <FormLabel>FullName</FormLabel>
          <Input
            color={"black"}
            type="text"
            placeholder="Enter Full Name"
            {...register("fullname", { required: "Name is required" })}
          />
          {errors.fullname && (
            <FormErrorMessage>{errors.fullname.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl my={5} isInvalid={errors.email}>
          <FormLabel>Email ID</FormLabel>
          <Input
            color={"black"}
            type="email"
            placeholder="Enter email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && (
            <FormErrorMessage>{errors.email.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl my={5} isInvalid={errors.password}>
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              color={"black"}
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 4,
                  message: "Minimum length of password must be 4 characters",
                },
              })}
            />
            <InputRightElement width="4.5rem">
              <HStack onClick={handleClick}>
                {show ? <ViewOffIcon /> : <ViewIcon />}
              </HStack>
            </InputRightElement>
          </InputGroup>
          {errors.password && (
            <FormErrorMessage>{errors.password.message}</FormErrorMessage>
          )}
        </FormControl>
        <HStack gap={5} my={5} isInvalid={errors.dob}>
          <FormControl>
            <FormLabel>DOB</FormLabel>
            <Input
              type="date"
              placeholder="DD/MM/YY"
              {...register("dob", { required: "DOB is required" })}
            ></Input>
            {errors.dob && (
              <FormErrorMessage>{errors.dob.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={errors.country}>
            <FormLabel>Country</FormLabel>
            <Select
              placeholder="Select country"
              {...register("country", { required: "Country is required" })}
            >
              <option>United Arab Emirates</option>
              <option>India</option>
              <option>America</option>
              <option>Australia</option>
              <option>Nigeria</option>
              <option>Russia</option>
            </Select>
            {errors.country && (
              <FormErrorMessage>{errors.country.message}</FormErrorMessage>
            )}
          </FormControl>
        </HStack>
        <HStack gap={5} my={5}>
          <FormControl isInvalid={errors.city}>
            <FormLabel>City</FormLabel>
            <Input
              color={"black"}
              type="text"
              placeholder="Enter City"
              {...register("city", { required: "City is required" })}
            ></Input>
            {errors.city && (
              <FormErrorMessage>{errors.city.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={errors.state}>
            <FormLabel>State</FormLabel>
            <Input
              type="text"
              placeholder="Enter State"
              {...register("state", { required: "State is required" })}
            ></Input>
            {errors.state && (
              <FormErrorMessage>{errors.state.message}</FormErrorMessage>
            )}
          </FormControl>
        </HStack>
        <HStack gap={5} my={5}>
          <FormControl isInvalid={errors.address}>
            <FormLabel>Address</FormLabel>
            <Input
              color={"black"}
              type="text"
              placeholder="Enter Address"
              {...register("address", { required: "Address is required" })}
            ></Input>
            {errors.address && (
              <FormErrorMessage>{errors.address.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl w={"35%"} isInvalid={errors.pin}>
            <FormLabel>PinCode</FormLabel>
            <Input
              color={"black"}
              type="number"
              placeholder="Pin"
              {...register("pin", { required: "Pin is required" })}
            ></Input>
            {errors.pin && (
              <FormErrorMessage>{errors.pin.message}</FormErrorMessage>
            )}
          </FormControl>
        </HStack>
        <Button
          my={5}
          w="100%"
          type="submit"
          color={"white"}
          backgroundColor={"#1DA1F2"}
        >
          {"Let's go"}
        </Button>
        <HStack my={5}>
          <Text>Alread have an account ?</Text>
          <Text color={"#1DA1F2"} as={"u"}>
            Log in
          </Text>
        </HStack>
        <HStack>
          <Switch colorScheme="twitter" onChange={toggleColorMode} />
          <Text>Dark Mode</Text>
        </HStack>
      </form>
    </Container>
  );
};

export default SignUp;
