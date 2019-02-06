import TextInput from "../../components/Forms/TextInput";
import TextArea from "../../components/Forms/TextArea";
import Image from "../../components/Forms/Image";

export const searchFields = ["name", "description"];

const skill = {
  name: {
    placeholder: "Skill name",
    label: "Name",
    editComponent: TextInput
  },
  description: {
    placeholder: "When would this skill be used?",
    label: "Description",
    editComponent: TextArea
  },
  img: {
    placeholder: "Image url",
    label: "Image",
    editComponent: Image
  }
};

export default skill;
