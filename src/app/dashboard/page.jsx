"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {


  const session = useSession();

  const router = useRouter();
  

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      </div>
    );
  }
};

export default Dashboard;
