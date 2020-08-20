/** @format */

const base_url = 'https://api.sbif.cl/api-sbifv3/recursos_api/dolar';
const api_key = '270067deaddf2c3e4ce594ca43480913df447cc2';

// https://api.sbif.cl/api-sbifv3/recursos_api/dolar?apikey=270067deaddf2c3e4ce594ca43480913df447cc2&formato=JSON --> convert

// https://api.sbif.cl/api-sbifv3/recursos_api/dolar/2010/01?apikey=SBIF9990SBIF44b7SBIF7f4c5a537d02358e1099&formato=JSON --mes

export const getConvertApiUrl = () => `${base_url}/?apikey=${api_key}&formato=JSON`;

export const getDataMonthApiUrl = (valueYear, valueMonth) =>
  `${base_url}/${valueYear}/${valueMonth}?apikey=${api_key}&formato=JSON`;

export const month = [
  { value: '01', label: 'Enero' },
  { value: '02', label: 'Febrero' },
  { value: '03', label: 'Marzo' },
  { value: '04', label: 'Abril' },
  { value: '05', label: 'Mayo' },
  { value: '06', label: 'Junio' },
  { value: '07', label: 'Julio' },
  { value: '08', label: 'Agosto' },
  { value: '09', label: 'Septiembre' },
  { value: '10', label: 'Octubre' },
  { value: '11', label: 'Noviembre' },
  { value: '12', label: 'Diciembre' },
];

export const years = [
  { value: '2000', label: '2000' },
  { value: '2001', label: '2001' },
  { value: '2002', label: '2002' },
  { value: '2003', label: '2003' },
  { value: '2004', label: '2004' },
  { value: '2005', label: '2005' },
  { value: '2006', label: '2006' },
  { value: '2007', label: '2007' },
  { value: '2008', label: '2008' },
  { value: '2009', label: '2009' },
  { value: '2010', label: '2010' },
  { value: '2011', label: '2011' },
  { value: '2012', label: '2012' },
  { value: '2013', label: '2013' },
  { value: '2014', label: '2014' },
  { value: '2015', label: '2015' },
  { value: '2016', label: '2016' },
  { value: '2017', label: '2017' },
  { value: '2018', label: '2018' },
  { value: '2019', label: '2019' },
  // { value: '2020', label: '2020' },
];
