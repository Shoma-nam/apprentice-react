import React from 'react';
import CatComponent from './CatComponent';
import Card from './Card';

export default function CatList() {
  return (
    <Card>
      <CatComponent width="300px" height="300px" />
      <CatComponent width="300px" height="300px" />
    </Card>
  );
}
