import styles from './styles.module.css';

type GenericHtmlProps = {
  readonly children: React.ReactNode;
};

export function GenericHtml({ children }: GenericHtmlProps) {
  return <div className={styles.genericHtml}>{children}</div>;
}
