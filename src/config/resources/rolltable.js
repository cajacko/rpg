import TextInput from "../../components/Forms/TextInput";

export const searchFields = ["title"];

const rolltable = [
  { label: "Critical Fail", key: "criticalFail" },
  { label: "Bad Fail", key: "badFail" },
  { label: "Fail", key: "fail" },
  { label: "Meh", key: "meh" },
  { label: "Success", key: "success" },
  { label: "Great Success", key: "greatSuccess" },
  { label: "Critical Success", key: "criticalSuccess" }
].reduce((acc, { label, key }) => {
  acc[key] = {
    placeholder: "What happens here",
    label,
    editComponent: TextInput
  };

  return acc;
}, {});

export default {
  title: {
    placeholder: "Roll Table Title",
    label: "Title",
    editComponent: TextInput
  },
  ...rolltable
};
