import sys
from bs4 import BeautifulSoup
s=BeautifulSoup(open(sys.argv[1]).read(),'lxml')
m=s.find('main') or s.find(id='main') or s.body
for t in m(['script','style','noscript','svg']): t.decompose()
for el in m.find_all(['h1','h2','h3','h4','h5','h6','p','li','img','a','blockquote','figcaption','span','form','input','textarea','button','iframe']):
  if el.name=='img': print('IMG',el.get('data-src') or el.get('src'),'|',el.get('alt',''))
  elif el.name in('a',):
    if el.get_text(strip=True): print('LINK',el['href'] if el.has_attr('href') else '', '|',el.get_text(' ',strip=True))
  elif el.name in('form','input','textarea','button','iframe'): print(el.name.upper(), dict((k,v) for k,v in el.attrs.items() if k in('action','name','type','placeholder','src','value')))
  elif el.name=='span': continue
  else:
    tx=el.get_text(' ',strip=True)
    if tx and not el.find_parent(['p','li']) : print(el.name.upper()+':',tx)
