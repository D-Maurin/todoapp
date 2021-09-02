import { FormEvent, useState } from "react";

function useEditMode(initialValue: string, callback: any) {
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState(initialValue);

  const enterEditMode = () => {
    setEditMode(true);
  };

  const confirmEdition = (event: FormEvent) => {
    callback(text);
    setEditMode(false);
    event.preventDefault();
  };

  const cancelEdition = () => {
    console.log(initialValue);
    setText(initialValue);
    setEditMode(false);
  };

  return {
    text,
    setText,
    editMode,
    enterEditMode,
    confirmEdition,
    cancelEdition,
  };
}
export default useEditMode;
