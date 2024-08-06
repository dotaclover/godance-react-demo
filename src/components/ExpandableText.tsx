import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  limit: number;
}
const ExpandableText = ({ children, limit }: Props) => {
  const [expended, setExpanded] = useState(false);

  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;
  const text = expended ? children : children.substring(0, limit) + "...";
  return (
    <Text>
      {text}
      <Button
        size="xs"
        marginLeft={1}
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!expended)}
      >
        {expended ? "Show less" : "Read more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
