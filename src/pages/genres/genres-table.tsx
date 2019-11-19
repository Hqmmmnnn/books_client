import * as React from "react";
import { useList } from "effector-react";
import { DeleteButton, Th } from "@ui/atoms";
import { Table } from "@ui/organisms/table";
import { Genre, $allGenres } from "./model";
import { confirmModalOpened } from "@features/shared/modal/model";

export const TableOfGenres = () => {
  const genres = useList($allGenres, genre => (
    <tr>
      <GenreItem {...genre} />
      <th>
        <DeleteButton onClick={() => confirmModalOpened(genre.id)}>
          Удалить
        </DeleteButton>
      </th>
    </tr>
  ));

  return <Table headItems={headItems} bodyItems={genres} />;
};

const headItems = ["id", "Название жанра"];

const GenreItem = (genre: Genre) => (
  <>
    <Th>{genre.id}</Th>
    <Th>{genre.name}</Th>
  </>
);
