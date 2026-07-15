import React from 'react'
import ReactDOM from 'react-dom/client'
import LegalLayout from './LegalLayout.jsx'
import { FREE_UNTIL_LABEL, PRICE_MONTHLY, PRICE_YEARLY } from '../anim.js'
import '../index.css'

function Terms() {
  return (
    <LegalLayout title="Terms of Service" updated="16 July 2026">
      <p className="legal-intro">
        These terms govern your use of Opsy OS (opsyos.com and app.opsyos.com), built and
        operated by Dinkar Sable, Pune, India (&ldquo;I&rdquo;, &ldquo;we&rdquo;). They&rsquo;re
        written to be read, not skimmed past — the plain-language summaries are part of the terms.
      </p>

      <h2>1. What Opsy OS is</h2>
      <p>
        Opsy OS is an invoicing and practice-management tool for freelancers: clients, projects,
        tasks, notes, invoices, receipts, and a read-only client portal, in one workspace. It is
        not accounting software, not a payment processor, not a CRM, and not a team tool — and
        the sections below spell out what that means for you.
      </p>

      <h2>2. Your account</h2>
      <p>
        You sign in with a Google account, and a single-owner workspace is created for you on
        first sign-in. You&rsquo;re responsible for what happens in your workspace and for keeping
        access to your Google account secure. You must be able to form a binding contract to use
        Opsy OS (18+ or the age of majority where you live).
      </p>

      <h2>3. Your content is yours</h2>
      <p>
        Everything you put into your workspace — client records, projects, notes, invoices —
        belongs to you. You grant us only the license needed to store, process, and display it in
        order to run the service. You can export your data at any time and request deletion of
        your account (see the <a href="/privacy">Privacy Policy</a>).
      </p>

      <h2>4. Invoices are between you and your client</h2>
      <p>
        Opsy OS helps you create, number, send, and track invoices — but every invoice is issued
        by you, to your client. We are not a party to it, we don&rsquo;t process or hold the
        payment, and we take no cut. Clients pay you directly (for example by UPI or bank
        transfer), and you record the receipt. You alone are responsible for the accuracy of your
        invoices and for your own tax and regulatory compliance — Opsy OS deliberately has no
        GST, TDS, or other tax logic.
      </p>

      <h2>5. The client portal</h2>
      <p>
        You may grant your clients access to a read-only portal showing their own invoices and
        projects. You control who gets access and are responsible for granting it appropriately
        and keeping portal credentials sensible. Portal visitors use the portal under these same
        terms.
      </p>

      <h2>6. Free window, then a paid plan</h2>
      <p>
        Every workspace has full, free access until <strong>{FREE_UNTIL_LABEL}</strong>. After
        that date, workspaces without a subscription become read-only: your data stays visible
        and exportable, but creating and editing pauses until you subscribe. There is no
        automatic charge — going read-only is the only thing that happens if you do nothing.
      </p>
      <p>
        The paid plan is Pro: {PRICE_MONTHLY}/month or {PRICE_YEARLY}/year. Subscriptions are
        processed by <strong>Dodo Payments</strong> as merchant of record — your payment is made
        to them, and applicable taxes are handled at checkout. Subscriptions renew automatically
        until cancelled; cancellation and refunds are covered in the{' '}
        <a href="/refunds">Refunds &amp; Cancellation policy</a>.
      </p>

      <h2>7. Acceptable use</h2>
      <p>
        Don&rsquo;t use Opsy OS to break the law, to issue fraudulent invoices, to store content
        you have no right to store, or to probe, overload, or disrupt the service. Workspaces
        used this way can be suspended or terminated.
      </p>

      <h2>8. Availability and changes</h2>
      <p>
        Opsy OS is a living product built by one person: features evolve, and occasional downtime
        can happen. We&rsquo;ll be careful with your data, but the service is provided
        <strong> &ldquo;as is&rdquo;</strong>, without warranties of uninterrupted availability
        or fitness for a particular purpose. Back up anything you can&rsquo;t afford to lose —
        the export exists for a reason.
      </p>

      <h2>9. Limitation of liability</h2>
      <p>
        To the fullest extent the law allows, our total liability for any claim connected to Opsy
        OS is capped at the amount you paid for the service in the 12 months before the claim
        arose (which, during the free window, is zero). We are not liable for indirect losses —
        lost profits, lost business, or disputes between you and your clients.
      </p>

      <h2>10. Termination</h2>
      <p>
        You can stop using Opsy OS and request deletion at any time. We may suspend or terminate
        workspaces that violate these terms, with notice where practical. On termination
        you&rsquo;ll have a reasonable opportunity to export your data unless the law requires
        otherwise.
      </p>

      <h2>11. Changes to these terms</h2>
      <p>
        If these terms change materially, the date above changes and significant updates will be
        flagged in the app. Continuing to use Opsy OS after a change means you accept it.
      </p>

      <h2>12. Governing law</h2>
      <p>
        These terms are governed by the laws of India, and disputes fall under the jurisdiction
        of the courts of Pune, Maharashtra.
      </p>
    </LegalLayout>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Terms />
  </React.StrictMode>,
)
