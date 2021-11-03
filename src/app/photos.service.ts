import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ImageUrl {
  urls: {
    regular: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  constructor(private http: HttpClient) { }

  access_key = 'whBF28BH0LS_birX-2HSvf3WSJQgHiRVbI2wvxyT6WA';
  secret_key = 'LB8dHBu8K2wG65FCuAE534KmaOGhH8pBCef0Xy8Z60o';

  getPhoto() {
    return this.http.get<ImageUrl>('https://api.unsplash.com/photos/random', { headers: {
        Authorization: 'Client-ID whBF28BH0LS_birX-2HSvf3WSJQgHiRVbI2wvxyT6WA'
      } 
    });
  }
}
