import ControlPanel from "./components/ControlPanel/ControlPanel";
import styles from "./Benchmark.module.css";
import { BenchmarkProvider } from "./context/useBenchmarkContext";

const Benchmark = () => (
  <BenchmarkProvider>
    <div className={styles.wrap}>
      <div className={styles.header}>性能表现</div>
      <div className={styles.description}>
        <div className={styles.description__line}>
          Drizzle 的速度一直都很快，我们只是希望你能获得适当的基准测试体验
        </div>
        <div>
          好吧，其实并不是 Drizzle 快，只是 Drizzle 不会拖慢你的速度而已
        </div>
      </div>
      <div className={styles.charts}>
        <ControlPanel />
        <div className={styles.bottom}>
          <a href="/benchmarks" className={styles["how-it-works"]}>
            它是如何工作的？
          </a>
          <div>|</div>
          <a
            href="https://github.com/drizzle-team/drizzle-benchmarks"
            target="_blank"
            rel="nofollow noreferrer"
            className={styles.github}
          >
            在 Github 上打开 ↗︎
          </a>
        </div>
      </div>
    </div>
  </BenchmarkProvider>
);

export default Benchmark;
