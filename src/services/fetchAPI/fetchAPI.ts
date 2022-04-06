/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line import/no-unresolved
import { FetchReturns, FetchAPIHeader } from '../../types/fetch';

export default class FetchAPI<T> {
  private readonly apiURL: string;

  private headers: FetchAPIHeader;

  constructor(apiURL: string) {
    this.apiURL = apiURL;

    this.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: '',
    };
  }

  async get(complementUrl: string): Promise<FetchReturns<T>> {
    const result = await fetch(`${this.apiURL}/${complementUrl}`, {
      method: 'GET',
      headers: { ...this.headers },
    });

    const data = await result.json() as T;

    return {
      statusCode: result.status,
      data,
    };
  }

  async post(complementUrl: string, info: any): Promise<FetchReturns<T>> {
    const result = await fetch(`${this.apiURL}/${complementUrl}`, {
      method: 'POST',
      headers: { ...this.headers },
      body: this.headers['Content-Type'] === undefined ? info : JSON.stringify(info),
    });

    const data = await result.json() as T;

    return {
      statusCode: result.status,
      data,
    };
  }

  async delete(complementUrl: string): Promise<FetchReturns<T>> {
    const result = await fetch(`${this.apiURL}/${complementUrl}`, {
      method: 'DELETE',
      headers: { ...this.headers },
    });

    const data = await result.json() as T;

    return {
      statusCode: result.status,
      data,
    };
  }

  async put(complementUrl: string, info: any): Promise<FetchReturns<T>> {
    const result = await fetch(`${this.apiURL}/${complementUrl}`, {
      method: 'PUT',
      headers: { ...this.headers },
      body: this.headers['Content-Type'] === undefined ? info : JSON.stringify(info),
    });

    const data = await result.json() as T;

    return {
      statusCode: result.status,
      data,
    };
  }

  setContentType(content: string): void {
    if (content === 'multipart/form-data') {
      delete this.headers['Content-Type'];
    } else {
      this.headers['Content-Type'] = content;
    }
  }

  setAuthHeader(content: string): void {
    this.headers = {
      ...this.headers,
      Authorization: content,
    };
  }

  getHeader(): FetchAPIHeader {
    return this.headers;
  }
}
