import styles from './Heading.module.css';

type HeadingProps = {
  readonly children: React.ReactNode;
};
export function Heading({ children }: HeadingProps) {
  return (
    <div>
      <h1 className={styles.heading}>{children}</h1>
    </div>
  );
}
