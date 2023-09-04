import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import Image from 'next/image';
import { getSortedPostsData } from "../lib/posts";
import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
        allPostsData
    }
  }
}

// export async function getServerSideProps(context) {
//     return {
//         props: {
//             date: new Date().toString()
//         }
//     }
// }

const YourProfileComponent = () => (
    <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
    />
);

export default function Home({ allPostsData }) {
  return (
      <Layout home>
        {/* Keep the existing code here */}

        {/* Add this <section> tag below the existing <section> tag */}
        {/*  current date: {date}*/}
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} id={id} key={id}>
                    <Link href={`/posts/${id}`}>{title}</Link>
                    <br />
                    <small className={utilStyles.lightText}>
                        <Date dateString={date}/>
                    </small>
                </li>
            ))}
          </ul>
        </section>
      </Layout>
  );
}

// export default function Home({ date }) {
//     return (
//         <Layout home>
//             {/* Keep the existing code here */}
//
//             {/* Add this <section> tag below the existing <section> tag */}
//             current date: {date}
//         </Layout>
//     );
// }
