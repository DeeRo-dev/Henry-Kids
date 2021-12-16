import { colors } from "@material-ui/core";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

async function ver(id) {
  await axios.put(
    `https://henry-kids.herokuapp.com/user/email/verificado/${id}`
  );

  // console.log(id)
}

export default function Verificacion() {
  const { id } = useParams();
  ver(id);
  return (
    <div>
      Su usario fue validado presione
      <Link
        style={{ color: "red" }}
        to={`/`}
      >
        {" "}
        aca{" "}
      </Link>
      para iniciar sesion
    </div>
  );
}
