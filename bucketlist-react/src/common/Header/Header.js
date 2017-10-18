import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // ==========================
Color scheme for now:

main- color: #F34213 
secondary-color: #3E2F5B
tertiary-color: #E0CA3C
sec-color-2: #136F63
tert-color-2: #000F08
==========================
  'header-container': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'background': '#F34213',
    'padding': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }],
    'fontFamily': 'Verdana, Geneva, Tahoma, sans-serif',
    'color': '#3e2f5b',
    'textAlign': 'center',
    'fontWeight': '500'
  },
  'p': {
    'color': '#3e2f5b',
    'textAlign': 'center',
    'fontFamily': 'Verdana, Geneva, Tahoma, sans-serif',
    'animation': 'flash-paragraph 3s infinite'
  }
});
