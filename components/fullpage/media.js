import Home from './Home'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'

let media = [
  {
    slug: "",
    preload: ["https://res.cloudinary.com/dbcjs8bca/image/upload/v1593472086/large_image_85a4339b93.png"],
    className: "slide page-one",
    children: <Home />
  },
  {
    slug: "page-two",
    className: "slide page-two",
    children: <Second />
  },
  {
    slug: "page-three",
    className: "slide page-three",
    children: <Third />
  },{
    slug: "page-four",
    className: "slide page-four",
    children: <Fourth />
  }
];







export default media
