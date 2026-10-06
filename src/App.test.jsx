import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

const sections = [
  'Career Objective',
  'Senior Design Project',
  'Projects',
  'Internships',
  'Résumé',
  'General Education Reflection',
  'Cumulative Reflection',
  'Ethics Paper',
];

describe('App', () => {
  it('renders every portfolio section', () => {
    render(<App />);
    for (const title of sections) {
      expect(screen.getByRole('heading', { level: 2, name: title })).toBeTruthy();
    }
  });
});
