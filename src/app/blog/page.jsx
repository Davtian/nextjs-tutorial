import React from "react";
import styles from "./page.module.css";

async function getData() {
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
     Blog
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magni consequatur sunt beatae quasi dolore nam exercitationem, a quas tenetur dignissimos aperiam, porro debitis iusto? Impedit nam obcaecati mollitia architecto!
   
    </div>
  );
};

export default Blog;
