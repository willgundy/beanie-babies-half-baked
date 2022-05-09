import { Link } from 'react-router-dom';

export default function BeanieBaby({ beanieBaby }) {
  return (
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // it should also render the beanie baby's image and show the beanie baby's name
    <Link to={`/beanie/${beanieBaby.id}`}>
      <div className='beanie-baby'>
        <img src={beanieBaby.image} className='beanie-img'/>
        <h1>{beanieBaby.title}</h1>
      </div>
    </Link>
  );
}
