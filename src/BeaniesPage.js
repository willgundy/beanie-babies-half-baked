import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import './App.css';
import { getBeanieBabies } from './services/fetch-utils';
import BeaniesList from './BeaniesList';

function App() {
  const [beanieBabies, setBeanieBabies] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 30;
  const [lastPage, setLastPage] = useState(20);
  const [filter, setFilter] = useState('');
  const [filteredBeanies, setFilteredBeanies] = useState([]);
  const from = page * perPage - perPage;
  const to = page * perPage - 1;
  
  useEffect(() => {
    async function fetch() {
      const beanies = await getBeanieBabies(from, to, perPage, filter);

      page >= beanies.lastPage ? setPage(beanies.lastPage) : null;

      setBeanieBabies(beanies.data);
      setLastPage(beanies.lastPage);
    }

    async function getFilteredBeanies() {
      setPage(1);
      const filteredBeanies = await getBeanieBabies(from, to, perPage, filter);

      setBeanieBabies(filteredBeanies.data);
      setLastPage(filteredBeanies.lastPage);
    }

    filter ? getFilteredBeanies() : fetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, filter]); // what can you do with this array to trigger a fetch every time the page changes?


  const updateFilter = (e) => setFilter(e.target.value);

  const debouncedOnChange = debounce(updateFilter, 600);

  return (
    <>
      <h2>Current Page {page}</h2>
      <div className='buttons'>
        {/* on click, this button should decrement the page in state  */}
        {/* also, disable this button when you are on the first page */}
        <button onClick={() => setPage(page - 1)} disabled={page <= 1}>Previous Page</button>
        {/* on click, this button should increment the page in state  */}
        <button onClick={() => setPage(page + 1)} disabled={page >= lastPage}>Next Page</button>
      </div>
      <input placeholder='Filter Beanie Babies' onChange={debouncedOnChange}/>
      {/* pass the beanie babies into the BeaniesList component */}
      <BeaniesList beanieBabies={beanieBabies} />
    </>
  );
}

export default App;
