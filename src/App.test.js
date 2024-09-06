import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import ApiData from './components/ApiData';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('fetches and displays data correctly', async () => {
  render(<ApiData />);
  const listItem = await waitFor(() => screen.getByText(/sunt aut facere repellat provident occaecati excepturi optio reprehenderit/i));
  expect(listItem).toBeInTheDocument();
  const listItems = await waitFor(() => screen.getAllByRole('listitem'));
  expect(listItems).toHaveLength(10);
});

test('displays loading indicator', () => {
  render(<ApiData />);
  const loadingElement = screen.getByText(/Loading.../i);
  expect(loadingElement).toBeInTheDocument();
});

test('displays error message on fetch error', async () => {
  global.fetch = jest.fn(() =>
    Promise.reject(new Error('Network response was not ok'))
  );
  render(<ApiData />);
  const errorElement = await waitFor(() => screen.getByText(/Error: Network response was not ok/i));
  expect(errorElement).toBeInTheDocument();
});

test('displays only 10 posts', async () => {
  render(<ApiData />);
  const listItems = await waitFor(() => screen.getAllByRole('listitem'));
  expect(listItems).toHaveLength(10);
});
