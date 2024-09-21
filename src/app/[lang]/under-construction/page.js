import styles from "@/src/styles/underConstruction.module.css";
import {getLangs} from "@/src/app/[lang]/langs";

export default async function underConstraction({params}) {
    const dict = await getLangs(params.lang)

    return (
        <>
            <main className={styles.main}>
                <section className={styles.contact}>
                    <h1 className={styles.title}>{dict['underConstruction'].title}</h1>
                    <h2 className={styles.subtitle}>
                        {dict['underConstruction'].subTitle}
                    </h2>
                </section>
            </main>
        </>
    );
}
