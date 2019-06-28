import {
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlus,
    faUser
  } from "@fortawesome/free-solid-svg-icons";
  import { library } from "@fortawesome/fontawesome-svg-core";
  
  const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faPlus, faUser);
  };
  
  export default Icons;