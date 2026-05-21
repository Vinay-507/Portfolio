import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function copyToClipboard(value) {
  if (!navigator?.clipboard) return Promise.reject(new Error('Clipboard unavailable'));
  return navigator.clipboard.writeText(value);
}
