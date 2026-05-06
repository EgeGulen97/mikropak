# Dijital baskı video poster’ı (isteğe bağlı)

`public/images/machines/digital-printing-video-frame.jpg` şu an **bu YouTube videosunun** (`kS1cMA63Pzs`) resmi önizleme görselidir (repoda yerel dosya).

Belirli bir saniyeden kare almak için (ortamda `yt-dlp` ve `ffmpeg` gerekir):

```bash
URL="https://www.youtube.com/watch?v=kS1cMA63Pzs"
OUT="public/images/machines/digital-printing-video-frame.jpg"
ffmpeg -y -ss 00:00:45 -i "$(yt-dlp -f 'bv*[height<=720]' -g "$URL")" -vframes 1 -q:v 2 "$OUT"
```

`-ss` süresini üretim görüntüsüne göre ayarlayın; çıktıyı aynı dosya adıyla kaydedin.
