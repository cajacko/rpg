import TextInput from "../../components/Forms/TextInput";
import TextArea from "../../components/Forms/TextArea";
import Image from "../../components/Forms/Image";

export const searchFields = ["name", "description"];

const ability = {
  name: {
    placeholder: "Ability name",
    label: "Name",
    editComponent: TextInput
  },
  description: {
    placeholder: "What does the ability do?",
    label: "Description",
    editComponent: TextArea
  },
  img: {
    placeholder: "Image url",
    label: "Image",
    editComponent: Image
  }
};

export default ability;
