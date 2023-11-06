// Tests for App.tsx

import { render, screen } from '@testing-library/react';
import App from '../App';
import { metadata } from "../mockData/metadata";

test('Renders Setup', () => {
  render(<App />);
  const linkElement = screen.getByText(/Setup/i);
  expect(linkElement).toBeInTheDocument();
});

test("Renders Movement", () => {
  render(<App />);
  const linkElement = screen.getByText(/Movement/i);
  expect(linkElement).toBeInTheDocument();
});

test("Renders Tips", () => {
  render(<App />);
  const linkElement = screen.getByText(/Tips/i);
  expect(linkElement).toBeInTheDocument();
});

test("Renders Exercise Name", () => {
  render(<App />);
  const firstExerciseName = screen.getByText(metadata[0].friendlyExerciseName);
  expect(firstExerciseName).toBeInTheDocument();
});

