import React from 'react';
import { useDispatch } from 'react-redux';
import { PizzaBlock } from '../components';
import { useAppDispatch, UseAppSelector } from '../hooks/hook';
import { fetchGoods } from '../store/goodsSlice';


export const PizzaList = () => {
  const { goods } = UseAppSelector(state => state.goods);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchGoods())
  }, [])


  return (
    <>
      {Object.values(goods).map(product => (
        <PizzaBlock key={product.id} productItem={product} />
      ))}
    </>
  )
};