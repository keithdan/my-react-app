import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ApiData from './ApiData';

describe('ApiData Component', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }]),
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('fetches and displays data correctly', async () => {
    render(<ApiData />);
    await waitFor(() => expect(screen.getByText('Post 1')).toBeInTheDocument());
    expect(screen.getByText('Post 2')).toBeInTheDocument();
  });

  test('displays loading indicator while fetching data', () => {
    render(<ApiData />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('displays error message if data fetch fails', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.reject(new Error('Network response was not ok'))
    );
    render(<ApiData />);
    await waitFor(() => expect(screen.getByText('Error: Network response was not ok')).toBeInTheDocument());
  });
});
