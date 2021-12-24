
# RTSP STREAM SNAPSHOT

Real Time Streaming Protocol ile gelen yayını canvasla görüntülemek ve istenilen anda alınan
snapshotların kayıt edilmesi.



## Kurulum

Bu projeyi ayağı kaldırmak için çalıştırın

```bash
  npm install
  npm start
```

  [http://localhost:8080/](http://localhost:8080/)
# Kullanılan Kütüphaneler

| |
| :-------- |  
| `bcryptjs`|
| `ejs`|
| `express`|
| `jsonwebtoken`|
| `node-rtsp-stream`|
| `pg`|
| `pg-hstore`|
| `sequelize`|

## API Kullanımı


#### Kullanıcı Oluştur

```http
  GET /api/auth/signup
```

| Parametre | Tip     | 
| :-------- | :------- | 
| `username` | `string` | 
| `email` | `string` |
| `password` | `string` |

#### Kullanıcı Detay

```http
  GET /api/user/${id}
```
| Parametre | Tip     | Açıklama                |
| :-------- | :------- | :------------------------- |
| `x-access-token` | `string` | **Gerekli**. API anahtarınız. |
| `id`      | `string` | **Gerekli**. Çağrılacak öğenin anahtar değeri |

#### Kullanıcı Güncelle

```http
  PUT /api/user/${id}
```
| Parametre | Tip     | Açıklama                |
| :-------- | :------- | :------------------------- |
| `x-access-token` | `string` | **Gerekli**. API anahtarınız. |
| `id`      | `string` | **Gerekli**. Çağrılacak öğenin anahtar değeri |

#### Kullanıcı Sil

```http
  DELETE /api/user/${id}
```
| Parametre | Tip     | Açıklama                |
| :-------- | :------- | :------------------------- |
| `x-access-token` | `string` | **Gerekli**. API anahtarınız. |
| `id`      | `string` | **Gerekli**. Çağrılacak öğenin anahtar değeri |

#### Kullanıcı Giriş

```http
  POST /api/auth/signin
```
| Parametre | Tip     | 
| :-------- | :------- | 
| `username` | `string` | 
| `password`      | `string` |

#### Token Kontroll

```http
  GET /api/token
```
| Header | Tip     | 
| :-------- | :------- | 
| `x-access-token` | `string` | 
