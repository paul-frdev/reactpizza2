import React from 'react';
import { useDispatch } from 'react-redux';
import { PizzaBlock } from '../components';
import { Skeleton } from '../components/pizzaBlock/Skeleton';
import { useAppDispatch, UseAppSelector } from '../hooks/hook';
import { fetchGoods } from '../store/goodsSlice';


export const PizzaList = () => {
  const { goods, loading } = UseAppSelector(state => state.goods);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchGoods());
  }, []);


  return (
    <>
      {
        loading ? Array(6).fill(<></>).map((_, index) => <Skeleton key={index} />) :
          Object.values(goods).map(product => (
            <PizzaBlock key={product.id} productItem={product} />
          ))

      }
    </>
  )
};