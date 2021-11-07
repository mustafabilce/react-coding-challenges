import request from './request';

export default function categories() {
  return request('categories', 'categories');
}