import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, it, expect } from 'vitest';
import App from './App';

const sections = ['Career Objective', 'Senior Design Project', 'Projects', 'Internships', 'Résumé', 'Reflections'];
const papers = ['General Education Reflection', 'Cumulative Reflection', 'Ethics Paper'];

describe('App', () => {
  afterEach(cleanup);

  it('renders every portfolio section', () => {
    render(<App />);
    for (const title of sections) {
      expect(screen.getByRole('heading', { level: 2, name: title })).toBeTruthy();
    }
    for (const title of papers) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeTruthy();
    }
  });

  it('shows the name and contact info on the front page', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Hrushi Bhatt');
    expect(screen.getAllByRole('link', { name: /hbhatt10@iastate.edu/ }).length).toBeGreaterThan(0);
  });
});
