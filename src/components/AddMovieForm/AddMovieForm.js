import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";
import Button from "../ui/Button/Button";
import Image from "../ui/Image/Image";
import Heading from "../ui/Heading/Heading";
import Label from "../ui/Label/Label";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovie } from "../../features/movieSlice";

function AddMovieForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Membuat object state data
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    type: "",
    poster: "",
  })

  // Membuat function handleChange
  function handleChange(e) {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // object errors
  const [formErrors, setFormErrors] = useState({
    isTitleError: false,
    isYearError: false,
    isTypeError: false,
    isPosterError: false
  });

  // destructing data
  const {title, year, type, poster} = formData;
  const {isTitleError, isYearError, isTypeError, isPosterError} = formErrors;

  function validate(){
    // Jika title kosong, set isTitleError true
    if (title === "") {
      setFormErrors({...formErrors, isTitleError: true});
    }
    // Jika year kosong, set isYearError true
    else if (year === "") {
      setFormErrors({...formErrors, 
        isYearError: true, 
        isTitleError: false
      });
      return false;
    }
    // Jika year kosong, set isYearError true
    else if (type === "") {
      setFormErrors({...formErrors, 
        isTypeError: true, 
        isYearError: false
      });
      return false;
    }
    // Jika year kosong, set isYearError true
    else if (poster === "") {
      setFormErrors({...formErrors, 
        isPosterError: true, 
        isTypeError: false
      });
      return false;
    }
    else {
      setFormErrors({...formErrors,
        isTitleError: false, 
        isDateError: false, 
        isPosterError: false, 
        isTypeError: false
      });
      return true;
    }
  }

  function submitMovie(){
    const movie = {
      id: nanoid(),
      title: title,
      year: year,
      type: type,
      poster: poster,
    };

    dispatch(addMovie(movie));
    navigate("/");
  }

  function handleSubmit(e) {
    e.preventDefault();

    validate() && submitMovie();
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <Image src="https://picsum.photos/536/354" alt="" /> 
        </div>
        <div className={styles.form__right}>
          <Heading size="md" color="webku" mb="1" center>Add Movie Form</Heading>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <Label htmlFor="title" mb="1">Title</Label>
              <input
                id="title"
                className={styles.form__input}
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
              />
              {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
            <Label htmlFor="year" mb="1">Year</Label>
              <input
                id="year"
                className={styles.form__input}
                type="number"
                name="year"
                value={year}
                onChange={handleChange}
              />
              {isYearError && <Alert>Year Wajib Diisi</Alert>}
            </div>

            <div className={styles.form__group}>
            <Label htmlFor="type" mb="1">Genre</Label>
              <select className={styles.form__input} id="type" name="type" onChange={handleChange} value={type}>
                <option value="">Pilih genre</option>
                <option value="drama">Drama</option>
                <option value="romance">Romance</option>
                <option value="horror">Horror</option>
                <option value="adventure">Adventure</option>
              </select>
              {isTypeError && <Alert>Type Wajib Dipilih</Alert>}
            </div>

            <div className={styles.form__group}>
            <Label htmlFor="title" mb="1">Link Poster</Label>
              <input
                id="poster"
                className={styles.form__input}
                type="text"
                name="poster"
                value={poster}
                onChange={handleChange}
              />
              {isPosterError && <Alert>Link Poster Wajib Diisi</Alert>}
            </div>

            <div>
              <Button variant="webku" size="lg" full>Add Movie</Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
