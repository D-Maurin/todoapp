import * as yup from "yup";

const formSchemaResp = yup.object().shape({
  name: yup.string().required("Le nom est requis"),
  firstName: yup.string().required("Le prénom est requis"),
  address: yup.string().required("L'adresse est requise"),
  birthday: yup
    .date()
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr))
    .max(new Date(), "La personne n'est pas encore née !")
    .required("Date de naissance requise"),
});

export default formSchemaResp;
