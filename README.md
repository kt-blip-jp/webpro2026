# Task Manager Web Application

## 概要

本プロジェクトは、Webプログラミングの授業課題として開発したタスク管理アプリケーションです。

バックエンドは **TypeScript・Node.js・Express・PostgreSQL** を用いて実装し、**3層アーキテクチャ（Controller / Service / Repository）** を採用しています。

REST APIを利用してタスクの作成・取得・更新・削除（CRUD操作）を行うことができます。また、Renderへデプロイを行い、クラウド上で動作するWeb APIとして公開しています。

フロントエンドの詳細は以下のgithubに公開しています。
https://github.com/kt-blip-jp/webpro2026-frontend

Renderと連携させ、以下のリンクからブラウザ上で操作できるWebアプリケーションとして利用できます。
https://webpro2026-frontend.onrender.com/

---

## 主な機能

* タスク一覧の取得
* タスクの新規作成
* タスク情報の更新
* タスクの削除
* PostgreSQLによるデータ管理
* REST APIの実装
* Renderによるデプロイ

---

## 使用技術

### バックエンド

* TypeScript
* Node.js
* Express
* PostgreSQL
* pg
* dotenv

### 開発環境・ツール

* Visual Studio Code
* Git
* GitHub
* Thunder Client
* pgAdmin 4

### デプロイ

* Render
* Render PostgreSQL

---

## ディレクトリ構成

```text
backend/
├── src/
│   ├── config/
│   │   └── database.ts
│   ├── controllers/
│   ├── models/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   └── app.ts
├── package.json
├── tsconfig.json
└── .env
```

---

## API一覧

| メソッド   | エンドポイント      | 説明       |
| ------ | ------------ | -------- |
| GET    | `/tasks`     | タスク一覧を取得 |
| POST   | `/tasks`     | タスクを新規作成 |
| PUT    | `/tasks/:id` | タスクを更新   |
| DELETE | `/tasks/:id` | タスクを削除   |

---

## データベース

PostgreSQLを使用しています。

### tasksテーブル

| カラム名            | 内容     |
| --------------- | ------ |
| id              | タスクID  |
| title           | タスク名   |
| description     | タスクの説明 |
| deadline        | 締切日    |
| estimated_hours | 予定作業時間 |
| actual_hours    | 実作業時間  |
| priority        | 優先度    |
| completed       | 完了状態   |
| created_at      | 作成日時   |

---

## 動作確認

バックエンドAPIはRenderへデプロイ済みです。

主なエンドポイント

```
GET /tasks
POST /tasks
PUT /tasks/:id
DELETE /tasks/:id
```

Thunder Clientを使用してCRUD操作の動作確認を行いました。

---

## フロントエンドの実装

フロントエンドでは HTML / CSS / TypeScript / Reactを用いて、以下の機能を実装しました。

* タスク検索機能
* タスクの並び替え
* カレンダー表示
* 統計情報・グラフ表示
* レスポンシブデザインへの対応

---

## 制作目的

Webアプリケーション開発を通して、以下の技術を学習することを目的としています。

* REST APIの設計・実装
* 3層アーキテクチャによる開発
* PostgreSQLとのデータ連携
* Git / GitHubによるバージョン管理
* Renderを利用したクラウドデプロイ

---


English below ↓

# Task Manager Web Application

## Overview

This project is a task management web application developed as part of a Web Programming course.

The application follows a **three-layer architecture** (Controller, Service, Repository) and provides a RESTful API for managing tasks. Users can create, view, update, and delete tasks stored in a PostgreSQL database.

The backend has been deployed on **Render**, allowing the API to be accessed over the Internet.

---

## Features

* Display all tasks
* Create a new task
* Update existing tasks
* Delete tasks
* Store task information in PostgreSQL
* RESTful API implementation
* Cloud deployment using Render

---

## Technologies Used

### Backend

* TypeScript
* Node.js
* Express
* PostgreSQL
* pg
* dotenv

### Development Tools

* Visual Studio Code
* Git
* GitHub
* Thunder Client
* pgAdmin 4

### Deployment

* Render
* Render PostgreSQL

---

## Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.ts
│   ├── controllers/
│   ├── models/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   └── app.ts
├── package.json
├── tsconfig.json
└── .env
```

---

## API Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/tasks`     | Get all tasks     |
| POST   | `/tasks`     | Create a new task |
| PUT    | `/tasks/:id` | Update a task     |
| DELETE | `/tasks/:id` | Delete a task     |

---

## Database

The application uses PostgreSQL.

Main table:

**tasks**

| Column          | Description             |
| --------------- | ----------------------- |
| id              | Task ID                 |
| title           | Task title              |
| description     | Task description        |
| deadline        | Deadline                |
| estimated_hours | Estimated working hours |
| actual_hours    | Actual working hours    |
| priority        | Priority level          |
| completed       | Completion status       |
| created_at      | Created date            |

---

## Deployment

The backend API is deployed on Render.

Example endpoint:

```
GET /tasks
```

---

## Future Improvements

The following features are planned for future development:

* Frontend implementation (HTML/CSS/TypeScript or React)
* Task search
* Task filtering
* Calendar view
* Data visualization (completion rate, statistics)
* Responsive design

---

## Author

Developed as a university Web Programming project.
