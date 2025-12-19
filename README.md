# Küre Web Automation

Bu proje, Küre Ansiklopedi web sitesinde otomatik görevler gerçekleştirmek için Puppeteer tabanlı bir web otomasyon aracıdır

## Özellikler

- **Browser Yönetimi**: Puppeteer ile tarayıcı kontrolü ve sayfa yönetimi
- **Caption Kontrol**: Makale başlıklarının doğruluğunu kontrol etme
- **Resim Arama**: Stok resim bulma ve seçme
- **Gemini Entegrasyonu**: Google Gemini API ile metin işleme

## Gereksinimler

- Node.js 14+
- npm veya yarn

## Kurulum

```bash
npm install
```

## Dosya Yapısı

```
kure-web-automation/
├── main.js                 # Ana otomasyon betiği
├── caption_list.txt        # Başlıklar listesi
├── package.json            # Proje bağımlılıkları
└── utils/
    ├── browser.mjs         # Browser sınıfı (Puppeteer)
    ├── check_caption.js    # Başlık kontrol fonksiyonları
    ├── find_stock_image.js # Stok resim bulma fonksiyonları
    └── gemini_module.js    # Gemini API modülü
```

## Kullanım

```bash
node main.js
```

Veya browser modülünü test etmek için:

```bash
node utils/browser.mjs
```

## Bağımlılıklar

- **puppeteer**: Web otomasyon ve tarayıcı kontrolü

## Lisans

ISC

## Yazar

Eren Akkoç
