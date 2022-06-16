import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@components/Header';
import GenericList from '../containers/GenericList';
import { useGetMovies } from '@hooks/useGetData';

const endpoint = ''
export default function Category() {
  const {id} = useParams()
  const data = useGetMovies
  console.log(id)
  return (
    <>
      <Header 
        arrow={true}
        title={true}
        name='Tendencias'
      />
      <GenericList data={data}/>
    </>
  );
}