import { Button, Textarea } from '@mantine/core';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main>
      <div className={styles.post_form}>
        <Textarea className={styles.text_area} placeholder="投稿内容を入力" />
        <Button className={styles.post_button} variant="outline">投稿</Button>
      </div>
    </main>
  );
}
