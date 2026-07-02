
import zipfile
import xml.etree.ElementTree as ET

try:
    with zipfile.ZipFile('/Users/firas/Documents/GitHub/ahlem copy/COHÉRENCE NEURO -Landing Page.docx', 'r') as docx:
        content = docx.read('word/document.xml')
        root = ET.fromstring(content)
        texts = [node.text for node in root.iter() if node.tag.endswith('t') and node.text]
        with open('/Users/firas/Documents/GitHub/ahlem copy/doc.txt', 'w') as f:
            f.write('\n'.join(texts))
except Exception as e:
    with open('/Users/firas/Documents/GitHub/ahlem copy/doc.txt', 'w') as f:
        f.write(str(e))
