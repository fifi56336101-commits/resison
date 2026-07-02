import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import { execSync } from 'child_process'

try {
  const pyScript = `
import zipfile
import xml.etree.ElementTree as ET

try:
    with zipfile.ZipFile('/Users/firas/Documents/GitHub/ahlem copy/COHÉRENCE NEURO -Landing Page.docx', 'r') as docx:
        content = docx.read('word/document.xml')
        root = ET.fromstring(content)
        texts = [node.text for node in root.iter() if node.tag.endswith('t') and node.text]
        with open('/Users/firas/Documents/GitHub/ahlem copy/doc.txt', 'w') as f:
            f.write('\\n'.join(texts))
except Exception as e:
    with open('/Users/firas/Documents/GitHub/ahlem copy/doc.txt', 'w') as f:
        f.write(str(e))
`;
  fs.writeFileSync('/Users/firas/Documents/GitHub/ahlem copy/extract.py', pyScript);
  execSync('python3 "/Users/firas/Documents/GitHub/ahlem copy/extract.py"');
} catch (e) {
  fs.writeFileSync('/Users/firas/Documents/GitHub/ahlem copy/doc.txt', e.message);
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      strict: false,
    },
  },
})
