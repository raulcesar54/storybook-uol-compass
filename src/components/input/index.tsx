import { InputProps } from "./props";
import { Container, ErrorText, Label, Text } from "./style";

export const Input = (props: InputProps) => {
  return (
    <Container>
      {props.label && <Label>{props.label}</Label>}
      <Text error={Boolean(props.error)} {...props} />
      {props.error && <ErrorText>{props.errorMessage}</ErrorText>}
    </Container>
  );
};
