import request from './request';

export default function featuredPlaylists() {
  return request('featured-playlists', 'playlists');
}