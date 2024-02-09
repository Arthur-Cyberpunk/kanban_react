import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { fetchData } from '../redux/cards/actions';

const useFetchData = () => {
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
      }, [dispatch]);

}

export default useFetchData;
