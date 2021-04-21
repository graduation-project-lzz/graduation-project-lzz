import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
    return (
        <div className=" border lg-w-9/12 ">
            <header className="flex  justify-between m-4">
                <div className="text-purple">
                    <Image src={'/u89.png'} width={400} height={20}/>
                    {/*广州市人力资源与社会保障局*/}
                </div>
                <div className="hidden md:block">
                    事项咨询
                </div>
                <div className="hidden md:block">
                    查询你要找的事项
                </div>
            </header>

            <main className="border-gray-400 text-lg
            flex flex-col
            lg-w-96
            bg-gray

            ">
                <section className="border bg-gradient-to-r">
                    <div className="w-full bg-bottom">
                        <Image src="/u75.png" height={200} width={800} layout="responsive" className="bg-center z-0"
                               objectPosition="inherit"/>
                    </div>
                </section>
                <section className="flex justify-center text-center   text-base space-x-4 my-4">
                    <div>个人业务</div>
                    <div>法人业务</div>
                    <div>机关事业单位</div>
                </section>
                <section className="flex justify-center text-center items-start  flex-wrap border "
                >
                    <div className={styles.card}>
                        <span>
                            <Image src={'/u46.png'} height={60} width={60}/>
                        </span>
                        人才服务
                    </div>
                    <div className={styles.card}>
                        <span>
                            <Image src={'/u46.png'} height={60} width={60}/>
                        </span>
                        创新创业
                    </div>
                    <div className={styles.card}>
                        <span>
                            <Image src={'/u46.png'} height={60} width={60}/>
                        </span>
                        就业帮扶
                    </div>
                    <div className={styles.card}><span>
                            <Image src={'/u46.png'} height={60} width={60}/>
                        </span>用工招聘
                    </div>
                    <div className={styles.card}><span>
                            <Image src={'/u46.png'} height={60} width={60}/>
                        </span>劳动保障
                    </div>
                    <div className={styles.card}><span>
                            <Image src={'/u46.png'} height={60} width={60}/>
                        </span>劳动保障
                    </div>
                    {/*<div>社会保险</div>*/}
                    {/*<div>人事考试</div>*/}
                </section>


            </main>

        </div>
    );
}
