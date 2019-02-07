import TextInput from "../../components/Forms/TextInput";
import TextArea from "../../components/Forms/TextArea";
import Number from "../../components/Forms/Number";
import Image from "../../components/Forms/Image";

export const searchFields = ["name", "description"];

const monster = {
  name: {
    placeholder: "Monster type",
    label: "Type",
    editComponent: TextInput
  },
  description: {
    placeholder:
      "Write a monster description here, include any special abilities/attacks",
    label: "Description",
    editComponent: TextArea
  },
  health: {
    placeholder: 10,
    defaultVal: 10,
    label: "Health",
    editComponent: Number
  },
  speed: {
    placeholder: 3,
    defaultVal: 3,
    label: "Speed",
    editComponent: Number
  },
  img: {
    placeholder: "Image url",
    label: "Image",
    editComponent: Image
  }
};

export default monster;
