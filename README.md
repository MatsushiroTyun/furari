# furari

# フォルダ構成
  - appディレクトリ
    - ルートページに関することを記載
    - サーバーコンポーネントのみにする
    - テキスト、見た目のみのDOM
  - features
    - ロジックとコンポーネントをまとめたもの
    - common
      - 共通部分
    - routes
      - 特定のページで使うもの
  - component
      - ロジックがない共通コンポーネント
  - hooks
      - 共通ロジックのうち、React Hooksがあるもの
  - utils
      - 共通ロジックのうち、React Hooksがないもの
  - constants
      - 定数を定義したファイル