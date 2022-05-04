/* eslint-disable @next/next/no-img-element */
import React from "react";
import SignInButton from "../sigInButton";
import styles from './styles.module.scss' 
import { ActiveLink } from './../ActiveLink/index';


const Header = () => {


    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="logo" />

                <nav> 

                    <ActiveLink href="/" activeClassName={styles.active}>
                         <a >Home</a>
                    </ActiveLink>
                    
                    <ActiveLink href="/posts" prefetch activeClassName={styles.active}>
                         <a >Posts</a>
                    </ActiveLink>
                </nav>

                <SignInButton />
            </div>
        </header>
    );
}

export default Header 