#!/usr/bin/env python3
"""Stage only public assets for static hosting and create a Direct Upload ZIP."""
from pathlib import Path
import shutil
import zipfile

ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / 'dist'
FILES = (
    'index.html', 'style.css', 'design.css', 'learning.css',
    'app.js', 'content.js', 'content-zh-HK.js', 'i18n.js', 'charts.js',
    'study-notes.txt', 'study-notes-zh-HK.txt', '_headers',
)
IMAGES = ('ltcm', 'snb', 'knight', 'buffett', 'flash', 'gme', 'spiva')

def build():
    if OUTPUT.is_symlink():
        raise RuntimeError('Refusing to replace a symlink at dist')
    if OUTPUT.exists():
        shutil.rmtree(OUTPUT)
    OUTPUT.mkdir()
    for name in FILES:
        shutil.copy2(ROOT / name, OUTPUT / name)
    (OUTPUT / 'assets' / 'art').mkdir(parents=True)
    for name in IMAGES:
        shutil.copy2(ROOT / 'assets' / 'art' / f'{name}.webp', OUTPUT / 'assets' / 'art' / f'{name}.webp')
    with zipfile.ZipFile(ROOT / 'cloudflare-site.zip', 'w', zipfile.ZIP_DEFLATED) as bundle:
        for path in sorted(OUTPUT.rglob('*')):
            if path.is_file():
                bundle.write(path, path.relative_to(OUTPUT))
    print(f'Staged {len(FILES) + len(IMAGES)} public files in {OUTPUT}')
    print(f'Cloudflare Direct Upload archive: {ROOT / "cloudflare-site.zip"}')

if __name__ == '__main__':
    build()
