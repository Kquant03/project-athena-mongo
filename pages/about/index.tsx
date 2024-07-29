import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import styles from '../../styles/About.module.css';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../../utils/animations';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Head>
          <title>About Operation Athena</title>
          <meta name="description" content="Learn more about Operation Athena and our mission to advance AI reasoning capabilities" />
        </Head>
        <section className={styles.aboutSection}>
          <div className={styles.content}>
            <h1>An Initiative to Improve Reasoning Capabilities in Large Language Models</h1>
            <p>
              <p>
  Our mission is to create a master reference document that will serve as a valuable resource for everyone involved in the AI community. We hope to eventually use this as a way to improve the experience of working with this technology for anyone who may need it. The main idea behind this website is to propose solutions to a very important problem that current AI systems are currently facing. This problem is a lack of common sense and reasoning. In response to this, Nous Research <a href="https://github.com/NousResearch/Open-Reasoning-Tasks/tree/main" target="_blank" rel="noopener noreferrer">proposed an initiative</a> in a thread in <a href="https://discord.gg/nousresearch" target="_blank" rel="noopener noreferrer">their Discord server</a>, to gather all different kinds of tasks that could be classified as reasoning tasks. I think this is a great idea, and in support of it, I've created this website for you all to share your ideas concerning the improvement of reasoning in Large Language models. We are also accepting any synthetic reasoning tasks (as in generated by LLMs) onto the site, as long as it's tagged with Synthetic. This database can serve as a guide for anyone looking to test out ideas in the space.
</p>
            </p>
            <h2>Our Objectives</h2>
            <ul>
              <li>Gather a large selection of categories in terms of reasoning.</li>
              <li>Curate tasks in order to create reasoning data for.</li>
              <li>Find cases where AIs struggle in terms of common sense or reasoning.</li>
              <li>Explore frameworks that enhance reasoning capabilities for AI.</li>
              <li>Foster collaboration among AI researchers and enthusiasts.</li>
            </ul>
            <h2>Task Categories</h2>
            <p>
              We're collecting a wide range of task categories, including but not limited to:
            </p>
            <ul>
              <li>Mathematical Word Problems</li>
              <li>Identifying Properties of Entities</li>
              <li>Systems Thinking Frameworks</li>
              <li>Out-of-Distribution Reasoning</li>
              <li>Pattern Recognition in Inconsistent Data</li>
              <li>Adapting to Subtle "Wrong" Patterns</li>
            </ul>
              <p>
              Feel free to make your own categories if your own contribution, there's many in the list already from Nous Research.
            </p>
            <h2>Contribute to Operation Athena</h2>
            <p>
              We invite everyone to contribute to this initiative. Diverse perspectives are what can cause the most growth. By participating, you can:
            </p>
            <ul>
              <li>Share your unique perspectives on reasoning challenges</li>
              <li>Help identify edge cases that push AI capabilities</li>
              <li>Contribute to the advancement of AI reasoning skills</li>
            </ul>
            <p>
              Together, we can create a valuable resource that drives innovation in AI reasoning and helps develop more sophisticated, adaptable, and capable AI systems.
            </p>
          </div>
        </section>
        <footer className={styles.footer}>
          <div className={styles.finePrintContainer}>
            <p className={styles.finePrint}>
              If you need support with the website or have any questions, please contact me by email at <a href="mailto:kquant@repleteai.com">kquant@repleteai.com</a> or reach out to me on Discord at <a href="https://discord.gg/awyCNx3nnw" target="_blank" rel="noopener noreferrer">my server</a>.
            </p>
          </div>
        </footer>
      </motion.div>
    </Layout>
  );
};

export default AboutPage;
