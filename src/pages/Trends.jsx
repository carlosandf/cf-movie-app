import React from 'react';
import Header from '@components/Header';
import {useGetMovies} from '@hooks/useGetData';
import GenericList from '@containers/GenericList';

const endpoint = 'trending/movie/day';
export default function Trends() {

  const trends = useGetMovies(endpoint)

  return (
    <>
      <Header modifier={true} title='Tendencias' />
      <GenericList data={trends} />
    </>
  )
}