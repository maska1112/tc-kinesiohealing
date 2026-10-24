import sys
from bs4 import BeautifulSoup, NavigableString, Tag
s=BeautifulSoup(open(sys.argv[1]).read(),'lxml')
b=s.body
for t in b(['script','style','noscript','svg','template']): t.decompose()
out=[]
BLOCK={'p','div','h1','h2','h3','h4','h5','h6','li','section','br','ul','ol','blockquote','figure','article','header','footer','nav','tr','td'}
def walk(n):
  for c in n.children:
    if isinstance(c,NavigableString):
      t=' '.join(str(c).split())
      if t: out.append(('T',t))
    elif isinstance(c,Tag):
      if c.name=='img':
        src=c.get('data-src') or c.get('src') or ''
        if 's.w.org' in src: out.append(('T',c.get('alt','')))
        else: out.append(('I',src))
        continue
      if c.name in BLOCK: out.append(('B',c.name))
      if c.name=='a' and c.get('href'): out.append(('A',c['href']))
      walk(c)
      if c.name in BLOCK: out.append(('B','/'))
walk(b)
line=''
res=[]
for k,v in out:
  if k=='T': line+=(' ' if line and not line.endswith(' ') else '')+v
  elif k=='B':
    if line.strip(): res.append(line.strip()); line=''
  elif k=='I':
    if line.strip(): res.append(line.strip()); line=''
    res.append('[IMG '+v+']')
  elif k=='A': line+=' {'+v+'} '
if line.strip(): res.append(line.strip())
prev=None
for r in res:
  if r!=prev: print(r)
  prev=r
