# TV Şovları Uygulaması

TVMaze API'sini kullanarak TV şovları bilgilerini gösteren, Nuxt 3 ile geliştirilmiş modern bir web uygulaması. Uygulama, şov listeleme, arama işlevselliği ve detaylı şov bilgileri sunar.

## Özellikler

- 📺 TV şovlarını görüntüleme
- 🔍 Gerçek zamanlı arama
- 🏷️ Türe göre filtreleme
- 📱 Duyarlı tasarım (Responsive)
- ⚡ İyimser UI ile hızlı yükleme
- 🎨 Tailwind CSS ile modern arayüz

## Teknoloji Yığını

- [Nuxt 3](https://nuxt.com/) - Vue.js Framework (Uygulamayı SSR ve SEO ihtiyaçlarına hazır hale getirmek için)
- [Pinia](https://pinia.vuejs.org/) - Durum Yönetimi
- [Tailwind CSS](https://tailwindcss.com/) - Stillendirme (Build'i düşürmek ve daha hızlı development yapmak için)
- [Vitest](https://vitest.dev/) - Test Framework'ü

## Gereksinimler

- Node.js (v16 veya üstü)
- npm veya yarn

## Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/dijwarbozyel/test-case
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Kök dizinde bir `.env` dosyası oluşturun ve ekleyin:
```env
NUXT_PUBLIC_API_BASE=https://api.tvmaze.com/
```

## Geliştirme

Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

Uygulama `http://localhost:3000` adresinde erişilebilir olacaktır.

## Test

Test paketini çalıştırın:

```bash
# Testleri çalıştır
npm run test

# Kapsama raporuyla testleri çalıştır
npm run test:coverage
```

## Derleme

Uygulamayı üretim için derleyin:

```bash
# Derleme
npm run build

# Üretim derlemesini önizleme
npm run preview
```

## Proje Yapısı

```
├── components/          # Vue bileşenleri
├── pages/              # Uygulama sayfaları
├── stores/             # Pinia mağazaları
├── types/              # TypeScript tipleri
├── tests/              # Test dosyaları
├── public/             # Statik varlıklar
└── nuxt.config.ts      # Nuxt yapılandırması
```

## Bağımlılıklar

### Çekirdek
- `vue` - ^3.4.21
- `nuxt` - ^3.14.0
- `pinia` - ^2.1.7
- `@pinia/nuxt` - ^0.5.1
- `vue-router` - ^4.3.0

### Geliştirme
- `@nuxtjs/tailwindcss` - ^6.12.2
- `@tailwindcss/typography` - ^0.5.15
- `vitest` - ^2.1.4
- `@vue/test-utils` - ^2.4.6
- `@vitest/coverage-v8` - ^2.1.4
- `happy-dom` - ^15.9.0

### Yardımcı Araçlar
- `lodash.debounce` - ^4.0.8

## Komutlar

- `dev` - Geliştirme sunucusunu başlat
- `build` - Üretim için derle
- `generate` - Statik site oluştur
- `preview` - Üretim derlemesini önizle
- `test` - Testleri çalıştır
- `test:coverage` - Kapsama raporuyla testleri çalıştır


## Lisans

Bu proje MIT Lisansı altında lisanslanmıştır - detaylar için [LICENSE](LICENSE) dosyasına bakın.