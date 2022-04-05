import { NextPage } from 'next';
import React from 'react';
import { ProductModel } from '../../backend/data/model/ProductModel';
import Header from '../components/Layout/Dashboard/Header';

const Dashboard: NextPage<ProductModel[]> = (props) => (
  <Header />
);

export default Dashboard;
