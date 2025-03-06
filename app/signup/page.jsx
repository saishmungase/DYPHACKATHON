"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { Axios } from "axios";

export default function SignupPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    });

    const onSignup = async () => {
    }


  return (
    <div>
    </div>
  )
}
