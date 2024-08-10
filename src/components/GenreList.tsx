import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";
import { useMatch, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Props {
  onClose?: () => void;
}
const GenreList = ({ onClose }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;

  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  const match = useMatch("/");
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        {t("Genres")}
      </Heading>
      <List>
        {data?.results?.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontSize="lg"
                variant="link"
                onClick={() => {
                  setSelectedGenreId(genre.id);
                  if (!match) navigate("/");
                  if (onClose) onClose();
                }}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
