import React, { useState } from 'react';
import type { PanelProps } from '@grafana/data';
import type { SimpleOptions } from '../types';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ width, height, options }) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Responsive font size: panel küçüldükçe yazı küçülsün
  const minSide = Math.max(Math.min(width, height), 120);
  const titleSize = Math.round(minSide / 8);   // büyük yazı
  const nameSize = Math.round(minSide / 12);   // biraz daha küçük

  const background = clicked ? '#1f2937' : options.backgroundColor || '#111827';
  const textColor = options.textColor || '#ffffff';

  return (
    <div
      style={{
        width,
        height,
        background,
        color: textColor,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        borderRadius: 12,
        boxShadow: hovered
          ? '0 0 25px rgba(59,130,246,0.7)'
          : '0 0 10px rgba(0,0,0,0.5)',
        transform: hovered ? 'scale(1.03)' : 'scale(1)',
        cursor: 'pointer',
        transition: 'all 0.2s ease-out',
        textAlign: 'center',
        padding: 16,
        boxSizing: 'border-box',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setClicked(prev => !prev)}
      title="Click to toggle highlight"
    >
      <div style={{ fontSize: titleSize, fontWeight: 600 }}>
        {options.title || 'Final Project Panel'}
      </div>
      <div style={{ marginTop: 12, fontSize: nameSize }}>
        Developed by <strong>{options.name || 'Betül Demirtaş'}</strong>
      </div>
    </div>
  );
};

