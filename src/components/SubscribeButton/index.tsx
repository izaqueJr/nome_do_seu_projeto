import React from "react";
import styles from './styles.module.scss' 
import { useSession, signIn } from 'next-auth/react';
import { getStripeJs } from "../../services/stripe.js";
import { api } from './../../services/api';
import { route } from "next/dist/server/router";
import { useRouter } from 'next/router';
interface SubsribeButtonProps {
    priceId: string;
}

const SubsribeButton = ({ priceId } : SubsribeButtonProps) => {
    const { data: session } = useSession()
    const router = useRouter()
    async function handleSubscribe() {
        if (!session) {
          signIn('github')
          return
        }
        
        if(session.activeSubscription) {
          router.push('/posts')
          return
        }

        try {
          const response = await api .post('/subscribe')
    
          const { sessionId } = response.data
    
          const stripe = await getStripeJs()
    
          await stripe.redirectToCheckout({ sessionId })
    
        } catch (err) {
          console.log("Erro")
          alert(err.message)
        }
      }

    return (
        <button 
            type="button"
            onClick={handleSubscribe}
            className={styles.subscribeButton}
        >
            Subscribe now
        </button>

    )
}

export default SubsribeButton