import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/image-url";

const GenreList = () => {
  const { data, isLoading, err } = useGenres();

  if (isLoading) return <Spinner />;
  if (err) return null;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"1px"}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
