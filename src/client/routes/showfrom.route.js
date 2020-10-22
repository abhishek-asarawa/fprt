import { form } from "../config/webUrl";
import ShowForm from "../pages/ShowForm/ShowForm";

const ShowFormRoute = [
  {
    path: form,
    exact: true,
    isProtected: true,
    component: ShowForm,
  },
];

export default ShowFormRoute;
