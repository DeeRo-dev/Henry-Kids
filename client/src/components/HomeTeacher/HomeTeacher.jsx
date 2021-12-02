import React ,{ useState, useEffect }from "react";
import { useDispatch, useSelector } from "react-redux";
import NavTeacher from "../NavTeacher/NavTeacher.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import styles from "./HomeTeacher.module.css";
import { auth } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router";
 import CardTeacher from "../CardTeacher/CardTeacher.jsx";
import { getAllClassTeacher } from "../../actions/index.js";


export default function Home() {

let arrayy = [
  {
    id: 25464,
    title: "clase nueva 1",
    description: "Battle tested, Open Sourced reusable modules for Salesforce",
    studio_material: "https//www.datasert.com/products/libshare/",
    video_link: "https://www.youtube.com/watch?v=5DAEdXKp7QA",
    game_link: "https//www.datasert.com/products/libshare/",
    state: true,
    difficulty:"Basica",

  },
  {
    id: 24,
    title: "clase nueva 2",
    description: "Battle tested, Open Sourced reusable modules for Salesforce",
    studio_material: "https//www.datasert.com/products/libshare/",
    video_link: "https://www.youtube.com/watch?v=5DAEdXKp7QA",
    game_link: "https//www.datasert.com/products/libshare/",
    state: true,
    difficulty:"Basica",

  },
  {
    id: 32,
    title: "clase nueva 3",
    description: "Battle tested, Open Sourced reusable modules for Salesforce",
    studio_material: "https//www.datasert.com/products/libshare/",
    video_link: "https://www.youtube.com/watch?v=5DAEdXKp7QA",
    game_link: "https//www.datasert.com/products/libshare/",
    state: true,
    difficulty:"Basica",

  },
  {
    id: 434,
    title: "clase nueva 4",
    description: "Battle tested, Open Sourced reusable modules for Salesforce",
    studio_material: "https//www.datasert.com/products/libshare/",
    video_link: "https://www.youtube.com/watch?v=5DAEdXKp7QA",
    game_link: "https//www.datasert.com/products/libshare/",
    state: true,
    difficulty:"Basica",

  },
  {
    id: 2344,
    title: "clase nueva 5",
    description: "Battle tested, Open Sourced reusable modules for Salesforce",
    studio_material: "https//www.datasert.com/products/libshare/",
    video_link: "https://www.youtube.com/watch?v=5DAEdXKp7QA",
    game_link: "https//www.datasert.com/products/libshare/",
    state: true,
    difficulty:"Basica",

  },
  {
    id: 654,
    title: "clase nueva 6",
    description: "Battle tested, Open Sourced reusable modules for Salesforce",
    studio_material: "https//www.datasert.com/products/libshare/",
    video_link: "https://www.youtube.com/watch?v=5DAEdXKp7QA",
    game_link: "https//www.datasert.com/products/libshare/",
    state: true,
    difficulty:"Basica",

  },
  {
    id: 894,
    title: "clase nueva 7",
    description: "Battle tested, Open Sourced reusable modules for Salesforce",
    studio_material: "https//www.datasert.com/products/libshare/",
    video_link: "https://www.youtube.com/watch?v=5DAEdXKp7QA",
    game_link: "https//www.datasert.com/products/libshare/",
    state: true,
    difficulty:"Basica",

  },
  {
    id: 94,
    title: "clase nueva 8",
    description: "Battle tested, Open Sourced reusable modules for Salesforce",
    studio_material: "https//www.datasert.com/products/libshare/",
    video_link: "https://www.youtube.com/watch?v=5DAEdXKp7QA",
    game_link: "https//www.datasert.com/products/libshare/",
    state: true,
    difficulty:"Basica",

  },
  {
    id: 25674,
    title: "clase nueva 9",
    description: "Battle tested, Open Sourced reusable modules for Salesforce",
    studio_material: "https//www.datasert.com/products/libshare/",
    video_link: "https://www.youtube.com/watch?v=5DAEdXKp7QA",
    game_link: "https//www.datasert.com/products/libshare/",
    state: true,
    difficulty:"Basica",

  },
  {
    id: 25764,
    title: "clase nueva 10",
    description: "Battle tested, Open Sourced reusable modules for Salesforce",
    studio_material: "https//www.datasert.com/products/libshare/",
    video_link: "https://www.youtube.com/watch?v=5DAEdXKp7QA",
    game_link: "https//www.datasert.com/products/libshare/",
    state: true,
    difficulty:"Basica",

  },
  {
    id: 27564,
    title: "clase nueva 11",
    description: "Battle tested, Open Sourced reusable modules for Salesforce",
    studio_material: "https//www.datasert.com/products/libshare/",
    video_link: "https://www.youtube.com/watch?v=5DAEdXKp7QA",
    game_link: "https//www.datasert.com/products/libshare/",
    state: true,
    difficulty:"Basica",

  },
  {
    id: 57624,
    title: "clase nueva 12",
    description: "Battle tested, Open Sourced reusable modules for Salesforce",
    studio_material: "https//www.datasert.com/products/libshare/",
    video_link: "https://www.youtube.com/watch?v=5DAEdXKp7QA",
    game_link: "https//www.datasert.com/products/libshare/",
    state: true,
    difficulty:"Basica",

  },


]

  const navigate = useNavigate();
  function signOutUser(e) {
    auth
      .signOut(auth)
      .then(() => {
        navigate("/");
        window.location.reload()
        localStorage.clear()
        console.log("done");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const allClassTeacher = useSelector((state) => state.allClassTeacher);

  const dispatch = useDispatch();
 
  
  let cardsInPage = 8;
  let [page, setPage] = useState (1);

  useEffect (() => {
    setPage (1);
  }, []);

  let currentPage;
  let indexLastPage = page * cardsInPage;
  let indexFirstPage = indexLastPage - cardsInPage;

  arrayy.length > 9
    ? (currentPage = allClassTeacher.slice (indexFirstPage, indexLastPage))
    : (currentPage = allClassTeacher);

  
    function Paginate (e, num) {
    e.preventDefault ();
    setPage (num);
  }
  
  let idUser = window.localStorage.sessionUser 
   
   useEffect(() => {
    dispatch(getAllClassTeacher(idUser))
  }, [idUser, dispatch ]);


 
  
  return (
    <div className={styles.home}>
      <div className={styles.nav}>
      <NavTeacher />
      </div>
    

      <div className={styles.cards}>
      {arrayy.map((e) => { 
        return (
        <div key= {e.id}> 
         <CardTeacher 
        id={e.id}
        title={e.title}
        category={e.category}
        description={e.description}
        video_link={e.video_link}
        difficulty={e.difficulty}
        game_link={e.game_link}
        valoration={e.valoration}
        /> </div>)}
      )} 
      </div>

      <div>
           <Pagination cardsInPage={cardsInPage} totalElements={allClassTeacher.length}
          paginate={Paginate} /> 
      </div>
      

    </div>
  );
}
