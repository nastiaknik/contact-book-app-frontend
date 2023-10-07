import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { toggleFavourite } from "../../redux/contacts/operations";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsStar, BsStarFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { Button } from "./ActionButtons.styled";

export const ActionButtons = ({ contact, toggleEditModal, toggleConfirm }) => {
  const dispatch = useDispatch();

  const onFavorite = (contact) => {
    if (contact.favorite) {
      dispatch(toggleFavourite({ id: contact._id, favorite: false }));
      toast.success(
        <p>
          Contact <span style={{ color: "green" }}>{contact.name}</span> removed
          from favorites!
        </p>
      );
    } else {
      dispatch(toggleFavourite({ id: contact._id, favorite: true }));
      toast.success(
        <p>
          Contact <span style={{ color: "green" }}>{contact.name}</span> added
          to favorites!
        </p>
      );
    }
  };

  return (
    <>
      <Button type="button" onClick={() => onFavorite(contact)}>
        {contact.favorite ? (
          <BsStarFill color="#ffd800" />
        ) : (
          <BsStar color="#ffd800" />
        )}
      </Button>

      <Button type="button" onClick={toggleEditModal}>
        <MdEdit color="#333333" />
      </Button>

      <Button type="button" onClick={toggleConfirm}>
        <RiDeleteBinLine color="red" />
      </Button>
    </>
  );
};
