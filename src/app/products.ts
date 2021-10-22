export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Celular XL',
    price: 799,
    description: 'Um grande celular com uma das melhores telas'
  },
  {
    id: 2,
    name: 'Celular Mini',
    price: 699,
    description: 'Um ótimo celular com uma das melhores câmeras'
  },
  {
    id: 3,
    name: 'Celular Standard',
    price: 299,
    description: ''
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/