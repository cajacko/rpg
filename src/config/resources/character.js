import TextInput from "../../components/Forms/TextInput";
import TextArea from "../../components/Forms/TextArea";
import Select from "../../components/Forms/Select";
import Number from "../../components/Forms/Number";
import Image from "../../components/Forms/Image";

export const searchFields = ["name", "race", "alignment", "background"];

const character = {
  name: {
    placeholder: "Character name",
    label: "Name",
    editComponent: TextInput
  },
  race: {
    placeholder: "Race",
    label: "Race",
    editComponent: TextInput
  },
  alignment: {
    placeholder: "Alignment",
    label: "Alignment",
    editComponent: Select,
    defaultVal: "True Neutral",
    choices: [
      "Lawful Good",
      "Neutral Good",
      "Chaotic Good",
      "Lawful Neutral",
      "True Neutral",
      "Chaotic Neutral",
      "Lawful Evil",
      "Neutral Evil",
      "Chaotic Evil"
    ].map(val => ({ value: val, text: val }))
  },
  background: {
    placeholder: "Write a character background here",
    label: "Background",
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

export default character;
