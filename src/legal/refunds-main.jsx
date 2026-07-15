import React from 'react'
import ReactDOM from 'react-dom/client'
import LegalLayout from './LegalLayout.jsx'
import { CONTACT_EMAIL, FREE_UNTIL_LABEL, PRICE_MONTHLY, PRICE_YEARLY } from '../anim.js'
import '../index.css'

function Refunds() {
  return (
    <LegalLayout title="Refunds & Cancellation" updated="16 July 2026">
      <p className="legal-intro">
        Billing on Opsy OS is deliberately simple — one Pro plan ({PRICE_MONTHLY}/month or{' '}
        {PRICE_YEARLY}/year), processed by Dodo Payments as merchant of record. This page covers
        how cancelling and refunds work, in plain language.
      </p>

      <h2>During the free window</h2>
      <p>
        Until <strong>{FREE_UNTIL_LABEL}</strong>, every workspace is completely free — there is
        nothing to cancel and nothing to refund. No card is collected at sign-up, and nothing is
        charged automatically when the window ends: if you don&rsquo;t subscribe, your workspace
        simply goes read-only, with your data intact and exportable.
      </p>

      <h2>Cancelling a subscription</h2>
      <ul>
        <li>You can cancel anytime from Settings → Plan, or by emailing us.</li>
        <li>Cancellation takes effect at the end of your current billing period — you keep full access until then.</li>
        <li>After that, your workspace goes read-only. Nothing is deleted, and you can resubscribe whenever you like.</li>
        <li>Subscriptions renew automatically (monthly or yearly) until you cancel.</li>
      </ul>

      <h2>Refunds</h2>
      <ul>
        <li>
          <strong>First subscription:</strong> if Opsy OS isn&rsquo;t working out, email within{' '}
          <strong>7 days</strong> of your first charge and you&rsquo;ll get a full refund — no
          questions, no forms.
        </li>
        <li>
          <strong>Renewals:</strong> forgot to cancel before a renewal? Email within 7 days of
          the renewal charge and we&rsquo;ll sort it out fairly — an unused renewal is normally
          refunded in full.
        </li>
        <li>
          <strong>Partial periods:</strong> outside those windows, we don&rsquo;t prorate
          mid-cycle — cancelling stops the next charge and you keep access to the end of the
          period.
        </li>
      </ul>
      <p>
        Refunds are processed by Dodo Payments back to your original payment method and typically
        arrive within 5–10 business days, depending on your bank.
      </p>

      <h2>How to reach us</h2>
      <p>
        Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> from the address on your
        account with the word &ldquo;refund&rdquo; or &ldquo;cancel&rdquo; in the subject —
        it&rsquo;s read by the person who builds the product, usually within a day.
      </p>
    </LegalLayout>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Refunds />
  </React.StrictMode>,
)
