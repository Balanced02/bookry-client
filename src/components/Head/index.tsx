import React from 'react';

export default function Head({ title = 'Home' }: { title: string }) {
  return <title>Bookry | {title}</title>;
}
