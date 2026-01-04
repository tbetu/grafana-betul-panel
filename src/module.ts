import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './components/SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions(builder => {
  return builder
    .addTextInput({
      path: 'title',
      name: 'Title',
      description: 'Main title of the panel',
      defaultValue: 'Final Project Panel',
    })
    .addTextInput({
      path: 'name',
      name: 'Student name',
      description: 'Your name shown on the panel',
      defaultValue: 'Betül Demirtaş',
    })
    .addColorPicker({
      path: 'textColor',
      name: 'Text color',
      defaultValue: '#ffffff',
    })
    .addColorPicker({
      path: 'backgroundColor',
      name: 'Background color',
      defaultValue: '#111827',
    });
});

