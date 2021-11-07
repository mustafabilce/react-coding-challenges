import request from './request';

export default function newReleases() {
  return request('new-releases', 'albums');
}