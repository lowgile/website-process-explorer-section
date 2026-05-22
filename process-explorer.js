import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js';

const DATA = {
  function: "9.0",
  name: "Manage Financial Resources",
  categories: [
    { id: "1.0", name: "Develop Vision and Strategy" },
    { id: "2.0", name: "Develop and Manage Products and Services" },
    { id: "3.0", name: "Market and Sell Products and Services" },
    { id: "4.0", name: "Manage Supply Chain for Physical Products" },
    { id: "5.0", name: "Deliver Services" },
    { id: "6.0", name: "Manage Customer Service" },
    { id: "7.0", name: "Develop and Manage Human Capital" },
    { id: "8.0", name: "Manage Information Technology (IT)" },
    { id: "9.0", name: "Manage Financial Resources" },
    { id: "10.0", name: "Acquire, Construct, and Manage Assets" },
    { id: "11.0", name: "Manage Enterprise Risk, Compliance, Remediation, and Resiliency" },
    { id: "12.0", name: "Manage External Relationships" },
    { id: "13.0", name: "Develop and Manage Business Capabilities" }
  ],
  processGroups: [
    {
      id: "9.1", name: "Perform planning and management accounting", challengeCount: 8,
      challenges: [
        { id: "9.1.1.1", name: "Develop and maintain budget policies and procedures", painpoint: "Budgeting policies and procedures are communicated by email and are not consistently followed. Different cost centre owners use different assumptions, formats, and timelines, making consolidation difficult and time-consuming.", solution: "Budget policy distribution workflow: updated policies sent to all cost centre owners via task with mandatory acknowledgement. Policy version tracked per recipient. Centralised policy register with full version history. Acknowledgement confirmation required before the budgeting cycle opens for that owner." },
        { id: "9.1.1.2", name: "Prepare periodic budgets and plans", painpoint: "Budget input collection is managed by email. Finance sends Excel templates, cost centre owners fill them in, and multiple conflicting versions circulate simultaneously. Consolidation takes days and errors are introduced manually.", solution: "Structured budget input workflow: finance sends input requests to cost centre owners via task inbox with a defined deadline. Inputs submitted via digital form with mandatory validation (no negative budgets, required fields). Consolidated automatically into a live dashboard. Version history tracks every submission and resubmission." },
        { id: "9.1.1.2b", name: "Prepare periodic budgets and plans (tracking)", painpoint: "Finance has no real-time view of budget submissions during the collection cycle. The status of outstanding submissions is checked by sending reminder emails and waiting for responses.", solution: "Budget submission tracking dashboard: finance sees in real time which cost centres have submitted, which are in progress, and which have not started. Automatic reminders sent at configurable intervals before the deadline. Escalation to the non-submitting owner's manager fires after the deadline." },
        { id: "9.1.1.4", name: "Prepare periodic financial forecasts", painpoint: "Financial forecast updates are collected quarterly by emailing a new Excel template to budget owners. The process is identical to the original budget cycle and takes almost as long, reducing the strategic value of the forecast.", solution: "Forecast resubmission workflow: prior submission pre-populated in the input form for each cost centre owner - they only need to update changed lines. Revised inputs consolidated automatically. Variance against prior forecast highlighted in the consolidated view. Cycle complete when all owners have confirmed or updated." },
        { id: "9.1.1.5", name: "Perform variance analysis against forecasts and budgets", painpoint: "Budget variance analysis is produced monthly by a finance analyst manually comparing actuals from ERP against the budget Excel file. The analyst spends two days per month on formatting before any analysis can begin.", solution: "Automated variance dashboard: actuals pulled live from ERP and compared against the approved budget automatically. Variance by cost centre, GL account, and period shown in real time. Threshold-based alerts flag significant variances for management attention. No manual extraction or formatting needed." },
        { id: "9.1.2.6", name: "Report on profitability", painpoint: "Profitability reporting by product, customer, or business unit requires manual data assembly from ERP. The report is produced monthly and is already 2–4 weeks stale by the time management reviews it.", solution: "Real-time profitability dashboard: revenue, cost, and margin by product, customer, and cost centre pulled live from ERP. Drill-down to transaction level. Period comparison and trend view. Export to XLSX, PDF, or PPTX for management review. No manual extraction required." },
        { id: "9.1.3.4", name: "Manage asset resource deployment and utilization", painpoint: "Asset and resource deployment decisions are made without a complete real-time picture of current utilisation. Over-deployed assets and underutilised capacity are discovered in annual reviews rather than proactively managed.", solution: "Asset utilisation dashboard: key resource categories tracked with current deployment status and utilisation rate. Alerts when utilisation exceeds or falls below defined thresholds. Linked to the asset register for a complete view of owned vs. deployed capacity." },
        { id: "9.1.4.1", name: "Assess customer and product profitability", painpoint: "Customer and product profitability analysis is done once or twice a year by a finance analyst using ERP exports. The result is a backwards-looking report that management uses to make forward decisions with stale data.", solution: "Customer and product profitability dashboard: revenue, cost of sales, and margin by customer and product pulled live from ERP. Filter by period, region, and segment. Identify unprofitable customers or products in real time. Drill-down to transaction level for investigation." }
      ]
    },
    {
      id: "9.2", name: "Perform revenue accounting", challengeCount: 7,
      challenges: [
        { id: "9.2.2.1", name: "Maintain customer/product master files", painpoint: "Customer and product master data changes (price lists, billing addresses, payment terms) are made directly in ERP by whoever has access, with no approval workflow and no audit trail of who changed what and when.", solution: "Master data change workflow: all changes to customer billing data and product price lists require a structured change request, approved by the Finance Manager before application. Change written to ERP via API. Full audit trail of every change with submitter, approver, and timestamp." },
        { id: "9.2.2.2", name: "Generate customer billing data", painpoint: "Invoice generation is manual - finance staff create invoices in ERP or Word, review by email, and send as PDF attachments. There is no workflow to track draft-to-sent status, and invoice errors (wrong price, wrong address) are not caught before dispatch.", solution: "Invoice generation workflow: invoice drafted automatically from confirmed delivery or service completion record. Reviewed by responsible person via task inbox. Approved invoice sent as a professionally formatted PDF. Send timestamp and recipient logged. All versions stored with full history." },
        { id: "9.2.2.3", name: "Transmit billing data to customers", painpoint: "Invoice delivery confirmation (did the customer receive it?) is not tracked. Finance only knows an invoice was not received when the customer fails to pay and contacts them.", solution: "Invoice delivery tracking: invoices sent via the platform with delivery status monitored. Undelivered invoices flagged automatically with a task for Finance to follow up. Read receipt or portal access logged where available. Delivery history stored on the invoice record." },
        { id: "9.2.3.2", name: "Receive/Deposit customer payments", painpoint: "Customer payments are received by bank transfer and manually matched to open invoices in ERP. Cash application takes 1–2 days per batch, during which the AR ledger is not current and credit decisions are made on stale data.", solution: "Automated cash application: bank account statements imported via EBICS. Payment data matched automatically to open invoices by amount, reference number, and customer. Matched payments posted to ERP via API. Unmatched payments flagged as a task for the AR team. AR ledger current within hours of receipt." },
        { id: "9.2.4.2", name: "Analyze delinquent account balances", painpoint: "Overdue invoice identification requires a manual ERP report. Finance only reviews the report weekly or monthly, so invoices sit overdue for days before anyone starts chasing.", solution: "AR ageing dashboard updated in real time: overdue invoices flagged immediately on payment due date. Configurable dunning sequence initiated automatically: first reminder on day 1 overdue, escalation to account owner on day 7, management notification on day 30. All communications logged on the invoice record." },
        { id: "9.2.4.3", name: "Correspond/Negotiate with delinquent accounts", painpoint: "Dunning and collection communication is done manually - a finance staff member writes individual emails to overdue customers. Coverage is incomplete and the tone is inconsistent, reducing effectiveness.", solution: "Automated dunning workflow: staged reminder emails sent automatically at configurable intervals, personalised with invoice details. Escalation level adjusts message tone and recipient (customer contact → finance director → legal). Manual override available for relationship-sensitive customers. All communications documented on the customer record." },
        { id: "9.2.5.5", name: "Prepare chargeback invoices", painpoint: "Credit note and chargeback processing is triggered by email requests with no standardised process. Approval requirements are inconsistent, the same credits are sometimes processed twice, and finance has no consolidated view of outstanding chargebacks.", solution: "Credit note and chargeback workflow: structured request with reason code, amount, and supporting documentation. Approval chain based on amount threshold. Duplicate detection against recently processed credits. Approved credit notes generated as PDFs and posted to ERP. Dashboard shows outstanding chargebacks by customer and category." }
      ]
    },
    {
      id: "9.3", name: "Perform general accounting and reporting", challengeCount: 13,
      challenges: [
        { id: "9.3.1.3", name: "Publish accounting policies", painpoint: "Updated accounting policies are communicated by email and are not consistently read or acknowledged. During audits it is impossible to confirm that all accounting staff were aware of the policy in effect at the time of a disputed transaction.", solution: "Accounting policy distribution workflow: each policy update sent to all relevant staff via task with mandatory acknowledgement. Acknowledgement tracked per person per version. Full distribution history available for audit evidence." },
        { id: "9.3.1.4", name: "Set and enforce approval limits", painpoint: "Approval limits exist in a policy document but are not enforced in any system. Transactions are sometimes approved by staff who do not have the authority to do so. Audit reviews discover exceptions months after the fact.", solution: "Approval limit enforcement built into every financial workflow: payment approvals, purchase requisitions, and journal entries are routed based on amount thresholds configured in the platform. Transactions above the requester's authority cannot be approved by them - the system enforces the routing automatically. All approval decisions audit-trailed." },
        { id: "9.3.2.3", name: "Process allocations", painpoint: "Manual cost allocations (shared services, IT chargebacks, overhead splits) are entered directly into ERP by finance staff. The methodology is not documented, results vary between periods, and allocations cannot be reconstructed by an auditor without significant manual investigation.", solution: "Allocation calculation workflow: allocation methodologies configured in the platform with formula documentation. Each period's allocations calculated automatically and submitted for review before posting to ERP. Full calculation history stored including input data, formula, and resulting amounts. Replication for audit trivial." },
        { id: "9.3.2.5", name: "Post and reconcile intercompany transactions", painpoint: "Intercompany transactions are reconciled manually by finance staff from both entities comparing their own records. Discrepancies are frequent, resolution is by email, and period-end close is delayed every month by intercompany issues.", solution: "Intercompany reconciliation workflow: both entities post their records in the platform, which automatically identifies discrepancies. Mismatch details presented to both parties simultaneously. Structured resolution workflow with deadline. Agreed adjustments posted to both ERP instances via API. Period-end close gate checks intercompany reconciliation status automatically." },
        { id: "9.3.2.6", name: "Reconcile general ledger accounts", painpoint: "GL reconciliations are done in Excel by matching ERP ledger balances against sub-ledger totals manually. The process is error-prone, takes days at month-end, and reconciling items are tracked in a spreadsheet that is not linked to the ERP.", solution: "GL reconciliation workflow: reconciliation templates populated automatically from ERP balance data. Reconciling items entered and investigated in the platform, linked to supporting evidence. Approved reconciliations sign-off tracked per account per period. Outstanding items escalated automatically if not resolved before period-end deadline." },
        { id: "9.3.3.3", name: "Process and record fixed-asset additions and retires", painpoint: "Fixed asset additions and disposals are processed with manual data entry into ERP after physical receipt or disposal. Gaps between physical events and system updates create discrepancies in the asset register that require periodic reconciliation.", solution: "Fixed asset lifecycle workflow: acquisition confirmed via structured receipt form that updates the asset register automatically. Disposal request triggers approval workflow before asset is removed from the register. All lifecycle events logged with date, approver, and supporting documentation." },
        { id: "9.3.3.7", name: "Reconcile fixed-asset ledger", painpoint: "Fixed asset register reconciliation against ERP is done annually at most. Discrepancies between physical inventory and the register accumulate over the year and require significant effort to resolve.", solution: "Continuous fixed asset reconciliation: asset movements confirmed via digital forms at each event. ERP balance compared against platform asset register automatically at month-end. Discrepancies surfaced immediately and assigned to the responsible team for resolution. Reconciliation sign-off tracked per period." },
        { id: "9.3.3.8", name: "Track fixed-assets including physical inventory", painpoint: "Physical fixed asset inventory is conducted manually on paper or not conducted at all. Assets are written off years after they were physically lost.", solution: "Physical inventory confirmation workflow: periodic asset verification task sent to asset custodians per location. Custodians confirm presence and condition via mobile form. Discrepancies flagged immediately. Unconfirmed assets escalated for investigation. Results stored on the asset record with date and confirming party." },
        { id: "9.3.4.1", name: "Prepare business unit financial statements", painpoint: "Business unit financial statements are assembled manually from ERP exports at each period-end. The consolidation takes several days, requires manual adjustments in Excel, and produces results that are already 2–3 weeks stale when shared with management.", solution: "Business unit reporting dashboard: P&L, balance sheet summary, and key ratios updated automatically from ERP at period-end. Management adjustments submitted via structured form with approval workflow. Consolidated view available to management on day 1 after period close." },
        { id: "9.3.4.2", name: "Prepare consolidated financial statements", painpoint: "Group consolidation involves manual elimination of intercompany balances, currency translation, and re-formatting into the group reporting template. The process is error-prone and delays the group close by several days every period.", solution: "Consolidation workflow: intercompany eliminations identified and flagged automatically. Currency translation applied via configured rates. Group reporting package assembled from business unit submissions. Consolidation adjustments tracked with approver and rationale. Group close status dashboard visible to CFO in real time." },
        { id: "9.3.4.3", name: "Perform business unit reporting/review management reports", painpoint: "Management reporting relies on manually prepared Excel packs updated by finance analysts 5–10 days after period-end. By the time management receives the report, the data is 2–4 weeks old.", solution: "Real-time management reporting dashboard with drill-down, pivot, and period comparison. Data pulled live from ERP. Exportable to XLSX, PDF, or PPTX. Management can self-serve current-period data at any time." },
        { id: "9.3.4.4", name: "Perform consolidated reporting/review of cost management reports", painpoint: "Cost management reporting is produced monthly by finance manually and is always behind the business decisions it is meant to support.", solution: "Cost management dashboard: departmental costs by GL account and cost driver, variance vs. budget, and trend over prior periods - all updated automatically from ERP. Commentary entered directly in the platform by cost centre owners." },
        { id: "9.3.4.5", name: "Prepare statements for board review", painpoint: "Board packs are assembled manually from data pulled from multiple source systems, formatted in PowerPoint, and emailed for approval before each board meeting. The process takes 2–3 days per cycle.", solution: "Board pack generation: financial KPIs and charts pulled automatically from the reporting dashboards. Board pack template pre-populated with live data on demand. Export to PPTX with one click. Approval workflow for sign-off before distribution." }
      ]
    },
    {
      id: "9.4", name: "Manage fixed-asset project accounting", challengeCount: 3,
      challenges: [
        { id: "9.4.1.3", name: "Review and approve capital projects and fixed-asset acquisitions", painpoint: "Capital expenditure requests are submitted by email with insufficient financial justification. Approval discussions happen in meetings with no central tracking of which requests are pending, who has approved, and what the total approved capex pipeline looks like.", solution: "Capex approval workflow: structured request form with project description, investment category, financial justification (NPV, payback), and cost centre. Multi-tier approval based on amount threshold. Finance Manager and CFO approval required above defined limits. Real-time capex pipeline dashboard shows total committed spend vs. approved budget." },
        { id: "9.4.1.4", name: "Conduct financial justification for project approval", painpoint: "Financial justification quality for capital projects varies widely. Some requests have detailed NPV analysis; others have no quantification at all. Decisions are made without a consistent framework for comparing investment options.", solution: "Capex justification template: structured financial model within the request form requiring NPV, payback period, risk assessment, and alternatives considered. Finance team reviews completeness before the request enters the approval workflow. Approved project financials stored for post-implementation comparison." },
        { id: "9.4.2.3", name: "Monitor and track capital projects and budget spending", painpoint: "Capital project budget monitoring is done by manually comparing project cost reports from ERP against the approved budget in Excel. Budget overruns are discovered weeks after they occur.", solution: "Capital project budget tracking: actual spend pulled live from ERP and compared against the approved project budget automatically. Variance alert fires when spend exceeds a configurable percentage of budget. Budget change requests require a structured approval workflow before the new budget is reflected." }
      ]
    },
    {
      id: "9.5", name: "Process payroll", challengeCount: 5,
      challenges: [
        { id: "9.5.1.2", name: "Collect and record employee time worked", painpoint: "Time recording is done via email, paper timesheets, or a disconnected SaaS tool. Aggregation for payroll or project costing is manual. Corrections require back-and-forth between employees and HR/Finance.", solution: "Time recording application: employees submit hours by project or cost centre via web or mobile form. Manager approval workflow with rejection/correction loop. Approved data aggregated automatically for payroll handoff and project cost allocation." },
        { id: "9.5.1.3", name: "Analyze and report paid and unpaid leave", painpoint: "Leave balance tracking is done in spreadsheets maintained by HR admins. Employees do not have real-time visibility of their balances and HR spends significant time answering balance enquiries.", solution: "Leave management workflow: employees submit leave requests via digital form. Manager approves with team absence calendar visibility. Leave balance calculated and updated automatically. Employee self-service view of current balances. All leave decisions audit-trailed with approver and timestamp." },
        { id: "9.5.1.4", name: "Monitor regular, overtime, and other hours", painpoint: "Overtime authorisation is informal - employees work overtime and either do not report it, or report it after the fact with no prior approval. Finance has no visibility of accruing overtime liability until payroll is processed.", solution: "Overtime pre-authorisation workflow: employees request overtime in advance via structured form with project/cost centre code and estimated hours. Manager approval required before overtime is worked. Approved overtime tracked against actual hours reported." },
        { id: "9.5.2.1", name: "Enter employee time worked into payroll system", painpoint: "Employee time entries are manually re-entered from timesheets into the payroll system by an HR admin. Re-entry takes hours each pay cycle and errors in entry lead to payroll corrections that damage employee trust.", solution: "Automated time-to-payroll handoff: approved time entries exported automatically in the payroll system's required format via API or structured file. No manual re-entry. Discrepancies between expected hours and submitted hours flagged before export." },
        { id: "9.5.2.5", name: "Process and distribute payments", painpoint: "Payroll payment execution requires manual steps: finance staff export the payroll run output, log into the banking portal, manually upload the payment file, and confirm execution.", solution: "Payroll payment automation via EBICS: approved payroll output uploaded directly to the banking system via the EBICS interface. No manual banking portal login. Payment confirmation written back to the payroll record automatically." }
      ]
    },
    {
      id: "9.6", name: "Process accounts payable and expense reimbursements", challengeCount: 15,
      challenges: [
        { id: "9.6.1.1", name: "Verify AP pay file with purchase order vendor master file", painpoint: "Invoices arrive by email as PDFs or scanned paper and must be keyed into ERP manually. Data entry errors (wrong amounts, wrong vendor, wrong GL code) occur regularly and are caught only during payment review.", solution: "Incoming invoices received digitally or scanned. OCR + AI extracts all line items, amounts, VAT codes, and vendor details automatically. Data validated against ERP vendor master before entry. Human review only required for exceptions or low-confidence extractions. No manual keying." },
        { id: "9.6.1.3", name: "Audit invoices and key data in AP system", painpoint: "3-way matching (PO vs. goods receipt vs. invoice) is done manually in spreadsheets or not at all. Unmatched invoices wait in an untracked queue.", solution: "Automated 3-way matching in the P2P workflow. PO from ERP, goods receipt from Lowgile confirmation form, invoice data from OCR - compared automatically. Matched invoices proceed to payment workflow. Mismatches flagged with specific discrepancy detail and routed to the responsible buyer via task inbox." },
        { id: "9.6.1.3b", name: "Duplicate invoice detection", painpoint: "Duplicate invoices submitted by suppliers are processed and paid because there is no systematic detection step. The error is discovered months later during audit.", solution: "Automated duplicate detection: before processing, each invoice checked against previously posted invoices by vendor, amount, invoice number, and date range. Potential duplicates flagged and held for human confirmation before any payment action is taken." },
        { id: "9.6.1.4", name: "Approve payments", painpoint: "Payment approvals are given by reply email with no threshold-based routing, no SLA, and no audit trail linking the payment to the underlying approved purchase requisition, PO, and goods receipt.", solution: "Payment approval workflow with threshold-based routing. Approver receives task in inbox with full context (PO, goods receipt confirmation, invoice). Approved payments initiated via EBICS banking interface. Full audit trail from purchase request through to bank payment confirmation." },
        { id: "9.6.1.7", name: "Research/Resolve payable exceptions", painpoint: "Invoice exceptions (price deviations, quantity mismatches, invoices without a PO reference) are identified manually and resolved by email. There is no structured exception queue, no deadline enforcement.", solution: "Exception resolution workflow: each exception type creates a structured task routed to the responsible party. Exception detail shown clearly. Resolution options suggested automatically. SLA timer starts on task creation. Escalation fires if not resolved within the defined window." },
        { id: "9.6.1.8", name: "Process payments", painpoint: "Payment execution requires a finance staff member to log into the banking portal manually, upload a payment file, and confirm execution - a process repeated multiple times per week.", solution: "EBICS banking interface. Approved payments transmitted directly to the bank without manual portal login. Payment confirmation received automatically and linked to the invoice record. No dependency on any individual being available to log in." },
        { id: "9.6.1.9", name: "Respond to AP inquiries", painpoint: "AP enquiries from suppliers are handled by individual finance staff via email with no tracking, no SLA, and no visibility of outstanding enquiries for the AP manager.", solution: "Supplier enquiry workflow: inbound supplier enquiries create a structured task with the supplier and invoice details. Status responses automated for matched and approved invoices. Outstanding enquiries visible to AP manager with ageing. SLA timer ensures timely response." },
        { id: "9.6.2.1", name: "Establish and communicate expense reimbursement policies", painpoint: "Expense reimbursement policies are stored in a PDF that employees rarely read. Policy limits are applied inconsistently by different managers. Finance has no systematic enforcement.", solution: "Expense policy encoded in the platform. Policy rules enforced automatically at submission - meals above limit, unapproved categories, and missing receipts flagged immediately. Policy violations held for manager review before approval." },
        { id: "9.6.2.2", name: "Capture and report relevant tax data", painpoint: "VAT and expense tax data is not captured correctly at submission. Employees categorise expenses incorrectly, VAT rates are applied inconsistently.", solution: "AI OCR extraction with tax classification: receipt scanned, AI extracts merchant, amount, VAT amount, and VAT rate automatically. Expense category pre-classified by AI based on merchant type. Finance reviews AI classification - override available with rationale." },
        { id: "9.6.2.3", name: "Approve reimbursements and advances", painpoint: "Expense approval is done by forwarding an approval email with no structured approval hierarchy, no delegation management when managers are on leave.", solution: "Expense approval workflow with BPMN task inbox for manager. Delegation managed via role reassignment - no manual forwarding. SLA timer fires if approval is not given within the defined period. Finance sees all pending approvals and can escalate." },
        { id: "9.6.2.4", name: "Process reimbursements and advances", painpoint: "Approved expenses are paid via a separate manual transfer process. Finance must aggregate approved expenses, create a payment file, and execute the transfer manually.", solution: "Approved expenses trigger payment via the integrated payment workflow. EBICS banking interface executes the transfer automatically on the approved payment date. Payment confirmation written back to the expense record. No manual transfer process." },
        { id: "9.6.3.1", name: "Establish corporate credit card policies and approval limits", painpoint: "Corporate credit card policies are communicated by email and not enforced systematically. Cardholders regularly exceed limits or charge unallowed expense categories.", solution: "Credit card policy enforcement: transaction data imported automatically. Transactions matching unallowed categories or exceeding limits flagged immediately and routed to the cardholder's manager for explanation. Missing receipts trigger an automatic request to the cardholder." },
        { id: "9.6.3.2", name: "Process corporate credit card requests", painpoint: "New credit card requests are submitted by email with no structured approval process. Cards are issued without a formal record of who requested them, who approved them.", solution: "Credit card request workflow: structured application with business justification and requested limit. Manager and Finance approval required. Issued card linked to the employee record. Card cancellation on employee offboarding triggered automatically." },
        { id: "9.6.3.5", name: "Approve/Change credit limits", painpoint: "Credit limit changes are approved informally by email. There is no documented approval, no record of the business justification.", solution: "Credit limit change workflow: request submitted with justification and spending pattern evidence. Manager and Finance approval required. Approved change applied and documented on the card record with approver, date, and rationale." },
        { id: "9.6.3.6", name: "Cancel/Deactivate credit card", painpoint: "Credit card cancellation when an employee leaves is not linked to the offboarding process. Cards remain active after termination, creating a fraud and liability risk.", solution: "Confirmed offboarding integration: employee offboarding workflow automatically generates a credit card cancellation task to Finance on the last working day. Cancellation confirmation required as a mandatory step before offboarding is marked complete." }
      ]
    },
    {
      id: "9.7", name: "Manage treasury operations", challengeCount: 14,
      challenges: [
        { id: "9.7.2.1", name: "Manage and reconcile cash positions", painpoint: "Daily cash position reconciliation requires a treasury analyst to log into each bank portal individually, export statements, and consolidate in Excel. The process may take 2–3 hours every morning.", solution: "EBICS banking interface pulls bank account statements automatically from all connected banks. Reconciliation happens automatically based on configurable criteria. Live treasury dashboard shows consolidated cash position across all accounts in real time." },
        { id: "9.7.2.3", name: "Process and oversee electronic fund transfers (EFTs)", painpoint: "Electronic fund transfers are initiated by logging into individual banking portals, manually creating or uploading payment instructions, and confirming each transfer separately.", solution: "Centralised payment execution via EBICS: outgoing payments initiated from the Lowgile platform are transmitted to the relevant bank automatically. Payment status confirmation received back and stored. No individual banking portal login required." },
        { id: "9.7.2.4", name: "Develop cash flow forecasts", painpoint: "Cash flow forecasting relies on manual inputs from business units collected by email or spreadsheet. Forecast accuracy is low, leading to unnecessary credit facility usage or missed short-term investment opportunities.", solution: "Cash forecast workflow: structured forecast submission requests sent to business units weekly via task inbox. Inputs consolidated automatically. Forecast dashboard compares actuals from EBICS against submitted forecasts. Rolling 13-week view available at all times." },
        { id: "9.7.2.5", name: "Manage cash flows", painpoint: "Cash management decisions are made without a reliable forward view of cash. The decision is based on today's balance rather than a forecast of the coming weeks.", solution: "Cash management decision support: real-time cash position (from EBICS) combined with the rolling cash forecast gives a forward view of expected balances by day. Configurable alerts when projected balance falls below or rises above defined thresholds." },
        { id: "9.7.3.3", name: "Manage centralized outgoing payments on behalf of subsidiaries", painpoint: "Centralised outgoing payments require the treasury team to collect payment instructions from each subsidiary by email, consolidate them, and execute them manually.", solution: "Subsidiaries submit payment instructions via structured form with all required fields. Treasury reviews and approves consolidated batch. EBICS transmits the payment to the bank automatically. Payment confirmation returned to the originating subsidiary's record automatically." },
        { id: "9.7.3.4", name: "Manage central incoming payments on behalf of subsidiaries", painpoint: "Incoming payments received centrally on behalf of subsidiaries must be manually identified, allocated to the correct entity, and communicated to each subsidiary.", solution: "Central incoming payment processing: bank receipts imported via EBICS and matched to expected payments across all subsidiaries automatically. Matched receipts allocated to the correct subsidiary account immediately. Subsidiary notified automatically." },
        { id: "9.7.3.5", name: "Manage internal payments and netting transactions", painpoint: "Netting of intercompany balances is done manually at period-end by the treasury team aggregating positions from each subsidiary. The process takes days and errors require correction entries that delay close.", solution: "Intercompany netting workflow: all intercompany positions maintained in the platform throughout the period. Netting calculation run automatically at period-end based on confirmed balances. Net position per entity confirmed by each subsidiary." },
        { id: "9.7.3.6", name: "Calculate interest and fees for in-house bank accounts", painpoint: "Interest calculations on in-house bank accounts are done manually in Excel using daily balances exported from the banking system. The calculation takes hours per cycle and is subject to formula errors.", solution: "Automated interest calculation: daily balances maintained in the platform. Interest accrued automatically using configured rates per account. Monthly interest entries generated for review before ERP posting." },
        { id: "9.7.3.7", name: "Provide account statements for in-house bank accounts", painpoint: "Providing account statements to subsidiaries for their in-house bank accounts requires treasury to manually export data and email statements. Subsidiaries receive statements days after period-end.", solution: "Automated account statement generation: each subsidiary receives a structured monthly statement generated automatically on the first business day after period-end. Statement data available in real time via subsidiary portal." }
      ]
    },
    {
      id: "9.8", name: "Manage internal controls", challengeCount: 9,
      challenges: [
        { id: "9.8.1.3", name: "Assign roles and responsibility for internal controls", painpoint: "Internal control responsibilities are documented in a RACI matrix that is updated annually. Responsibility gaps and overlaps are not visible until an audit failure occurs.", solution: "Control responsibility register: each defined control linked to a responsible owner and a backup. Ownership confirmed annually via workflow task. New owner assignment triggered automatically when a role changes hands. Control gaps surfaced in the controls dashboard." },
        { id: "9.8.1.4", name: "Define business process objectives and risks", painpoint: "Business process risk assessments exist as Word documents that are rarely revisited. When a process changes, the associated risk and control documentation is not updated.", solution: "Process risk register: each business process has an associated risk record with inherent risk rating, existing controls, and residual risk. Process change workflow triggers a mandatory risk reassessment step. Updated risk records submitted for owner confirmation." },
        { id: "9.8.2.1", name: "Design and implement control activities", painpoint: "Internal controls rely on manual procedures that are not consistently followed. There is no systematic tracking of whether required control steps were performed.", solution: "Every action in the Lowgile platform is logged automatically - approvals, rejections, data changes, and timestamps captured in a tamper-proof audit trail attached to each business object. Controls are not just documented but enforced by the workflow." },
        { id: "9.8.2.2", name: "Monitor control effectiveness", painpoint: "Control effectiveness monitoring relies on annual self-assessment questionnaires and periodic internal audits. Control failures happen between monitoring cycles and go undetected for months.", solution: "Continuous control monitoring: platform automatically tracks whether each required control step is completed within its SLA. Control exceptions flagged in real time. Dashboard shows control completion rate by process and period." },
        { id: "9.8.2.3", name: "Remediate control deficiencies", painpoint: "When a control deficiency is identified, remediation actions are assigned by email with no tracking, no deadline enforcement, and no follow-up confirmation that the control was actually fixed.", solution: "Control remediation workflow: deficiency documented with root cause, severity, and required corrective actions. Each action assigned to an owner with a deadline via task inbox. Completion requires evidence upload. Escalation fires if deadline is missed." },
        { id: "9.8.3.1", name: "Report to external auditors", painpoint: "Preparing evidence for external auditors requires finance and control teams to spend weeks manually gathering approval records, access logs, and reconciliation evidence from multiple systems.", solution: "Every workflow step in Lowgile generates a timestamped, tamper-proof audit record automatically. External auditor evidence pack exported on demand in hours, not weeks." },
        { id: "9.8.3.2", name: "Report to regulators, shareholders, securities exchanges", painpoint: "Regulatory reporting requires manual data assembly from multiple systems, manual formatting to regulatory templates, and a manual submission process with no automated confirmation of receipt.", solution: "Regulatory reporting workflow: required data assembled automatically from platform transaction records and ERP. Report formatted to the required template. Submission approval workflow with sign-off before transmission. Submission confirmed and receipt acknowledged logged on the regulatory record." },
        { id: "9.8.3.4", name: "Report to internal management", painpoint: "Internal management control reporting is a manually produced monthly PDF that takes 2 days to prepare. By the time it is reviewed, the data is already out of date.", solution: "Continuous internal controls dashboard: control completion rate, exception volume, remediation status, and SLA breach rate shown in real time. Drill-down per process and control owner. Export to PDF or PPTX for the audit committee." }
      ]
    }
  ]
};
const DATA_BY_FUNCTION = {
  '9.0': DATA,
  '3.0': {
    function: '3.0',
    name: `Market and Sell Products and Services`,
    processGroups: [
      { id: '3.1', name: `Understand markets, customers, and capabilities`, challengeCount: 1, challenges: [
        { id: '3.1.1.4', name: `Analyze competing organizations, competitive/substitute products/services`, painpoint: `Competitor monitoring is done manually: staff periodically search the web, save PDFs, and share notes by email. There is no structured process to capture, categorise, and distribute competitive intelligence across the team.`, solution: `Automated competition monitoring. Platform collects signals from defined sources, classifies by topic (pricing, product launch, personnel), and routes updates to responsible team members automatically.` },
      ] },
      { id: '3.2', name: `Develop marketing strategy`, challengeCount: 2, challenges: [
        { id: '3.2.2.4', name: `Approve pricing strategies/policies and targets`, painpoint: `Pricing policy approvals are given by email reply with no defined approval chain, no version control on the approved document, and no record of who approved which version and when.`, solution: `Approval workflow for pricing policy documents: configurable sign-off chain, version history per document, tamper-proof audit trail of each approval with approver identity and timestamp.` },
        { id: '3.2.4.2', name: `Monitor and report performance`, painpoint: `Channel performance data lives in separate systems. Consolidating it for a management report requires manual exports and Excel work. Reports are monthly and already stale on publication.`, solution: `Reporting dashboard pulling KPIs from connected systems via API. Configurable by channel and period. Drill-down to transaction level. Export to XLSX, PDF, or PPTX on demand.` },
      ] },
      { id: '3.3', name: `Develop and manage marketing plans`, challengeCount: 1, challenges: [
        { id: '3.3.3.9', name: `Communicate and implement price changes`, painpoint: `Price change communication to sales teams and distributors is done by email blast with no tracking of acknowledgement, no structured go-live date enforcement, and no audit of who received which version.`, solution: `Price change notification workflow: structured announcement sent to defined recipient groups via task or email. Acknowledgement tracked per recipient. Effective date enforced. Full distribution audit trail.` },
      ] },
      { id: '3.4', name: `Develop sales strategy`, challengeCount: 6, challenges: [
        { id: '3.4.1.1', name: `Gather current and historic order information`, painpoint: `Sales order history is spread across ERP, email archives, and shared drives. Compiling historical data for forecast or trend analysis requires manual extraction and takes hours of analyst time.`, solution: `Reporting dashboard with order history pulled live from ERP via API. Filter by customer, product, region, and period. Drill-down to individual order lines. Export to Excel for further analysis.` },
        { id: '3.4.1.2', name: `Analyze sales trends and patterns`, painpoint: `Sales trend analysis is produced manually from ERP exports into Excel. The data is already outdated by the time the report reaches management. Ad hoc questions require a new extraction each time.`, solution: `Real-time sales analytics dashboard: revenue and volume trends by product, customer, and region pulled live from ERP. Configurable period comparisons. No manual extraction needed.` },
        { id: '3.4.1.3', name: `Generate sales forecast`, painpoint: `Sales forecasting is done in Excel with inputs collected by email from sales reps. Multiple versions circulate simultaneously. There is no consolidated forecast with a clear version history or approval trail.`, solution: `Structured forecast input workflow: sales reps submit forecasts via form by customer and product category. Inputs consolidated automatically into a live dashboard. Version history tracks each submission cycle. Forecast approval with sign-off documented and audit-trailed.` },
        { id: '3.4.2.9', name: `Establish partner and alliance agreements`, painpoint: `Partner and alliance agreements are stored as PDF files in shared drives with no structured lifecycle management. Renewal dates are tracked in personal calendars and are routinely missed.`, solution: `Agreement registry with expiry tracking and automated renewal alerts at 90/60/30 days. Approval workflow for new agreements and amendments. All document versions stored with full revision history.` },
        { id: '3.4.3.1', name: `Calculate product market share`, painpoint: `Market share calculations depend on manually combining internal ERP data with externally sourced market reports. The process is time-consuming and the output is rarely current enough to drive decisions.`, solution: `Dashboard combining internal revenue data from ERP with manually uploaded market data. Automatic share percentage calculations. Period-over-period comparison view.` },
        { id: '3.4.3.2', name: `Calculate product revenue`, painpoint: `Product revenue reporting requires manual ERP exports and Excel pivot tables. Finance and sales teams often work from different versions of the same number.`, solution: `Real-time product revenue dashboard pulled live from ERP. Single source of truth. Filter by product, period, region, and customer segment. Export to XLSX, PDF, or PPTX.` },
      ] },
      { id: '3.5', name: `Develop and manage sales plans`, challengeCount: 28, challenges: [
        { id: '3.5.1.2', name: `Identify/receive leads/opportunities`, painpoint: `Inbound leads arrive via email, website form, and phone - each in a different format, handled by different people. No unified intake, no deduplication, and no consistent first-response process.`, solution: `Unified lead intake: form submissions and parsed emails create a structured opportunity record automatically. Duplicate check fires on creation. First-response task assigned to responsible sales rep with SLA on initial contact.` },
        { id: '3.5.1.3', name: `Validate and qualify leads/opportunities`, painpoint: `Lead qualification criteria exist in a document nobody reads. Qualification decisions are informal and inconsistent across sales reps. No structured gate forces a qualification decision before time is invested in an opportunity.`, solution: `Qualification workflow with mandatory checklist (budget confirmed, decision-maker identified, need validated, timeline established). Lead advances to opportunity stage only once the checklist is complete. Qualification history stored on the record.` },
        { id: '3.5.1.5', name: `Develop opportunity win plans`, painpoint: `Win plans and deal strategies exist only in individual sales rep heads or unstructured email threads. When a rep is unavailable or leaves, there is no deal context accessible to the rest of the team.`, solution: `Structured opportunity record with win plan fields: key stakeholders, decision criteria, competitive position, next steps, and risk flags. Full deal history visible to the whole team.` },
        { id: '3.5.1.6', name: `Manage opportunity pipeline`, painpoint: `The sales pipeline is managed in a spreadsheet with no agreed stage definitions and no enforcement of stage-gate progression. Forecast accuracy is low because data entry is inconsistent.`, solution: `Opportunity pipeline application with Business Process Model and Notation-driven stage transitions. Each stage has defined entry criteria and a required action before advancement. Pipeline dashboard shows value, stage distribution, and weighted forecast. Management view across all reps in real time.` },
        { id: '3.5.1.6', name: `Manage opportunity pipeline`, painpoint: `Pipeline reviews require a sales manager to manually consolidate individual representative updates in a spreadsheet before each meeting. The consolidated view is immediately outdated.`, solution: `Automated pipeline snapshot available to management at any time. Changes since last review highlighted. Export to PPTX for pipeline review meetings in one click.` },
        { id: '3.5.1.8', name: `Manage customer sales calls`, painpoint: `Call and meeting outcomes are recorded inconsistently - some in a CRM, some in email, some not at all. Follow-up commitments made in meetings are not tracked and are frequently forgotten.`, solution: `Sales activity log: structured call and meeting record with outcome, commitments made, and next steps. Each next step creates a task assigned to the responsible person. Full activity history chronologically attached to the customer record.` },
        { id: '3.5.2.2', name: `Develop sales/key account plan`, painpoint: `Key account plans are created in PowerPoint or Word files stored in shared drives. They are rarely updated and are not linked to actual pipeline activity or revenue data.`, solution: `Structured account plan record with revenue targets, key contacts, strategic objectives, and active opportunities linked directly. Auto-populated with live revenue and pipeline data. Last-updated timestamp and plan owner clearly visible.` },
        { id: '3.5.2.3', name: `Manage sales/key account plan`, painpoint: `Key account plan reviews happen informally with no scheduled review cycle, no owner for triggering the review, and no documentation of what was changed or decided.`, solution: `Account plan review workflow: quarterly review task sent automatically to account owner. Structured review form captures changes to strategy, targets, and risks. Review history stored on the account record.` },
        { id: '3.5.2.4', name: `Manage customer relationships`, painpoint: `Customer interaction history is scattered across individual email inboxes. When a customer contact changes or a representative leaves, relationship context is lost entirely.`, solution: `Customer relationship record: all interactions (calls, meetings, emails, complaints, orders) linked to a single customer profile and accessible by the full account team. Interaction log updated automatically when any workflow references the customer.` },
        { id: '3.5.2.5', name: `Manage customer master data`, painpoint: `Customer master data is maintained inconsistently across ERP and email contacts. Duplicate records exist. Changes (new address, new billing contact) are made by whoever notices first, with no approval or audit trail.`, solution: `Customer data change workflow: updates submitted via structured form, reviewed and approved before application. Duplicate detection on new customer creation. Approved changes written to ERP via API. Full audit trail of every change with submitter and approver.` },
        { id: '3.5.3.1', name: `Receive Request For Proposal (RFP)/Request For Quote (RFQ)`, painpoint: `RFQs and RFPs arrive by email in unstructured formats - Word, PDF, plain text, spreadsheet. Each is handled differently depending on which rep receives it. No intake log, no structured parsing, no acknowledgement process.`, solution: `AI-powered RFQ intake: inbound emails scanned automatically, attachments parsed by AI to extract structured requirements (products, quantities, delivery dates, specifications). Structured opportunity record created automatically. Intake acknowledgement sent to customer.` },
        { id: '3.5.3.2', name: `Refine customer requirements`, painpoint: `Requirements clarification between customer and sales team happens informally by email or phone with no record of what was clarified, who confirmed what, and when final requirements were agreed.`, solution: `Requirements clarification log on the RFQ record: each question and customer response stored chronologically. Final confirmed requirements signed off via a structured step in the proposal workflow. Full history available for dispute resolution.` },
        { id: '3.5.3.7', name: `Develop solution and delivery approach`, painpoint: `Solution design for proposals is developed individually by each sales rep without a standard structure. Similar deals are scoped inconsistently, leading to variable margin outcomes and no institutional learning.`, solution: `Structured proposal template with mandatory sections (scope, delivery approach, assumptions, exclusions) by solution type. Completed sections stored on the proposal record. Enables comparison across similar deals and margin analysis.` },
        { id: '3.5.3.11', name: `Manage internal reviews`, painpoint: `Internal deal reviews before proposal submission are called ad-hoc with no defined trigger, no standard agenda, no documentation of feedback, and no tracking of whether review comments were addressed.`, solution: `Internal review workflow: proposal triggers review tasks to defined reviewers based on deal value or solution type. Structured feedback form by section. Author notified of feedback. Review completion confirmed before proposal advances to approval.` },
        { id: '3.5.3.12', name: `Manage internal approvals`, painpoint: `Bid and proposal approvals are given by email reply with no defined approval thresholds, no SLA on response time, and no audit record linking approved commercial terms to the submitted proposal.`, solution: `BPMN approval workflow with configurable tiers based on deal value and discount level. Approver receives task in inbox with full deal context. Escalation fires automatically on SLA breach. Every approval decision logged with approver, timestamp, and comments - permanently linked to the proposal record.` },
        { id: '3.5.3.13', name: `Submit/present bid/proposal/quote to customer`, painpoint: `Proposals are sent as unversioned PDF email attachments. No record of which version was sent to which customer, no confirmation tracking, and no centralised storage of submitted proposals.`, solution: `Proposal dispatch step in workflow: approved proposal generated as a structured PDF by the platform and sent to the customer. Send timestamp, recipient, and document version logged on the proposal record. All submitted proposals stored centrally and searchable.` },
        { id: '3.5.3.14', name: `Revise bid/proposal/quote`, painpoint: `Proposal revisions are made directly to the original document with no version control. It is unclear which version the customer holds. Previous pricing or commercial terms cannot be reconstructed later.`, solution: `Revision workflow: each revision creates a new versioned record. Previous versions retained with full history. Customer notified of revised version automatically. Approval re-triggered if commercial terms change beyond defined thresholds.` },
        { id: '3.5.4.1', name: `Accept and validate sales orders`, painpoint: `Incoming sales orders (by email, phone, or fax) require manual validation of customer account status, credit limit, and product availability before acceptance. For routine orders this takes hours; for complex ones, days.`, solution: `Automated order validation checks customer master data, credit status, and available-to-promise quantity in ERP via API. Orders passing all checks proceed automatically. Failed checks create a human task flagged with the specific reason for rapid resolution.` },
        { id: '3.5.4.2', name: `Collect and maintain account information`, painpoint: `Customer account data is maintained inconsistently across ERP and email contacts. Changes (new billing address, new payment terms) are made ad-hoc with no approval or audit trail.`, solution: `Customer account data change workflow: updates submitted via structured form, approved before application, written to ERP via API. Full audit trail of every change with submitter and approver identity.` },
        { id: '3.5.4.3', name: `Determine availability`, painpoint: `Sales staff check product availability by logging into ERP manually or asking someone in the warehouse. For orders with multiple line items this is a serial, time-consuming process prone to delays.`, solution: `Platform queries ERP product master and available-to-promise data via OData API in real time during the order entry process. Availability result returned automatically - no manual ERP login required.` },
        { id: '3.5.4.4', name: `Determine fulfillment process`, painpoint: `Determining the correct fulfilment route (stock, backorder, direct delivery, partial shipment) depends on individual knowledge and is handled inconsistently across the order team.`, solution: `Business rules engine in the order workflow automatically determines fulfilment route based on availability, customer agreement, and product type. Exception cases (partial availability, special delivery) routed to the responsible person as a task.` },
        { id: '3.5.4.5', name: `Enter orders into system`, painpoint: `Order data from emails, web forms, or phone calls must be manually re-entered into ERP. Re-entry errors cause downstream fulfilment failures. For high-volume intake this is a significant daily bottleneck.`, solution: `Incoming customer order email parsed by AI, validated against ERP product master, and entered into ERP automatically via OData API. Confirmation sent to customer. Exception cases (unknown product, out of stock, unrecognised customer) routed to human task inbox.` },
        { id: '3.5.4.5', name: `Enter orders into system`, painpoint: `Order status enquiries from customers are answered manually by looking up the order in ERP and replying by email. For order teams handling dozens of orders daily, this creates constant reactive work.`, solution: `Automated order status handling: inbound status enquiry emails classified by AI and answered automatically by querying order status in ERP. Customer receives a structured response without human intervention. Only non-standard cases escalate to the order team.` },
        { id: '3.5.4.6', name: `Identify/perform cross-sell/up-sell activity`, painpoint: `Cross-sell and up-sell opportunities are missed at order entry because the team is focused on processing speed. No system prompts for related products or higher-value alternatives at the moment of ordering.`, solution: `AI-assisted order enrichment: during order processing the platform suggests complementary products based on the customer's order history and current basket. Suggestions shown to the order handler as optional add-on items before submission to ERP.` },
        { id: '3.5.4.7', name: `Process back orders and updates`, painpoint: `Backorder management is manual: staff check ERP periodically for newly available stock and notify customers by email. Customers chase for updates before staff have noticed the stock has arrived.`, solution: `Automated backorder monitoring: batch job checks ERP availability against open backorders on a defined schedule. When stock becomes available, a task is created for the order handler and a customer notification sent automatically with updated delivery timeline.` },
        { id: '3.5.4.8', name: `Handle sales order inquiries including post-order fulfillment transactions`, painpoint: `Post-order enquiries (delivery status, invoice copy, change requests) are handled manually by the order team via email. For routine enquiries this consumes significant team capacity that could be spent on complex cases.`, solution: `AI classifies inbound customer emails by type. Status enquiries resolved automatically by querying ERP and returning a structured response. Invoice PDFs generated and emailed automatically. Only non-standard or complex cases escalate to a human task inbox.` },
        { id: '3.5.5.3', name: `Evaluate partner/alliance results`, painpoint: `Partner performance (revenue generated, deal volume, conversion rate) is tracked manually in spreadsheets. There is no shared real-time view between the company and its partners.`, solution: `Partner performance dashboard: revenue and deal metrics by partner pulled from order and pipeline data. Exportable scorecard per partner for quarterly business reviews.` },
        { id: '3.5.5.4', name: `Manage sales partner/alliance master data`, painpoint: `Partner master data (contacts, agreements, tier, certifications) is maintained in a shared spreadsheet with no version control, no change history, and no access control.`, solution: `Partner registry: structured partner record with contact data, agreement status, tier classification, and certification tracking. Change workflow with approval and audit trail. Access controlled by role.` },
      ] },
    ]
  },
  '4.0': {
    function: '4.0',
    name: `Manage Supply Chain for Physical Products`,
    processGroups: [
      { id: '4.1', name: `Plan for and align supply chain resources`, challengeCount: 3, challenges: [
        { id: '4.1.2.1', name: `Develop baseline demand forecasts`, painpoint: `Demand forecasts are built manually in Excel, with inputs collected by email from sales, marketing, and operations. No single consolidated view exists and version conflicts are common.`, solution: `Structured demand forecast collection workflow: each contributing team submits inputs via form with a deadline. Inputs consolidated automatically into a live dashboard. Version history per submission cycle. Forecast approval workflow with sign-off documented.` },
        { id: '4.1.2.2', name: `Collaborate demand with customers`, painpoint: `Customer demand collaboration (sharing forecasts with key customers or receiving their forward orders) is handled by email with no structured template and no tracking of response status.`, solution: `Demand collaboration workflow: structured forecast request sent to defined customers via supplier/customer portal. Responses captured in standardised format. Deadline tracking with automatic reminders.` },
        { id: '4.1.8.1', name: `Establish quality targets`, painpoint: `Quality targets and acceptance criteria are defined in Word documents and communicated by email. There is no structured sign-off confirming that production teams have received and acknowledged the current version.`, solution: `Quality policy approval and acknowledgement workflow: updated quality targets submitted for sign-off, distributed to responsible teams via task inbox. Acknowledgement tracked per recipient. Version history of all approved quality documents.` },
      ] },
      { id: '4.2', name: `Procure materials and services`, challengeCount: 21, challenges: [
        { id: '4.2.1.1', name: `Develop procurement plan`, painpoint: `The procurement plan is created once a year in Excel and shared by email. Mid-year changes are not formally tracked, and operations teams are unaware of revised procurement priorities until decisions have already been made.`, solution: `Procurement planning dashboard: structured plan with category, vendor, volume, and timeline. Changes tracked with author and date. Linked to open requisitions and POs so actuals are always visible against plan. Exportable for management review.` },
        { id: '4.2.1.2', name: `Clarify purchasing requirements`, painpoint: `Purchase requirements from business units arrive informally by email or phone without standard specifications. Procurement teams spend significant time chasing clarifications before they can act.`, solution: `Structured requirements intake form: business unit submits specifications including GL code, cost centre, delivery date, and technical requirements. Mandatory fields enforced. Incomplete submissions returned automatically to the requester for completion.` },
        { id: '4.2.1.5', name: `Analyze organization’s spend profile`, painpoint: `Spend analysis is produced from ERP exports into Excel once or twice a year. The process takes days, the data is stale by the time it is presented, and category managers have no ongoing visibility of where money is being spent.`, solution: `Real-time spend analytics dashboard: total spend by vendor, category, cost centre, and period pulled live from SAP. Drill-down to individual transactions. Identifies concentration risk (top vendor dependency) and off-contract spend automatically. Exportable to XLSX, PDF, or PPTX.` },
        { id: '4.2.1.6', name: `Seek opportunities to improve efficiency and value`, painpoint: `Opportunities to consolidate expenditure across business units or renegotiate contracts based on volume are missed because there is no cross-functional view of purchasing patterns.`, solution: `Cross-category expenditure consolidation dashboard: expenditure grouped by vendor and commodity category across all cost centres. Identifies vendors with fragmented expenditure across multiple departments. Provides data foundation for volume consolidation and contract renegotiation initiatives.` },
        { id: '4.2.2.1', name: `Select suppliers`, painpoint: `Supplier selection decisions are made informally, based on personal relationships or the most recent quote received. No structured evaluation criteria, scoring, or documentation of the selection rationale.`, solution: `Supplier evaluation workflow: structured assessment with configurable criteria (price, quality, delivery, sustainability, financial stability). Scoring captures evaluator identity and date. Award decision documented with rationale. Full evaluation history stored on the supplier record.` },
        { id: '4.2.2.2', name: `Certify and validate suppliers`, painpoint: `Supplier qualification (certificates, insurance, quality audits) is tracked in a shared spreadsheet. Expiry dates are missed, and procurement teams are not alerted when a supplier's certification lapses before a new order is placed.`, solution: `Supplier qualification register: certificates, audit results, and expiry dates stored per supplier. Automated alerts at 90/60/30 days before expiry. Lapsed certifications block new PO creation for that supplier until renewed. All qualification documents stored with version history.` },
        { id: '4.2.2.3', name: `Negotiate and establish contracts`, painpoint: `Contract negotiations happen via email threads with no structured tracking of agreed terms, open points, or negotiation history. Final contract terms are sometimes different from what was negotiated without anyone noticing.`, solution: `Contract negotiation log: structured record of open points, agreed changes, and version history. Each change tracked with author and date. Final agreed terms captured on the contract record before signature. Approval workflow for contract sign-off.` },
        { id: '4.2.2.4', name: `Manage contracts`, painpoint: `Supplier contracts are stored in shared drives with no lifecycle tracking. Renewal and renegotiation windows are missed, non-compliance with contracted terms goes undetected, and there is no alert when a contract is about to expire.`, solution: `Contract lifecycle workflow: expiry alerts at 90/60/30 days before renewal date. Renewal task routed automatically to responsible buyer. Performance KPI tracking against contracted terms. All contract versions stored with full revision history. Renewal decision documented and audit-trailed.` },
        { id: '4.2.2.4', name: `Manage contracts`, painpoint: `There is no systematic process to verify that actual purchase prices match contracted rates. Price deviations are discovered only during ad-hoc audits, often months after the fact.`, solution: `Price compliance monitoring: platform compares invoice line item prices against contracted rates pulled from ERP. Deviations above a configurable threshold flagged automatically and routed to the responsible buyer for review and resolution. Discrepancy report available on demand.` },
        { id: '4.2.3.1', name: `Process/Review requisitions`, painpoint: `Purchase requisitions are submitted by email or informally by phone. No structured form captures GL account, cost centre, or approval routing. Finance has no visibility of committed spend until the invoice arrives.`, solution: `Confirmed use case (P2P workflow): digital purchase request form with mandatory fields including cost centre, GL code, business justification, vendor suggestion, and estimated value. Submitted to BPMN approval workflow. Finance has real-time dashboard visibility of all open commitments before POs are raised.` },
        { id: '4.2.3.1', name: `Process/Review requisitions`, painpoint: `Requisitions with missing information (no GL code, no cost centre, no business justification) are submitted and require manual back-and-forth with the requester before they can be processed.`, solution: `Mandatory field validation at submission: incomplete requisitions are rejected immediately at the form level with a clear message to the requester specifying what is missing. No incomplete requisition can enter the approval workflow.` },
        { id: '4.2.3.2', name: `Approve requisitions`, painpoint: `Requisition approval depends on forwarding emails to the right person. Approvers are not consistently notified, delegation when out of office is ad-hoc, and there is no SLA enforcement, causing procurement delays.`, solution: `Confirmed use case: role-based BPMN approval routing. Approver receives task in personal inbox with full context. Escalation fires automatically at configurable SLA threshold. Delegation managed via role reassignment — no manual forwarding. Every approval decision logged with timestamp, approver identity, and any comment.` },
        { id: '4.2.3.3', name: `Solicit/Track vendor quotes`, painpoint: `Vendor quote requests are sent by email with no structured tracking. Responses arrive in different formats and comparison is done manually in Excel. The award decision has no documented rationale.`, solution: `Confirmed use case (P2P RfQ step): structured quote request sent to registered suppliers via supplier portal. Responses captured in standardised format. Side-by-side comparison view generated automatically. Award decision documented and audit-trailed within the procurement record.` },
        { id: '4.2.3.4', name: `Create/Distribute purchase orders`, painpoint: `PO creation requires manual re-entry into SAP after the requisition is approved. Data is retyped, creating duplicate effort and a risk of discrepancy between what was approved and what was ordered.`, solution: `Confirmed use case: approved requisition data flows directly into SAP via OData API, then PO created automatically, no re-entry. Integration with SAP S/4HANA API_PURCHASEORDER_PROCESS_SRV confirmed. PO number written back to the Lowgile record, linking procurement data to ERP in both directions.` },
        { id: '4.2.3.5', name: `Expedite orders and satisfy inquiries`, painpoint: `Expediting open purchase orders is done informally by phone or email with no systematic tracking of which orders are delayed, what was committed by the supplier, and whether the commitment was met.`, solution: `PO expediting workflow: overdue PO lines flagged automatically based on expected delivery date from SAP. Expediting task created for the responsible buyer. Supplier commitment date recorded. Follow-up task generated if commitment is not met by the stated date.` },
        { id: '4.2.3.6', name: `Reconcile purchase orders`, painpoint: `Invoice reconciliation (3-way matching against PO and goods receipt) is done manually in spreadsheets or not at all. Invoices are paid without verification, or held in an untracked queue. Exceptions cause delays and damage supplier relationships.`, solution: `Confirmed use case: automated 3-way matching in the P2P workflow. PO data from SAP, goods receipt confirmation from Lowgile form, and invoice data extracted by OCR are compared automatically. Matched invoices proceed to payment workflow. Exceptions flagged with specific mismatch detail and routed to buyer for resolution.` },
        { id: '4.2.3.6', name: `Reconcile purchase orders`, painpoint: `Duplicate invoices submitted by suppliers are processed again because there is no systematic check against previously posted invoices.`, solution: `Automated duplicate detection: before processing, each invoice is checked against previously posted invoices by vendor, amount, invoice number, and date range. Potential duplicates flagged and held for human confirmation before any payment is initiated.` },
        { id: '4.2.3.7', name: `Research/Resolve order exceptions`, painpoint: `Purchase order exceptions (wrong price, wrong quantity, unrecognised vendor) are identified only during manual review. Resolution is handled by email with no structured workflow, no deadline, and no tracking of exception status.`, solution: `Exception management workflow: each exception type (price deviation, quantity mismatch, unrecognised vendor) creates a structured task with the specific discrepancy highlighted, routed to the responsible buyer. Resolution steps documented. SLA timer fires if exception is not resolved within the defined window.` },
        { id: '4.2.4.1', name: `Monitor/Manage supplier information`, painpoint: `Supplier master data changes (bank details, address, contacts) are requested by email with no formal verification step. Fraudulent bank detail changes are a known and material fraud risk.`, solution: `Supplier self-service portal for data updates with mandatory dual-control approval: any bank detail change requires an independent verification step before it is applied. All changes logged with submitter identity and approver confirmation. Approved changes written to SAP vendor master via API. Change history permanently retained.` },
        { id: '4.2.4.1', name: `Monitor/Manage supplier information`, painpoint: `There is no centralised view of supplier performance across categories and business units. Each category manager has their own tracking, leading to inconsistent assessments and missed leverage opportunities.`, solution: `Real-time supplier performance dashboard: on-time delivery rate, invoice exception rate, quality rejection rate, and spend by vendor pulled live from Lowgile transaction data and SAP. Configurable scorecards per supplier. Exportable to XLSX, PDF, or PPTX for supplier business reviews.` },
        { id: '4.2.4.2', name: `Prepare/Analyze procurement and vendor performance`, painpoint: `Procurement performance reporting (on-time delivery, PO exception rates, contract compliance, savings) is prepared manually from ERP exports. Reports take days to compile and are already outdated when presented.`, solution: `Procurement performance dashboard: all KPIs calculated in real time from Lowgile P2P transaction data: requisition-to-PO cycle time, PO exception rate, supplier on-time rate, 3-way match success rate, and spend under management. No manual extraction needed.` },
      ] },
      { id: '4.3', name: `Produce/Assemble/Test product`, challengeCount: 2, challenges: [
        { id: '4.3.3.5', name: `Track and analyze non-conformance trends`, painpoint: `Non-conformance data is captured on paper or in individual Excel files per production line. Aggregating data to identify trends requires manual effort and happens too infrequently to drive proactive quality improvement.`, solution: `Non-conformance tracking application: structured defect records with category, severity, production line, and root cause. Dashboard shows defect trends by category and period. Automatic alert when defect rate exceeds defined threshold. All records exportable for quality reporting.` },
        { id: '4.3.3.6', name: `Perform root cause analysis`, painpoint: `Root cause analysis for quality failures is undocumented or captured in individual emails. There is no structured methodology enforced and no institutional record of causes and corrective actions that could prevent recurrence.`, solution: `Root cause analysis workflow: structured 8D or 5-Why template attached to each non-conformance record. Corrective actions assigned with owner and due date. Completion evidence uploaded and stored. Recurring root causes surfaced automatically in the quality dashboard.` },
      ] },
      { id: '4.4', name: `Manage logistics and warehousing`, challengeCount: 7, challenges: [
        { id: '4.4.2.2', name: `Manage inbound material flow`, painpoint: `Inbound material flow is managed by email and phone. There is no real-time visibility of what is in transit, expected delivery times are tracked in spreadsheets, and warehouse staff are often surprised by unexpected arrivals.`, solution: `Inbound shipment tracking dashboard: expected deliveries by date and supplier pulled from open POs in SAP. Supplier confirms despatch via portal, updating expected arrival. Warehouse receives task notification before arrival with shipment details. Late deliveries flagged automatically.` },
        { id: '4.4.2.3', name: `Monitor inbound delivery performance`, painpoint: `Inbound delivery performance (on-time, complete, correct) is not systematically tracked. Disputes with suppliers about delivery failures are difficult to resolve because receipt data is not consistently captured.`, solution: `Inbound delivery confirmation form: warehouse staff record actual receipt date, quantity, and condition against the PO. Discrepancies against PO automatically flagged. Supplier performance KPIs calculated automatically from receipt data. All receipt records stored and linked to the originating PO.` },
        { id: '4.4.2.4', name: `Manage flow of returned products`, painpoint: `Return shipments to suppliers are initiated by email with no formal return authorisation process. Return reasons are not captured systematically, credit notes from suppliers are not matched against initiated returns, and disputes are common.`, solution: `Returns management workflow: return request created in the platform with reason code, quantity, and PO reference. Supplier return authorisation requested via portal. Return shipment confirmed by warehouse. Expected credit note tracked against the return record. Discrepancies flagged automatically.` },
        { id: '4.4.3.2', name: `Receive, inspect, and store inbound deliveries`, painpoint: `Goods receipt is done on paper or by direct ERP entry. Paper receipts are lost or delayed, which blocks the AP invoice matching process. ERP entries are made hours or days after actual receipt.`, solution: `Digital goods receipt form: warehouse staff confirm receipt on mobile or desktop, recording quantity and condition against the open PO. Receipt data written to SAP automatically via API. Discrepancies against PO flagged immediately. Receipt confirmation triggers the 3-way matching step in the AP workflow.` },
        { id: '4.4.3.8', name: `Manage warehouse transfers`, painpoint: `Warehouse transfer orders between locations are initiated by email or phone. Transfer status is not tracked, and inventory records in ERP are not updated until days after the physical movement.`, solution: `Warehouse transfer workflow: structured transfer request with origin, destination, SKU, and quantity. Approval step for transfers above value threshold. Transfer confirmation by receiving location updates ERP inventory records automatically via API.` },
        { id: '4.4.4.3', name: `Manage transportation fleet`, painpoint: `Fleet maintenance scheduling is managed informally. Preventive maintenance is missed, and there is no structured process for capturing maintenance history per vehicle or for managing driver assignments.`, solution: `Fleet maintenance workflow: scheduled maintenance tasks generated automatically based on mileage or time interval. Maintenance history stored per vehicle. Driver assignment managed via task inbox. Maintenance costs captured per vehicle for cost analysis.` },
        { id: '4.4.4.4', name: `Process and audit carrier invoices and documents`, painpoint: `Carrier invoices are paid without systematic verification against agreed freight rates and actual shipments. Overbilling by carriers is common and goes undetected until ad-hoc audits.`, solution: `Carrier invoice audit workflow: freight invoice received, parsed by OCR, and checked against contracted rates and shipment confirmation data. Discrepancies flagged and routed to logistics for resolution. Approved invoices passed to AP workflow for payment. Audit trail stored on each invoice.` },
      ] },
    ]
  },
  '5.0': {
    function: '5.0',
    name: `Deliver Services`,
    processGroups: [
      { id: '5.1', name: `Establish service delivery governance and strategies`, challengeCount: 2, challenges: [
        { id: '5.1.1.2', name: `Manage service delivery performance`, painpoint: `Service delivery performance is reviewed monthly from manually prepared reports. Management has no real-time view of active engagement status, milestone completion, or SLA compliance across the delivery portfolio.`, solution: `Service delivery performance dashboard: active engagements, milestone status, SLA compliance, and resource utilisation shown in real time. Drill-down per engagement. Export to PPTX for management reviews. Exceptions highlighted automatically.` },
        { id: '5.1.1.4', name: `Solicit feedback from customer on service delivery satisfaction`, painpoint: `Customer satisfaction feedback is collected informally - a phone call after delivery or not at all. Results are not captured systematically and there is no trend data to drive service improvement.`, solution: `Post-delivery satisfaction survey sent automatically on service closure. Responses captured in the platform and aggregated on a satisfaction dashboard. Negative scores trigger a follow-up task to the account owner. Trend data available by service type, team, and period.` },
      ] },
      { id: '5.2', name: `Manage service delivery resources`, challengeCount: 4, challenges: [
        { id: '5.2.1.1', name: `Monitor pipeline`, painpoint: `Pipeline visibility for service capacity planning is limited. Demand forecasts and confirmed orders live in separate systems or are not tracked at all. Resource managers are surprised by new engagements and unable to plan ahead.`, solution: `Service demand pipeline dashboard: confirmed and probable engagements with required skills, effort, and start date. Linked to sales pipeline for forward view. Resource manager can see upcoming demand 4–12 weeks ahead and identify capacity gaps before they become critical.` },
        { id: '5.2.1.5', name: `Determine availability of skills to deliver on current and forecast customer orders`, painpoint: `Matching incoming service demand to available staff with the right skills is done informally by a resource manager who relies on personal knowledge of who is available. This leads to uneven utilisation and skills mismatches.`, solution: `Skills-based resource matching: each team member has a "skills and availability profile" in the platform. Incoming demand specifies required skills. Platform surfaces available staff matching the skill requirements. Assignment decision made by resource manager with full context, then confirmed as a task to the assignee.` },
        { id: '5.2.2.2', name: `Create resource plan`, painpoint: `Resource plans are created per engagement in Excel and are not consolidated. There is no company-wide view of resource demand vs. capacity, making it impossible to identify conflicts or over-allocation across engagements.`, solution: `Consolidated resource plan: all active and confirmed engagements contribute to a single capacity view by skill category and time period. Over-allocation flagged automatically. Resource manager can resolve conflicts by adjusting assignment timelines directly in the platform.` },
        { id: '5.2.2.3', name: `Match resource demand with capacity, skills, and capabilities`, painpoint: `Resource demand is frequently not aligned with actual capacity and available skills. Engagements start understaffed or with wrong skills, leading to delays and quality issues that are discovered too late to recover easily.`, solution: `Demand vs. capacity matching workflow at engagement kick-off: required skills and effort confirmed against current resource availability before the engagement is formally started. Gaps escalated to resource manager for resolution. Assignment confirmed before delivery begins.` },
      ] },
      { id: '5.3', name: `Deliver service to customer`, challengeCount: 9, challenges: [
        { id: '5.3.1.1', name: `Review contract and agreed terms`, painpoint: `Service kick-off relies on individuals reading the contract to extract delivery requirements. There is no structured onboarding step that ensures every delivery team member understands the agreed terms before work starts.`, solution: `Engagement kick-off workflow: contract terms, customer requirements, SLA parameters, and team assignments captured in a structured brief. Each team member receives their role and initial tasks in their inbox. Kick-off confirmation sign-off documented before delivery begins.` },
        { id: '5.3.1.2', name: `Understand customer requirements and define refine approach`, painpoint: `Customer requirements are gathered in kick-off meetings and captured informally in meeting notes or emails. Requirements are often misunderstood or forgotten, discovered only when the customer rejects a deliverable.`, solution: `Requirements capture form: structured intake of customer objectives, acceptance criteria, constraints, and explicit exclusions. Customer sign-off step confirms requirements before delivery commences. Stored on engagement record and accessible to the full delivery team throughout the engagement.` },
        { id: '5.3.1.3', name: `Modify/revise and approve project plan`, painpoint: `Project plan approvals happen informally by email. When the plan is revised, it is unclear who has seen the latest version and whether the customer has formally agreed to the updated scope or timeline.`, solution: `Project plan approval workflow: each plan version submitted for approval via structured step. Customer and internal approvers notified via task. Approval or rejection documented with timestamp. Version history of all approved plans stored on the engagement record.` },
        { id: '5.3.1.6', name: `Identify, select, and assign resources`, painpoint: `Resource assignment at the start of engagements is informal - whoever is available gets assigned, often without checking skill fit or current utilisation. This leads to uneven workloads and quality risks.`, solution: `Resource assignment workflow at engagement start: required roles and skills specified in the engagement plan. Resource manager selects and assigns staff with visibility of their current utilisation. Assignment confirmed via task in the assignee's inbox. All assignments recorded on the engagement record.` },
        { id: '5.3.2.5', name: `Obtain approval to proceed`, painpoint: `Approval to proceed between delivery phases is given by email or verbal agreement. There is no structured gate that ensures the customer has formally agreed to proceed before additional resources are committed.`, solution: `Phase gate approval workflow: at each defined delivery milestone, a structured approval step is triggered - customer and internal sponsor must confirm. Approval documented with timestamp and stored on the engagement record. Work on the next phase does not begin until approval is confirmed.` },
        { id: '5.3.3.1', name: `Conduct service delivery/project review and evaluate success`, painpoint: `Delivery reviews happen informally or not at all. There is no structured retrospective that captures what went well and what failed, so the same mistakes are repeated across engagements without institutional learning.`, solution: `Delivery review workflow: structured retrospective form triggered automatically on engagement completion. Captures outcome against plan, key learnings, and corrective actions. Learnings stored in a searchable knowledge base. Corrective actions assigned with owner and due date.` },
        { id: '5.3.3.2', name: `Complete/finalize financial management activities`, painpoint: `Financial close-out of completed engagements is delayed because billing triggers and final cost confirmations depend on manual communication between delivery and finance. Revenue is recognised late and margin analysis is incomplete.`, solution: `Financial completion workflow: delivery confirmation triggers an automatic billing notification to finance with the engagement record, agreed deliverables, and confirmed completion. Finance processes the final invoice from the notification. Margin actuals captured on the engagement record for reporting.` },
        { id: '5.3.3.3', name: `Confirm delivery according to contract terms`, painpoint: `Customer sign-off on completed deliverables is obtained by email and stored in individual inboxes. There is no structured process to confirm that acceptance criteria have been met before billing, leading to disputes and payment delays.`, solution: `Customer acceptance workflow: structured acceptance checklist against agreed criteria. Customer receives a formal acceptance request with supporting documentation. Approval or rejection documented. Approved acceptance triggers billing notification. Full acceptance history stored on the engagement record.` },
        { id: '5.3.3.6', name: `Harvest knowledge`, painpoint: `Knowledge from completed engagements - what worked, what problems were solved, which solutions were reused - is lost when the engagement closes. New teams reinvent solutions that have already been built elsewhere in the company.`, solution: `Knowledge capture step in engagement closure workflow: structured form captures reusable solutions, lessons learned, and reference contacts. Entries tagged by industry, technology, and problem type. Stored in a searchable internal knowledge base accessible to all delivery teams.` },
      ] },
    ]
  },
  '6.0': {
    function: '6.0',
    name: `Manage Customer Service`,
    processGroups: [
      { id: '6.2', name: `Plan and manage customer service contacts`, challengeCount: 14, challenges: [
        { id: '6.2.2.1', name: `Receive customer problems, requests, and inquiries`, painpoint: `Customer requests arrive via email, phone, web form, and chat — each channel handled separately with no unified intake. The same customer can be in the queue in multiple channels simultaneously without anyone knowing.`, solution: `Confirmed use case: unified customer request intake. Inbound emails parsed by AI to extract customer identity, request type, and urgency. Structured request record created automatically. Duplicate detection checks for existing open requests from the same customer. All channels feed into a single inbox.` },
        { id: '6.2.2.1', name: `Receive customer problems, requests, and inquiries`, painpoint: `High-volume, representativeetitive enquiries (order status, invoice copy, account balance, standard product information) consume service team capacity that should be focused on complex cases requiring human judgment.`, solution: `Confirmed use case: AI self-service layer handles routine requests automatically without human intervention. Order status queried from SAP in real time. Invoice PDFs generated and emailed automatically. Only non-standard or complex requests escalate to a human task inbox.` },
        { id: '6.2.2.2', name: `Analyze problems, requests, and inquiries`, painpoint: `Incoming requests are manually read and categorised by each service representative, leading to inconsistent classification, misrouting to the wrong team, and no systematic tracking of request types and volumes for capacity planning.`, solution: `AI-powered request classification: each incoming request automatically assigned a type, urgency level, and routing destination based on content analysis. Classification visible to the team for review and override. Classification accuracy improves over time. Type and volume data feeds service capacity planning dashboard.` },
        { id: '6.2.2.3', name: `Resolve customer problems, requests, and inquiries`, painpoint: `No knowledge base or resolution playbook exists. Each service representative solves problems from memory. When experienced representatives are on leave, service quality drops immediately. Resolution times are inconsistent and average time is high.`, solution: `Resolution workflow with linked knowledge base: each request type has a suggested resolution path based on past similar cases. Service representative follows structured steps, with access to approved resolution procedures. Resolved cases contribute to the knowledge base. Resolution time and first-contact resolution rate tracked automatically.` },
        { id: '6.2.2.4', name: `Respond to customer problems, requests, and inquiries`, painpoint: `Customer responses are drafted individually by each service representative with no standard template. Response quality and tone vary significantly. Customers complain about inconsistent communication.`, solution: `Structured response templates by request type. AI-assisted draft generation: platform proposes a response based on the request content and resolution taken. representative reviews, edits, and sends. All communications stored on the customer record. Response quality monitored via satisfaction feedback.` },
        { id: '6.2.2.5', name: `Identify and capture upsell/cross-sell opportunities`, painpoint: `Upsell and cross-sell signals identified during service interactions are noted mentally or informally but rarely make it to the sales team in time to act on them.`, solution: `Opportunity capture in service workflow: when a service representative identifies a potential upsell signal, a structured opportunity record is created in one click and routed to the responsible sales representative as a task. Context from the service interaction automatically attached.` },
        { id: '6.2.2.6', name: `Deliver opportunity to sales team`, painpoint: `Handing off service-identified opportunities to sales is informal — a message in a chat or an email that may or may not be followed up. No tracking of whether the handoff was received or acted on.`, solution: `Automated handoff workflow: opportunity record created in service interaction routed as a task to the responsible sales representative. Sales representative acknowledges receipt and confirms follow-up action within a defined SLA. Status visible to the service representative who identified the opportunity.` },
        { id: '6.2.3.1', name: `Receive customer complaints`, painpoint: `Customer complaints arrive by email and are handled individually by whoever receives them. There is no structured intake, no severity classification, and no guarantee that high-severity complaints receive a faster response.`, solution: `Complaint intake workflow: complaints received by any channel create a structured record with severity classification (functional failure, quality issue, billing error, etc.). High-severity complaints automatically escalated to team lead. SLA timer starts on receipt. Customer acknowledgement sent automatically.` },
        { id: '6.2.3.2', name: `Route customer complaints`, painpoint: `Routing complaints to the right team or person for investigation is manual and inconsistent. Complaints are sometimes handled by the person who received them rather than the specialist responsible for that issue type.`, solution: `Automatic complaint routing: complaint type classification (from AI analysis or structured intake form) determines routing to the responsible team. Routing rules configurable by complaint category, product type, and customer tier. Routing decision logged on the complaint record.` },
        { id: '6.2.3.3', name: `Resolve customer complaints`, painpoint: `Complaint resolution has no defined steps, timeline, or required evidence. Investigators work from memory. Resolution quality varies significantly and there is no check that the root cause has been addressed before the complaint is closed.`, solution: `Complaint resolution workflow: structured investigation steps with root cause documentation required. Resolution evidence attached to the record. Final resolution reviewed and approved by team lead before closure. Reopening possible if customer rejects the resolution. All steps time-stamped and audit-trailed.` },
        { id: '6.2.3.4', name: `Respond to customer complaints`, painpoint: `Keeping customers informed during complaint resolution depends on individual effort. Customers receive no proactive updates and must chase for status, increasing their frustration and service team workload.`, solution: `Automated customer communication during resolution: status update sent automatically when complaint moves to each new stage. Customer notified immediately when resolution is proposed. Final resolution communication generated from template with personalised details.` },
        { id: '6.2.3.5', name: `Analyze customer complaints and response/redressal`, painpoint: `Complaint data is not systematically analysed. Management has no visibility of complaint volume, type, or trends. The same product or process failures generate complaints representativeeatedly without triggering a systemic fix.`, solution: `Complaint analytics dashboard: volume, category, severity, and resolution time tracked in real time. Trend analysis identifies recurring issues. Threshold-based alerting fires when complaint volume for a specific category exceeds a defined level. Monthly complaint representativeort exportable automatically.` },
        { id: '6.2.4.1', name: `Authorize return`, painpoint: `Return authorisations are given by email with no structured validation that the return is within policy (return window, product condition, original order confirmation). Unauthorised returns are accepted because there is no systematic check.`, solution: `Return authorisation workflow: customer submits return request via portal with reason code and order reference. Platform checks return policy automatically (within return window, eligible product category, original order confirmed). Authorisation or rejection communicated immediately. Authorised returns tracked to receipt confirmation.` },
        { id: '6.2.4.2', name: `Process return and record reason`, painpoint: `Return reasons are not captured consistently. Finance does not know which returns require a credit note, which require a representativelacement, and which are waiting for quality inspection. Returns processing is slow and often disputed.`, solution: `Returns processing workflow: each authorised return has a reason code, expected action (credit, representativelacement, representativeair), and responsible team assigned. Processing steps tracked with owner and deadline. Credit note or representativelacement order triggered automatically on completion of the defined action. All return records linked to original order in ERP.` },
      ] },
      { id: '6.3', name: `Service products after sales`, challengeCount: 5, challenges: [
        { id: '6.3.2.1', name: `Receive warranty claim`, painpoint: `Warranty claims arrive by email or phone and are logged manually in a spreadsheet. There is no standardised intake form, so claim information is incomplete and investigators spend significant time chasing missing details.`, solution: `Warranty claim intake form: structured submission with required fields (product ID, purchase date, failure description, supporting evidence). Incomplete submissions rejected immediately. Structured claim record created automatically. Acknowledgement sent to claimant with reference number and expected response time.` },
        { id: '6.3.2.2', name: `Validate warranty claim`, painpoint: `Warranty validity checks (product within warranty period, claimant is the legitimate owner, failure mode covered by warranty) are done manually for each claim, taking significant time and producing inconsistent results.`, solution: `Automated warranty validation: platform checks claim against warranty master data (product, purchase date, warranty terms) via SAP API or warranty register. Valid claims advanced automatically. Invalid claims flagged with specific reason and routed for human review before rejection.` },
        { id: '6.3.2.6', name: `Approve or reject warranty claim`, painpoint: `Warranty claim approval and rejection decisions are made by email with no documented rationale, no defined approval authority, and no audit record. Customers dispute rejected claims citing inconsistent handling.`, solution: `Warranty approval workflow: investigation outcome documented with evidence and rationale. Approval routed to the defined authority based on claim value. Decision logged with approver, timestamp, and rationale. Customer notified automatically with the decision and documented reasoning.` },
        { id: '6.3.4.1', name: `Confirm specific service requirements for individual customer`, painpoint: `Service agreements with specific customers (dedicated SLAs, priority handling, special pricing) are tracked in a shared document that is rarely updated. Service staff are often unaware of special commitments when handling interactions.`, solution: `Customer service agreement register: specific SLA terms, priority level, and special handling instructions visible to every service representative when the customer record is opened. Terms enforced automatically in the routing and escalation workflow (higher priority = shorter SLA timer).` },
        { id: '6.3.4.2', name: `Identify and schedule resources to meet service requirements`, painpoint: `Scheduling service resources to specific customers is done informally. Specialist staff are double-booked, customer commitments are missed, and there is no forward view of service capacity vs. demand.`, solution: `Service scheduling workflow: service requests assigned to specific resources with skill and availability checked before assignment. Scheduling conflicts flagged automatically. Customer notified of assigned resource and expected service time. Schedule visible to management as a capacity dashboard.` },
      ] },
      { id: '6.5', name: `Evaluate customer service operations and customer satisfaction`, challengeCount: 3, challenges: [
        { id: '6.5.1.1', name: `Solicit customer feedback on customer service experience`, painpoint: `Customer satisfaction data for service interactions is collected ad-hoc or not at all. There is no consistent feedback loop and management has no visibility of satisfaction trends across service teams or interaction types.`, solution: `Post-interaction satisfaction survey triggered automatically on case closure. Survey results captured in the platform and linked to the resolved case for context. Satisfaction dashboard by team, agent, and interaction type. Negative responses trigger follow-up task to team lead.` },
        { id: '6.5.2.1', name: `Solicit customer feedback on complaint handling and resolution`, painpoint: `Feedback specifically on complaint handling is not systematically collected. Customers who had a complaint resolved are not followed up to confirm satisfaction, and the company does not know whether its complaint process is perceived as fair or effective.`, solution: `Post-complaint satisfaction survey triggered automatically on complaint closure. Results linked to complaint record and aggregated in the complaint analytics dashboard. Persistent dissatisfaction after closure triggers escalation workflow to management.` },
        { id: '6.5.3.1', name: `Gather and solicit post-sale customer feedback on products and services`, painpoint: `Post-sale product and service feedback is collected informally through account managers. Coverage is uneven — key accounts get attention, smaller customers are not heard. Feedback rarely reaches product or operations teams.`, solution: `Post-sale feedback workflow: survey sent automatically at defined intervals (30/90/180 days post-purchase). Responses captured and segmented by product, service type, and customer tier. Feedback automatically shared with the responsible product or operations team as a structured input record.` },
      ] },
    ]
  },
  '7.0': {
    function: '7.0',
    name: `Develop and Manage Human Capital`,
    processGroups: [
      { id: '7.1', name: `Develop and manage human resources (HR) planning, policies, and strategies`, challengeCount: 4, challenges: [
        { id: '7.1.2.1', name: `Perform workforce planning`, painpoint: `Workforce planning is done annually in Excel with data pulled manually from HR and finance systems. The result is a static document that becomes outdated immediately. Planners have no real-time view of headcount vs. budget.`, solution: `Workforce planning dashboard: current headcount, open positions, approved budget, and actual cost pulled live from HR and ERP systems. Headcount vs. plan gap is visible in real time. Scenario modelling via structured input form for proposed headcount changes with financial impact calculated automatically.` },
        { id: '7.1.2.2', name: `Perform operational workforce planning`, painpoint: `Operational headcount decisions (backfill, new hire, contract extension) are made informally and are not consistently linked to the approved workforce plan. Actual headcount deviates from plan without anyone tracking the gap.`, solution: `Operational headcount change workflow: any proposed change (backfill, new role, contract extension) requires a structured request linked to the approved plan. Business justification, cost centre, and budget impact captured. CFO approval required above defined threshold. All decisions audit-trailed.` },
        { id: '7.1.2.11', name: `Develop HR policies`, painpoint: `HR policies (leave, expense, conduct, performance) are stored in shared drives and are not consistently communicated to employees. New hires are not systematically made aware of policies and managers apply them inconsistently.`, solution: `HR policy register: policies stored with version history, effective date, and responsible owner. New employee onboarding workflow includes mandatory policy acknowledgement steps. Policy update notification sent to all relevant employees via task. Acknowledgement tracked per employee per policy version.` },
        { id: '7.1.2.12', name: `Administer HR policies`, painpoint: `HR policy administration (answering employee questions, processing exceptions, handling acknowledgements) is done manually by HR staff via email. Volume is high and processing time is long.`, solution: `Self-service policy portal: employees can access current policies, submit questions, and request exceptions via structured form. Exception requests routed to HR for review with full context. Routine questions answered by AI from the policy knowledge base. HR staff focus on complex cases only.` },
      ] },
      { id: '7.2', name: `Recruit, source, and select employees`, challengeCount: 11, challenges: [
        { id: '7.2.1.1', name: `Align staffing plan to work force plan and business unit strategies/resource needs`, painpoint: `New headcount requests are submitted informally by managers by email or verbally to HR. There is no budget verification step, no link to the approved workforce plan, and no record of the business justification.`, solution: `Headcount requisition workflow: structured form with role title, level, business justification, cost centre, budget code, and target start date. Routes to HR and CFO/Finance for approval. Budget availability checked automatically against approved plan. Approved requisitions create a recruiting record automatically.` },
        { id: '7.2.1.2', name: `Develop and maintain job descriptions`, painpoint: `Job descriptions are created ad hoc in Word for each new hire and are not maintained as a library. Similar roles are described differently each time, creating inconsistency in expectations and salary banding.`, solution: `Job description library: structured repository of approved job descriptions by role and level. New requisitions reference an existing approved description or trigger a review workflow to create a new one. Version history maintained. Description linked to salary band in the compensation framework.` },
        { id: '7.2.1.3', name: `Open job requisitions`, painpoint: `Opening a job requisition requires HR to manually set it up in multiple systems (ATS, HRIS, finance) with data entered separately in each. This creates delays and data inconsistencies across systems.`, solution: `Single requisition creation: approved headcount request triggers automatic setup of the requisition record in the Lowgile platform. Relevant data pushed to connected systems via API. Hiring manager notified of requisition opening with the posting draft for review. No re-entry across systems.` },
        { id: '7.2.1.4', name: `Post job requisitions`, painpoint: `Job postings are published manually on each channel (company website, job boards, LinkedIn) with no centralised management or tracking of which postings are live, which have expired, and what response each channel is generating.`, solution: `Job posting management workflow: approved job description published to connected channels from a single record. Active posting status tracked per channel. Channel performance (applications received per channel) reported automatically. Posting closure triggers notification to hiring manager.` },
        { id: '7.2.3.2', name: `Interview candidates`, painpoint: `Interview scheduling is done manually by HR via email, coordinating between the candidate and multiple interviewers. Each interview round requires a new round of email coordination. The process takes days and creates a poor candidate experience.`, solution: `Interview scheduling workflow: HR creates an interview plan in the platform. Each interviewer receives a task with the candidate's CV attached. Structured feedback form completed after each interview and attached to the candidate record. All feedback consolidated automatically for the hiring decision.` },
        { id: '7.2.4.1', name: `Draw up and make offer`, painpoint: `Offer letters are created manually in Word for each candidate, with salary and benefit terms copied from a reference document. Errors in offer letters (wrong salary, wrong start date, wrong role title) require embarrassing corrections and delay hiring.`, solution: `Offer letter generation: structured offer form captures compensation, role, start date, and reporting line. Platform generates the offer letter from an approved template automatically. Approval workflow is sent before the letter. Version history of all offers per candidate.` },
        { id: '7.2.4.2', name: `Negotiate offer`, painpoint: `Offer negotiation is handled by email with no tracking of what was offered, what the candidate requested, and what was agreed. Verbal agreements are sometimes inconsistent with the final written offer.`, solution: `Offer negotiation log: each negotiation round documented on the candidate record (offer made, counter-request, approved response). All changes to offer terms require a structured update with approval. Final agreed terms reflected in the offer letter generated by the platform.` },
        { id: '7.2.4.3', name: `Hire candidate`, painpoint: `Converting an accepted offer to an employment contract, HRIS record creation, and onboarding task initiation involves manual steps across multiple systems. It takes several days and is prone to omissions.`, solution: `Hire confirmation workflow: accepted offer triggers automatic record creation in HRIS, payroll setup task to finance, IT access provisioning task, and onboarding workflow initiation — all spawned simultaneously from a single confirmation step. No manual coordination across departments.` },
        { id: '7.2.5.1', name: `Obtain candidate background information`, painpoint: `Pre-employment background and reference checks are initiated manually by HR. There is no tracking of which checks have been requested, which have been returned, and whether all required checks are complete before the start date.`, solution: `Background check tracking workflow: required checks listed by role type. Each check assigned to the responsible party (HR, external provider, or hiring manager) with a deadline. Completion status tracked per check. Platform blocks onboarding initiation until all mandatory checks are confirmed complete.` },
        { id: '7.2.5.2', name: `Create applicant record`, painpoint: `Applicant records are created manually in the ATS or not at all. Candidate data from CV, interview feedback, and offer history is scattered across email, shared drives, and different systems.`, solution: `Applicant record created automatically at intake. CV attached and parsed by AI to extract structured candidate data (skills, experience, education). All subsequent interactions (interviews, feedback, offers) attached chronologically to the applicant record. Full candidate history available in one place.` },
        { id: '7.2.5.4', name: `Archive and retain records of non-hires`, painpoint: `Data on candidates who were not hired is not systematically archived or purged. This creates data protection compliance risk (GDPR retention obligations) and storage overhead.`, solution: `Automated retention management: candidate records for non-hires flagged for archiving after a defined retention period. Deletion workflow initiated automatically with confirmation step. Deletion documented with timestamp for audit purposes. Compliant with GDPR retention obligations.` },
      ] },
      { id: '7.3', name: `Manage employee onboarding, training, and development`, challengeCount: 9, challenges: [
        { id: '7.3.1.3', name: `Execute onboarding program`, painpoint: `New hire onboarding involves manual handoffs between HR, IT, Finance, and the hiring manager. Equipment requests, system access, and induction tasks are tracked by email, with frequent gaps and late completions that leave new employees without tools or access on day one.`, solution: `Onboarding workflow: triggered on hire confirmation, spawns parallel tasks simultaneously to IT (access provisioning), Finance (payroll setup), Facilities (equipment), and hiring manager (induction schedule). Each task owner receives it in their inbox with a deadline. HR has a single dashboard view of onboarding progress per new hire. Completion confirmed by checklist sign-off.` },
        { id: '7.3.1.3', name: `Execute onboarding program`, painpoint: `New employees are not consistently informed of company policies, compliance requirements, or role-specific procedures during onboarding. Gaps create legal and compliance exposure.`, solution: `Policy acknowledgement step built into onboarding workflow: new hire receives mandatory reading tasks for required policies with acknowledgement confirmation tracked per document. Compliance-critical items (data protection, code of conduct, safety) flagged as blocking; onboarding not complete until all are acknowledged.` },
        { id: '7.3.2.1', name: `Define employee performance objectives`, painpoint: `Performance objectives are set in a kick-off meeting and documented in an email or a Word document. By mid-year, many employees cannot clearly state their objectives and managers cannot easily access what was agreed.`, solution: `Objective setting workflow: structured objective form per employee with SMART criteria fields. Manager approval of objectives documented and stored on the employee record. Mid-year check-in task auto-generated. Objectives visible to employee and manager at all times throughout the review cycle.` },
        { id: '7.3.2.2', name: `Review employee performance`, painpoint: `Annual performance reviews are conducted on paper or via email-based forms. Ratings are inconsistent across managers. Calibration sessions are informal with no standardised data. Outcome decisions are not systematically linked to compensation reviews.`, solution: `Performance review workflow: structured evaluation form with rating scales and mandatory comment fields. Multi-rater input collected via separate tasks to each reviewer. Calibration dashboard shows rating distribution across teams for management review. Review outcome linked automatically to the compensation review workflow.` },
        { id: '7.3.2.3', name: `Manage employee performance`, painpoint: `Performance improvement plans are created informally by managers without HR involvement. Plans are not documented consistently and there is no follow-up mechanism to track progress against agreed actions.`, solution: `Performance improvement plan workflow: structured PIP form with defined goals, support commitments, and review dates. HR notified on PIP creation and copied on all progress updates. Progress check-in tasks auto-generated at each review date. Completion or outcome documented on the employee record with full history.` },
        { id: '7.3.3.3', name: `Manage employee skill and competency development`, painpoint: `Employee skill and competency tracking is done in individual spreadsheets or not at all. HR has no consolidated view of what skills exist in the organisation, where gaps are, and whether development investments are having an effect.`, solution: `Skills and competency register: each employee's skills, certifications, and competency levels recorded and maintained. Skills gap analysis by role, team, or function available as a dashboard. Development activities linked to skill targets. Skills inventory searchable by HR and resource managers for assignment and planning.` },
        { id: '7.3.4.4', name: `Establish training needs by analysis of required and available skills`, painpoint: `Training needs analysis is done annually via survey or manager conversations with no systematic link to skill gaps in the workforce. Training priorities are determined by seniority of requesters, not by objective need.`, solution: `Training needs analysis workflow: skills gap report from the competency register drives an annual training needs process. Managers submit training requests via structured form linked to specific skill gaps. Requests consolidated and prioritised by HR against budget. Approved training plan communicated to affected employees via task.` },
        { id: '7.3.4.5', name: `Develop, conduct, and manage employee and/or management training programs`, painpoint: `Training attendance and completion is tracked in a spreadsheet that is manually updated by the HR admin after each session. Records are incomplete and certification tracking is unreliable.`, solution: `Training completion tracking: each training programme exists as a record in the platform. Attendance confirmed by structured sign-off per participant. Completion automatically updates the employee's skills profile. Certification expiry dates tracked with automatic renewal alerts.` },
        { id: '7.3.4.6', name: `Manage examinations and certifications`, painpoint: `Mandatory certifications (compliance training, professional licences, safety certifications) are tracked in Excel files maintained by individual managers or HR admins. Lapses are discovered too late, creating compliance or operational risk.`, solution: `Certification lifecycle management: each required certification tracked per employee with expiry date, issuing body, and renewal process. Automated alerts at 90/60/30 days before expiry. Overdue certifications escalated to the employee's manager and HR. Confirmation of renewal updates the record automatically.` },
      ] },
      { id: '7.5', name: `Reward and retain employees`, challengeCount: 3, challenges: [
        { id: '7.5.1.5', name: `Administer compensation and rewards to employees`, painpoint: `Salary increases and bonus decisions are made in fragmented processes across managers. There is no consolidated compensation review, no consistent application of salary bands, and no systematic record of award rationale.`, solution: `Compensation review workflow: structured salary and bonus input form per employee. Budget pooled by team with real-time spend tracking. Manager decisions routed for HR and CFO approval. Approved awards documented with rationale on the employee record. Total compensation cost visible to management in real time.` },
        { id: '7.5.2.1', name: `Deliver employee benefits program`, painpoint: `Benefits administration (health insurance enrollment, pension elections, perks) involves paper forms or email submissions to HR that are manually entered into the payroll system. Errors in benefit elections cause payroll corrections months later.`, solution: `Benefits enrollment workflow: employee submits elections via structured digital form. Elections validated against eligibility rules automatically. Confirmed elections written to payroll system via API. Changes to elections require a structured amendment workflow with approval. Full enrollment history per employee.` },
        { id: '7.5.2.2', name: `Administer benefit enrollment`, painpoint: `Benefit enrollment deadlines are communicated by email and are frequently missed by employees who claim they were not informed. HR must manually chase stragglers and process late enrollments individually.`, solution: `enrollment deadline workflow: each employee receives an enrollment task with the deadline clearly stated. Automated reminders sent at 14 days, 7 days, and 1 day before deadline. Completion tracked in real time. Non-responders escalated to their manager automatically.` },
      ] },
      { id: '7.6', name: `Redeploy and retire employees`, challengeCount: 2, challenges: [
        { id: '7.6.6.2', name: `Manage resource deployment`, painpoint: `Deploying and reassigning staff across projects or locations is coordinated by email with no structured tracking of who is assigned where, from when, and at what cost. HR and Finance often have inconsistent records.`, solution: `Resource deployment workflow: assignment change submitted via structured form with effective date, cost centre, project code, and approval. Manager and HR confirmation required. Change written to HRIS and finance systems automatically via API. Assignment history maintained per employee.` },
        { id: '7.6.7.1', name: `Manage expatriates`, painpoint: `Expatriate management (relocation allowances, tax equalisation, home-country benefit continuity) is tracked in individual Excel files by HR. Deadlines, payments, and regulatory requirements are frequently missed.`, solution: `Expatriate management workflow: structured expat record per employee with assignment start/end, host country, allowances, and compliance checkpoints. Deadline-based tasks generated automatically for payroll, tax, and benefits adjustments. Expiry alerts for assignment terms and work permits.` },
      ] },
    ]
  },
  '8.0': {
    function: '8.0',
    name: `Manage Information Technology (IT)`,
    processGroups: [
      { id: '8.1', name: `Develop and manage IT customer relationships`, challengeCount: 2, challenges: [
        { id: '8.1.5.4', name: `Define service level agreement`, painpoint: `SLA terms are defined in Word documents and are not operationalised in any system. Actual SLA performance is not tracked, breaches are not detected automatically, and there is no report showing whether IT is meeting its commitments.`, solution: `SLA configuration in service management workflow: each IT service has defined SLA parameters (response time, resolution time, escalation thresholds) that drive the task management system. SLA compliance reported automatically. Breach history reported to the IT service review meeting.` },
        { id: '8.1.7.1', name: `Assess SLA compliance`, painpoint: `SLA compliance is reviewed monthly from manually extracted data. IT management does not know in real time whether current service performance is on track and cannot identify deteriorating trends before the SLA breach occurs.`, solution: `Real-time SLA compliance dashboard: open tickets by service and status, current SLA breach rate, and trend vs. prior periods. Automatic alert to IT management when breach rate exceeds a threshold. Data pulled live from the service management workflow — no manual extraction.` },
      ] },
      { id: '8.2', name: `Develop and manage IT business strategy`, challengeCount: 1, challenges: [
        { id: '8.2.4.7', name: `Monitor and report IT performance`, painpoint: `IT performance reporting requires manual data collection from multiple monitoring tools, spreadsheet consolidation, and a presentation refresh before each management meeting. The process takes a full day and the data is stale by presentation time.`, solution: `Automated IT performance dashboard: key metrics (availability, incident volume, SLA compliance, change success rate) pulled from service management data in real time. One-click export to PPTX for management meetings. No manual compilation needed.` },
      ] },
      { id: '8.3', name: `Develop and manage IT resilience and risk`, challengeCount: 11, challenges: [
        { id: '8.3.1.8', name: `Identify and evaluate IT risk`, painpoint: `IT risk identification and assessment is done in annual workshops with outputs captured in a Word document or shared spreadsheet. No ongoing monitoring exists between annual cycles. Emerging risks go untracked until the next scheduled review.`, solution: `IT risk register: structured risk records with category, likelihood, impact, owner, and mitigation plan. Periodic review tasks generated automatically for each risk owner. New risk submission available at any time. Dashboard shows open risks by category and severity. Escalation workflow for high-rated risks routes to IT management and the board.` },
        { id: '8.3.3.4', name: `Create and maintain IT security policies, standards, and procedures`, painpoint: `IT security policies exist as Word documents in shared drives that are rarely updated and not consistently acknowledged by IT staff. When a security incident occurs, it is unclear whether the relevant policy was current, complete, and known to the responsible team.`, solution: `IT security policy register: policies stored with version history and effective date. Update approval workflow. Staff acknowledgement tracked per policy version. Non-acknowledgement escalated to team lead. Policy currency confirmed automatically as part of the annual IT security review cycle.` },
        { id: '8.3.3.9', name: `Monitor and manage IT activity risk`, painpoint: `IT risk and threat monitoring relies on manual log reviews and informal reporting. There is no structured escalation path when a monitoring alert is raised. Alerts are often missed or acted on too slowly.`, solution: `Threat monitoring escalation workflow: security alerts classified by severity. High-severity alerts automatically create an incident task for the security team with SLA timer. Response steps documented in the incident record. Resolution confirmed and root cause captured. Full incident history available for trend analysis.` },
        { id: '8.3.4.3', name: `Manage IT business continuity`, painpoint: `IT business continuity plans are stored in shared drives and are tested informally (or not at all). Activation procedures are not operationalised, and in a real incident the team would need to improvise rather than execute a rehearsed process.`, solution: `Business continuity plan register: structured scenario documentation with contact trees, activation checklists, and recovery procedures. Drill scheduling workflow with task generation to all participants. Annual review task auto-generated. Activation workflow initiates communication cascade and tracks response steps in real time.` },
        { id: '8.3.6.3', name: `Perform IT compliance reporting`, painpoint: `IT compliance reports are compiled manually by gathering evidence from multiple systems, writing narrative, and formatting a document for the auditor or regulator. The process is slow, resource-intensive, and error-prone.`, solution: `IT compliance reporting: evidence automatically collected from workflows (access reviews, change records, incident logs, policy acknowledgements) and aggregated into a compliance report. Report generated on demand in PDF format with full evidence pack. Audit preparation time reduced from days to hours.` },
        { id: '8.3.6.5', name: `Support external audits and reports`, painpoint: `Preparing evidence for external auditors requires IT staff to manually gather access logs, change records, and incident reports from multiple systems. The process takes weeks and the evidence quality is inconsistent.`, solution: `Every action in the Lowgile platform is logged automatically: access grants, configuration changes, approvals, rejections, and incident responses captured in a tamper-proof audit trail attached to each record. Confirmed production feature: conversation-style audit history on every object. Evidence report exportable on demand. Audit preparation time reduced from weeks to hours.` },
        { id: '8.3.7.3', name: `Implement and enforce change control procedures`, painpoint: `IT change deployments are approved informally by email or verbal agreement. There is no structured change advisory board process, no documented risk assessment per change, and no rollback plan required before deployment.`, solution: `Change management workflow: change request form captures scope, risk rating, rollback plan, and deployment window. Routes to relevant approvers based on risk level. Approved changes communicated automatically to affected stakeholders. Post-deployment verification task generated and tracked. All change records with approval history retained permanently.` },
        { id: '8.3.8.1', name: `Support integration of identity and authorization policies`, painpoint: `Identity and access provisioning relies on manual IT team actions triggered by email requests. There is no standard request form, no approval workflow, and no systematic deprovisioning when employees leave or change roles.`, solution: `Confirmed Lowgile capability: SSO integration and row- and column-level RBAC in production. Access request workflow: structured form routes to manager and IT for approval. Approved access provisioned automatically. Role change or offboarding triggers automatic deprovisioning tasks across all systems. Joiner/mover/leaver process fully automated.` },
        { id: '8.3.8.2', name: `Manage IT user directory`, painpoint: `The IT user directory is maintained manually. Stale accounts (former employees, contractors) accumulate over time. Periodic access reviews are done annually at best and rely on IT staff remembering to act on the outputs.`, solution: `Automated directory governance: periodic access review tasks sent to system owners and line managers on a configured schedule. Stale accounts flagged automatically (no login in X days). Offboarding workflow triggers account suspension and deletion. Access audit report available on demand for compliance purposes.` },
        { id: '8.3.8.3', name: `Manage IT user authorization`, painpoint: `User authorisation (role assignments, permission changes, elevated access requests) is managed by email. There is no consistent approval requirement, no record of who authorised what access, and no periodic review of whether access remains appropriate.`, solution: `Access authorisation workflow: each permission change requires a structured request with business justification, approved by the data owner and IT. All grants and revocations logged permanently with authoriser and timestamp. Periodic re-authorisation tasks auto-generated for sensitive roles. Privileged access requires additional approval tier.` },
        { id: '8.3.8.6', name: `Respond to IT information security and network breaches`, painpoint: `Security incident response is ad-hoc; whoever notices the breach decides what to do next. There is no defined escalation path, no documented response steps, and no post-incident review to capture learnings and improve the process.`, solution: `Security incident response workflow: incident reported via structured form with severity classification. Immediately spawns parallel tasks: IT containment, management notification, and (if applicable) data protection officer notification. Response steps documented in real time. Post-incident review task generated on closure. Full incident timeline stored for regulatory reporting.` },
      ] },
      { id: '8.4', name: `Manage information`, challengeCount: 2, challenges: [
        { id: '8.4.4.2', name: `Maintain business information feeds and repositories`, painpoint: `Data feeds between business systems (ERP, HR, CRM) break silently and are not detected until a downstream process fails. There is no systematic monitoring of feed health and no automatic alerting.`, solution: `Integration monitoring workflow: each scheduled data feed has a completion check in the platform. Failed or delayed feeds generate an automatic alert to the responsible IT team. Error details captured on the incident record. Retry logic with escalation after repeated failure.` },
        { id: '8.4.4.4', name: `Implement and administer business information access`, painpoint: `Business information access management (who can see which data sets and reports) is managed informally by IT responding to email requests. There is no regular review of whether access granted is still appropriate.`, solution: `Data access management workflow: access requests submitted via structured form with business justification and data owner approval required. Granted access logged per user and data set. Periodic review tasks generated for data owners. Access withdrawn automatically when the defined review confirms it is no longer needed.` },
      ] },
      { id: '8.5', name: `Develop and manage services/solutions`, challengeCount: 1, challenges: [
        { id: '8.5.4.1', name: `Execute IT service/solution development lifecycle`, painpoint: `Software testing and release sign-off is undocumented. Test results are not formally captured, release approvals are given by email, and there is no audit trail of what was verified and by whom before a release went live.`, solution: `Release management workflow: structured test record with test case list, pass/fail per test case, and tester identity. Go-live approval chain with configurable sign-off requirements. All approvals time-stamped and linked to the release record. Rollback procedure documented on the same record. Full release history permanently retained.` },
      ] },
      { id: '8.6', name: `Deploy services/solutions`, challengeCount: 1, challenges: [
        { id: '8.6.3.6', name: `Approve change/release deployment`, painpoint: `Change and release approvals are given by email reply with no threshold-based routing, no SLA enforcement, and no central record linking the approved release to the subsequent deployment outcome.`, solution: `Change approval workflow: each release routed to the correct approvers based on scope and risk rating. Approver receives task in inbox with full technical context attached. SLA enforced; escalation if not responded to within the defined window. Approved change record linked to deployment confirmation.` },
      ] },
      { id: '8.7', name: `Create and manage support services/solutions`, challengeCount: 5, challenges: [
        { id: '8.7.7.4', name: `Maintain IT asset records`, painpoint: `IT asset records (hardware, software licences, subscriptions) are maintained in a spreadsheet or not tracked at all. Assets are lost, licences expire without renewal, and software audits reveal undocumented installations that create compliance and cost risk.`, solution: `IT asset register: structured asset records with type, owner, location, purchase date, warranty expiry, and licence terms. Automated alerts for warranty and licence renewals. Asset assignment tracked per employee; offboarding workflow triggers asset return and decommission tasks. Audit report available on demand.` },
        { id: '8.7.7.5', name: `Administer IT licenses/user agreements`, painpoint: `Software licence usage is not monitored against entitlements. The company either over-spends on unused licences or unknowingly operates out-of-compliance with vendor agreements.`, solution: `Licence management module: each software licence tracked with entitlement count and assigned users. Utilisation report shows actual vs. licensed count automatically. Over-allocation flagged immediately. Under-utilised licences surfaced for potential cost reduction. Renewal tasks generated at configured lead time before expiry.` },
        { id: '8.7.8.1', name: `Triage IT issues/requests`, painpoint: `IT support requests arrive by email with no consistent triage, no SLA tracking, no visibility for IT management on ticket volume, and no ability to identify recurring issues that should be permanently fixed rather than repeatedly resolved.`, solution: `IT helpdesk workflow: request intake via form or AI-parsed email. Automatic triage by category (hardware, software, access, connectivity). Assigned to the correct team inbox with SLA timer. Escalation fires on SLA breach. Resolution steps documented. Dashboard shows open tickets, average resolution time, and category distribution.` },
        { id: '8.7.8.1', name: `Triage IT issues/requests`, painpoint: `Recurring IT issues are resolved repeatedly as individual incidents without anyone identifying and addressing the root cause. There is no aggregated view of which issues are systemic.`, solution: `Recurring issue detection: platform flags when the same issue type (by category, affected system, and error pattern) exceeds a threshold within a defined period. Automatic escalation to IT management with a problem record created for root cause investigation. Problem resolution tracked separately from incident tickets.` },
        { id: '8.7.8.5', name: `Resolve IT issues/requests`, painpoint: `IT issue resolution quality is inconsistent. There is no required documentation of what was done to resolve an issue, so the same problems require the same effort each time they occur. Knowledge is trapped in individual IT staff members.`, solution: `Resolution documentation requirement: each closed ticket requires a structured resolution note with steps taken, root cause, and resolution category. Notes contribute to the service knowledge base. New tickets for the same issue type automatically surface the relevant knowledge base entry to the assignee.` },
      ] },
    ]
  },
  '11.0': {
    function: '11.0',
    name: `Manage Enterprise Risk, Compliance, Remediation, and Resiliency`,
    processGroups: [
      { id: '11.1', name: `Manage enterprise risk`, challengeCount: 12, challenges: [
        { id: '11.1.1.2', name: `Develop and maintain enterprise risk policies and procedures`, painpoint: `Enterprise risk policies exist as documents in shared drives and are communicated by email. Policy updates are not systematically distributed and there is no tracking of whether all relevant employees have read and acknowledged the current version.`, solution: `Risk policy distribution workflow: policy updates sent to all relevant staff via task with mandatory acknowledgement. Acknowledgement tracked per person and per policy version. Non-acknowledgement escalated to line manager. Full distribution history available for audit purposes.` },
        { id: '11.1.1.5', name: `Prepare and report enterprise risk to executive management and board`, painpoint: `Enterprise risk reports for the executive team and board are compiled manually from individual business unit submissions. Preparation takes days, the data is stale, and different business units use inconsistent formats and scoring methodologies.`, solution: `Enterprise risk reporting dashboard: risk register data from all business units consolidated automatically into a group-level view. Heat map, top risk summary, and mitigation status updated in real time. Board report generated automatically from the dashboard in PDF or PPTX format. All business units use the same structured risk record format.` },
        { id: '11.1.2.1', name: `Identify enterprise level risks`, painpoint: `Enterprise risk identification relies on annual workshops. Risks identified between workshops are not captured systematically. The risk register is a static document that reflects only what was known at the last workshop date.`, solution: `Continuous risk intake: any employee or manager can submit a new risk observation via structured form at any time. Submitted risks reviewed and classified by the risk team. Approved risks added to the register. Risk owner notified and mitigation planning task generated. No need to wait for the next annual workshop.` },
        { id: '11.1.2.3', name: `Develop risk mitigation and management strategy and integrate with existing performance management processes`, painpoint: `Risk mitigation strategies are documented in a separate Word file that is not linked to the risk register. The connection between risks and mitigating actions is maintained only in the risk manager's head, and there is no tracking of whether mitigation actions are actually implemented.`, solution: `Mitigation plan management: each risk in the register has linked mitigation actions with owner, due date, and evidence requirement. Action completion tracked via task inbox. Progress visible on the risk record. Overdue actions escalated automatically to the risk owner and their manager.` },
        { id: '11.1.2.4', name: `Verify business unit and functional risk mitigation plans are implemented`, painpoint: `Verifying that business unit risk mitigation plans have actually been implemented is done through periodic self-assessments and ad-hoc audits. The risk management function has no real-time visibility of mitigation plan status across the organisation.`, solution: `Mitigation implementation tracking: all mitigation tasks across business units visible to the enterprise risk function on a centralised dashboard. Completion rate by business unit and risk category shown in real time. Overdue mitigations highlighted. Attestation step confirms completion with evidence before the task is closed.` },
        { id: '11.1.2.5', name: `Ensure risks and risk mitigation actions are monitored`, painpoint: `Ongoing risk monitoring between formal review cycles depends on individual risk owners voluntarily reporting changes. Risk status updates are infrequent and there is no systematic trigger for re-assessment when conditions change.`, solution: `Periodic risk review workflow: review tasks auto-generated for each risk owner on a defined schedule (monthly, quarterly, or trigger-based). Review form asks whether the risk status, likelihood, or impact has changed. Updated assessments flow immediately into the risk dashboard. Overdue reviews escalated automatically.` },
        { id: '11.1.2.6', name: `Report on enterprise risk activities`, painpoint: `Risk reporting to management and the board is done by manually consolidating individual risk reports and producing a PowerPoint presentation. The process takes days and the resulting report is already out of date.`, solution: `Automated risk reporting: enterprise risk dashboard generates a structured management report automatically. Top risks, mitigation status, and trend data pulled from the live register. Report exported to PPTX or PDF on demand. Board pack insert generated without manual preparation.` },
        { id: '11.1.3.1', name: `Identify risks`, painpoint: `Business unit risk identification lacks a structured methodology. Risks are described inconsistently; some are specific and measurable, others are vague. This makes risk prioritisation and comparison across business units unreliable.`, solution: `Standardised risk submission form: structured fields for risk category, description, affected process, likelihood rating, impact rating, and velocity. Mandatory fields prevent vague submissions. Taxonomy-driven categorisation ensures consistency across all business units. Submitted risks visible to the enterprise risk function immediately.` },
        { id: '11.1.3.2', name: `Assess risks using enterprise risk framework policies and procedures`, painpoint: `Risk assessments are scored subjectively and differently by each business unit. There is no calibration process and no consistency in what "High" or "Medium" means across the organisation.`, solution: `Scoring calibration built into the risk form: each likelihood and impact level is defined with specific criteria visible at the point of assessment. Calibration review step in the enterprise risk workflow allows the central team to adjust scores and document the rationale. Scoring distribution visible across the register for management review.` },
        { id: '11.1.3.3', name: `Develop mitigation plans for risks`, painpoint: `Mitigation plans are developed informally after risk identification. There is no structured template, no required timeline, and no escalation when a mitigation plan has not been developed for a high-rated risk within a defined period.`, solution: `Mitigation planning workflow: high-rated risks automatically trigger a mitigation plan development task to the risk owner with a defined deadline. Structured mitigation plan template with required fields (control type, owner, target date, expected residual risk). Overdue plans escalated to the risk management function.` },
        { id: '11.1.3.5', name: `Monitor risks`, painpoint: `Risk monitoring between formal review cycles is ad-hoc. Risk owners do not know when they are expected to update their assessments. Changes in risk status go unreported until the next annual cycle.`, solution: `Automated risk monitoring schedule: each risk has a configured review frequency (monthly for high, quarterly for medium, annually for low). Review task auto-generated on schedule and sent to the risk owner. Overdue reviews escalated to the risk management function. Risk status change can also be reported ad-hoc at any time.` },
        { id: '11.1.3.7', name: `Report on risk activities`, painpoint: `Business unit risk activity reporting to the enterprise risk function is done by email or spreadsheet and is inconsistent in format, completeness, and frequency. The risk function cannot get a current picture of risk activity without significant chasing.`, solution: `Risk activity report generated automatically from business unit task completions, new risk submissions, and mitigation updates in the platform. Enterprise risk function sees a live consolidated view at all times. Formal report package generated for scheduled reporting cycles without any manual preparation.` },
      ] },
      { id: '11.2', name: `Manage compliance`, challengeCount: 11, challenges: [
        { id: '11.2.1.1', name: `Develop enterprise compliance policies and procedures`, painpoint: `Compliance policies are distributed by email and stored in shared drives. There is no systematic process to ensure that relevant staff have read and understood them, and no connection between policies and the processes they govern.`, solution: `Compliance policy register: each policy linked to the process it governs. Distributed to relevant staff via task with mandatory acknowledgement. Policy version tracked per recipient. Process-level controls linked directly to the governing policy. Non-acknowledgement escalated to line manager.` },
        { id: '11.2.1.2', name: `Implement enterprise compliance activities`, painpoint: `Implementing compliance activities (control testing, documentation reviews, certification renewals) relies on individual initiative. There is no structured programme, no tracking of completion, and no escalation when activities are overdue.`, solution: `Compliance activity calendar: each required compliance activity scheduled with owner, due date, and evidence requirement. Tasks auto-generated on schedule. Completion status tracked in real time. Overdue activities escalated automatically. Compliance calendar visible to the Chief Compliance Officer as a dashboard.` },
        { id: '11.2.1.3', name: `Manage internal audits`, painpoint: `Internal audits are planned in a spreadsheet and executed via email communication between the auditor and auditee. Findings are documented in Word, tracked in Excel, and remediation monitoring relies on periodic follow-up emails.`, solution: `Internal audit workflow: audit plan created in the platform with scope, timeline, and assigned auditor. Document request tasks sent to auditees automatically. Findings entered in structured form with severity rating and remediation owner. Remediation tracking via task inbox with SLA enforcement. Audit report generated automatically from findings. All audit records permanently retained.` },
        { id: '11.2.2.1', name: `Develop regulatory compliance procedures`, painpoint: `Regulatory compliance procedures are documented in Word files that are reviewed annually at best. Procedures become outdated when regulations change, and staff are often operating against procedures that no longer reflect current requirements.`, solution: `Regulatory compliance procedure register: each procedure linked to the applicable regulation, with an owner, effective date, and review schedule. Regulatory change triggers a mandatory procedure review workflow. Updated procedures distributed for acknowledgement before the effective date. Non-acknowledgement escalated before the regulation takes effect.` },
        { id: '11.2.2.2', name: `Identify applicable regulatory requirements`, painpoint: `Identifying and maintaining the full universe of applicable regulatory requirements is done manually by the compliance team. New regulations are identified reactively (after a breach or an external alert) rather than proactively through systematic monitoring.`, solution: `Regulatory obligation register: structured record of each applicable regulation with jurisdiction, topic, responsible owner, and key obligation summary. New obligations added via structured intake workflow. Each obligation linked to the controls that address it. Coverage gaps (obligations with no linked control) surfaced automatically in the compliance dashboard.` },
        { id: '11.2.2.3', name: `Monitor the regulatory environment for changing or emerging regulations`, painpoint: `Monitoring the regulatory environment for new or changing regulations depends on individual compliance officers reading regulatory newsletters. There is no structured process to assess impact, assign responsibility, or track response to regulatory changes.`, solution: `Regulatory change management workflow: new regulatory development submitted via structured form with description and potential impact assessment. Impact assessment task assigned to the responsible compliance owner. Implementation plan required for significant changes. Progress tracked against self-imposed implementation deadline. All regulatory changes permanently recorded with response history.` },
        { id: '11.2.2.4', name: `Assess current compliance position and identify weaknesses or shortfalls therein`, painpoint: `Compliance gap assessments are conducted annually in workshops. Between assessments, newly identified gaps are not tracked. Management does not have a current picture of the company's compliance posture at any point during the year.`, solution: `Continuous compliance posture dashboard: for each obligation in the register, current control status (compliant, partially compliant, non-compliant, not assessed) maintained and updated as controls are tested. Gap summary visible to the Chief Compliance Officer at all times. Formal assessment workflow generates a point-in-time posture report for management or regulators on demand.` },
        { id: '11.2.2.5', name: `Implement missing or stronger regulatory compliance controls and policies`, painpoint: `Implementing new controls to address compliance gaps is tracked informally. There is no central record of which gaps have been assigned to whom, what the implementation deadline is, and whether the new control is actually in place.`, solution: `Control implementation workflow: each identified compliance gap creates an implementation task with owner, target date, and required evidence. Implementation progress tracked in the compliance dashboard. Evidence uploaded on completion. Control effectiveness confirmed by a separate review step before the gap is marked closed. Full implementation history retained.` },
        { id: '11.2.2.6', name: `Monitor and test regulatory compliance position and existing controls`, painpoint: `Regulatory compliance testing and monitoring is done periodically by the compliance team with no standardised methodology, no documentation of what was tested, and no record of the test results that could satisfy a regulator or external auditor.`, solution: `Compliance control testing workflow: structured test plan per regulatory obligation with defined test cases and expected evidence. Test execution recorded with result (pass/fail) and supporting evidence uploaded. Testing sign-off required from the compliance owner. All test records permanently retained and accessible for regulatory review. Confirmed Lowgile capability: tamper-proof audit trail on every object.` },
        { id: '11.2.2.7', name: `Compile and communicate compliance scorecard(s)`, painpoint: `Compliance scorecards for management and the board are prepared manually by the compliance team, taking days to compile. The scorecard is a point-in-time report and is outdated the moment it is distributed.`, solution: `Compliance scorecard generated automatically from the obligation register and control testing results. Scorecard by regulatory domain available on demand in the platform. Formal scorecard report exported to PDF or PPTX for scheduled reporting. No manual preparation. Always reflects the current compliance posture.` },
        { id: '11.2.2.8', name: `Compile and communicate internal and regulatory compliance reports`, painpoint: `Internal and regulatory compliance reports are compiled by manually gathering data from multiple systems and formatting into the required structure. Each report cycle takes days and the quality depends entirely on the individual preparing it.`, solution: `Automated compliance reporting: report data assembled automatically from obligation records, control test results, gap status, and remediation tracking in the platform. Report formatted to the required template. Approval workflow before transmission. All reports stored with full evidence pack and submission history.` },
      ] },
    ]
  },
};

// Tab configuration - maps display label to process group IDs
const TABS = [
  { label: 'Finance', functionId: '9.0', ids: ['9.1','9.2','9.3','9.4','9.5','9.6','9.7','9.8'] },
  { label: 'Sales & Orders', functionId: '3.0', ids: ['3.1','3.2','3.3','3.4','3.5'] },
  { label: 'Procurement', functionId: '4.0', ids: ['4.1','4.2','4.3','4.4'] },
  { label: 'Deliver Services', functionId: '5.0', ids: ['5.1','5.2','5.3'] },
  { label: 'Customer Service', functionId: '6.0', ids: ['6.2','6.3','6.5'] },
  { label: 'HR', functionId: '7.0', ids: ['7.1','7.2','7.3','7.5','7.6'] },
  { label: 'IT', functionId: '8.0', ids: ['8.1','8.2','8.3','8.4','8.5','8.6','8.7'] },
  { label: 'Risk & Compliance', functionId: '11.0', ids: ['11.1','11.2'] },
];

class ProcessExplorer extends LitElement {
  static properties = {
    activeTab: { type: String },
    activeGroupId: { type: String },
    expandedIds: { type: Object },
    searchQuery: { type: String },
  };

  constructor() {
    super();
    this.activeTab = 'Finance';
    this.activeGroupId = '9.1';
    this.expandedIds = {};
    this.searchQuery = '';
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      font-family: 'Figtree', sans-serif;
      color: #0D1B2A;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    .section-wrapper {
      padding: 0 0 96px;
    }

    .eyebrow {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #12204c;
      margin-bottom: 16px;
    }

    h2 {
      font-family: 'Figtree', sans-serif;
      font-size: clamp(32px, 4vw, 52px);
      font-weight: 400;
      line-height: 1.1;
      color: #0D1B2A;
      margin-bottom: 12px;
    }

    .subtitle {
      font-size: 16px;
      color: #4A5568;
      max-width: 520px;
      line-height: 1.6;
      margin-bottom: 36px;
    }

    /* Search */
    .search-wrapper {
      position: relative;
      margin-bottom: 28px;
    }

    .search-icon {
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      color: #94A3B8;
      width: 16px;
      height: 16px;
      pointer-events: none;
    }

    .search-input {
      width: 100%;
      padding: 14px 18px 14px 44px;
      border: 1.5px solid transparent;
      border-radius: 100px;
      font-size: 14px;
      font-family: inherit;
      background: #F0F2F8;
      color: #0D1B2A;
      outline: none;
      transition: border-color 0.2s, background 0.2s;
    }

    .search-input:focus {
      border-color: #12204c;
      background: #fff;
    }

    .search-input::placeholder { color: #94A3B8; }

    /* Tabs */
    .tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 28px;
    }

    .tab-btn {
      padding: 8px 18px;
      border-radius: 100px;
      border: 1.5px solid #CBD5E0;
      background: transparent;
      font-family: inherit;
      font-size: 13px;
      font-weight: 500;
      color: #4A5568;
      cursor: pointer;
      transition: all 0.18s ease;
      white-space: nowrap;
    }

    .tab-btn:hover:not(:disabled) { border-color: #12204c; color: #12204c; }

    .tab-btn.active {
      background: #0D1B2A;
      border-color: #0D1B2A;
      color: #fff;
    }

    .tab-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    /* Explorer layout */
    .explorer {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 0;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 24px rgba(13,27,42,0.10);
      min-height: 540px;
    }

    /* Sidebar */
    .sidebar {
      background: #0D1B2A;
      color: #fff;
      overflow-y: auto;
    }

    .sidebar-header {
      padding: 20px 20px 14px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }

    .sidebar-fn {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.4);
      margin-bottom: 4px;
    }

    .sidebar-title {
      font-size: 13px;
      font-weight: 600;
      color: rgba(255,255,255,0.9);
      line-height: 1.3;
    }

    .group-list { padding: 8px 0; }

    .group-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 11px 20px;
      cursor: pointer;
      transition: background 0.15s;
      border-left: 3px solid transparent;
      gap: 10px;
    }

    .group-item:hover { background: rgba(255,255,255,0.06); }

    .group-item.active {
      background: rgba(59,91,219,0.18);
      border-left-color: #12204c;
    }

    .group-item.disabled {
      opacity: 0.35;
      cursor: default;
      pointer-events: none;
    }

    .group-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #12204c;
      flex-shrink: 0;
      margin-top: 2px;
    }

    .group-item.active .group-dot { background: #60A5FA; }

    .group-info { flex: 1; min-width: 0; }

    .group-name {
      font-size: 13px;
      font-weight: 500;
      color: rgba(255,255,255,0.85);
      line-height: 1.35;
      margin-bottom: 2px;
    }

    .group-count {
      font-size: 11px;
      color: rgba(255,255,255,0.4);
    }

    .group-arrow {
      color: rgba(255,255,255,0.3);
      font-size: 14px;
      flex-shrink: 0;
    }

    .group-item.active .group-arrow { color: #60A5FA; }

    /* Main panel */
    .panel {
      background: #fff;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
    }

    .panel-header {
      background: #0D1B2A;
      padding: 20px 28px;
      color: #fff;
    }

    .panel-title {
      font-size: 17px;
      font-weight: 600;
      margin-bottom: 4px;
    }

    .panel-subtitle {
      font-size: 12px;
      color: rgba(255,255,255,0.5);
    }

    .challenges-list {
      padding: 0;
      flex: 1;
    }

    .challenge-card {
      border-bottom: 1px solid #F1F5F9;
      overflow: hidden;
    }

    .challenge-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 20px 28px;
      cursor: pointer;
      gap: 12px;
      transition: background 0.15s;
    }

    .challenge-header:hover { background: #F8FAFC; }

    .challenge-name {
      font-size: 15px;
      font-weight: 500;
      color: #0D1B2A;
      line-height: 1.4;
      flex: 1;
    }

    .challenge-name .search-result-group {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #94A3B8;
      margin-bottom: 3px;
    }

    .challenge-toggle {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 1.5px solid #CBD5E0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: #94A3B8;
      font-size: 16px;
      line-height: 1;
      margin-top: 1px;
      transition: all 0.15s;
    }

    .challenge-card.expanded .challenge-toggle {
      background: #0D1B2A;
      border-color: #0D1B2A;
      color: #fff;
    }

    .challenge-body {
      display: none;
      padding: 0 28px 24px;
    }

    .challenge-card.expanded .challenge-body { display: block; }

    .painpoint {
      font-size: 14px;
      color: #4A5568;
      line-height: 1.65;
      margin-bottom: 16px;
    }

    .solution-box {
      background: #EEF2FF;
      border-radius: 8px;
      padding: 16px 18px;
    }

    .solution-label {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #12204c;
      margin-bottom: 8px;
    }

    .solution-text {
      font-size: 13px;
      color: #1E3A8A;
      line-height: 1.65;
    }

    /* Search results */
    .search-results {
      padding: 24px 28px;
    }

    .search-result-item {
      padding: 16px 0;
      border-bottom: 1px solid #F1F5F9;
    }

    .search-result-item:last-child { border-bottom: none; }

    .search-result-group {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #94A3B8;
      margin-bottom: 4px;
    }

    .search-result-name {
      font-size: 15px;
      font-weight: 500;
      color: #0D1B2A;
      margin-bottom: 6px;
    }

    .search-result-text {
      font-size: 13px;
      color: #4A5568;
      line-height: 1.5;
    }

    mark {
      background: #DBEAFE;
      color: #1D4ED8;
      border-radius: 2px;
      padding: 0 2px;
    }

    .no-results {
      padding: 48px 28px;
      text-align: center;
      color: #94A3B8;
      font-size: 14px;
    }

    /* Footer CTA */
    .footer-cta {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-top: 28px;
      flex-wrap: wrap;
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 13px 24px;
      background: #12204c;
      color: #fff;
      border: none;
      border-radius: 8px;
      font-family: inherit;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.18s;
      text-decoration: none;
    }

    .btn-primary:hover { background: #2f4ac0; }

    .cta-link {
      font-size: 14px;
      color: #4A5568;
    }

    .cta-link a {
      color: #12204c;
      text-decoration: underline;
      cursor: pointer;
    }

    @media (max-width: 700px) {
      .explorer {
        grid-template-columns: 1fr;
      }
      .sidebar {
        max-height: 240px;
      }
    }
  `;

  get activeGroups() {
    const tab = TABS.find(t => t.label === this.activeTab);
    if (!tab || tab.ids.length === 0) return [];
    const fn = DATA_BY_FUNCTION[tab.functionId];
    if (!fn) return [];
    return fn.processGroups.filter(g => tab.ids.includes(g.id));
  }

  get activeGroup() {
    const tab = TABS.find(t => t.label === this.activeTab);
    if (!tab) return null;
    const fn = DATA_BY_FUNCTION[tab.functionId];
    if (!fn) return null;
    return fn.processGroups.find(g => g.id === this.activeGroupId) || null;
  }

  get searchResults() {
    const q = this.searchQuery.trim().toLowerCase();
    if (!q) return null;
    const results = [];
    for (const fn of Object.values(DATA_BY_FUNCTION)) {
      for (const group of fn.processGroups) {
        for (const c of group.challenges) {
          if (
            c.name.toLowerCase().includes(q) ||
            c.painpoint.toLowerCase().includes(q) ||
            c.solution.toLowerCase().includes(q)
          ) {
            results.push({ group, challenge: c });
          }
        }
      }
    }
    return results;
  }

  highlight(text) {
    const q = this.searchQuery.trim();
    if (!q) return text;
    const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  toggleChallenge(id) {
    const next = { ...this.expandedIds };
    next[id] = !next[id];
    this.expandedIds = next;
  }

  selectGroup(id) {
    this.activeGroupId = id;
    this.expandedIds = {};
  }

  renderSidebar() {
    const groups = this.activeGroups;
    const tab = TABS.find(t => t.label === this.activeTab);
    const fn = tab ? DATA_BY_FUNCTION[tab.functionId] : null;
    return html`
      <div class="sidebar">
        <div class="sidebar-header">
          <div class="sidebar-fn">${fn ? `${fn.function} ${fn.name}` : ''}</div>
        </div>
        <div class="group-list">
          ${groups.map(g => {
            const isActive = g.id === this.activeGroupId;
            return html`
              <div
                class="group-item ${isActive ? 'active' : ''}"
                @click=${() => this.selectGroup(g.id)}
              >
                <div class="group-dot"></div>
                <div class="group-info">
                  <div class="group-name">${g.name}</div>
                  <div class="group-count">${g.challengeCount} challenges</div>
                </div>
                <div class="group-arrow">›</div>
              </div>
            `;
          })}
        </div>
      </div>
    `;
  }

  renderPanel() {
    if (this.searchResults !== null) {
      return this.renderSearchResults();
    }
    const group = this.activeGroup;
    if (!group) {
      return html`<div class="panel"><div class="no-results">Select a process group to view challenges.</div></div>`;
    }
    return html`
      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">${group.name}</div>
          <div class="panel-subtitle">${group.challengeCount} challenges identified</div>
        </div>
        <div class="challenges-list">
          ${group.challenges.map(c => {
            const expanded = !!this.expandedIds[c.id];
            return html`
              <div class="challenge-card ${expanded ? 'expanded' : ''}">
                <div class="challenge-header" @click=${() => this.toggleChallenge(c.id)}>
                  <div class="challenge-name">${c.name}</div>
                  <div class="challenge-toggle">${expanded ? '−' : '+'}</div>
                </div>
                <div class="challenge-body">
                  <div class="painpoint">${c.painpoint}</div>
                  <div class="solution-box">
                    <div class="solution-label">How Lowgile addresses this</div>
                    <div class="solution-text">${c.solution}</div>
                  </div>
                </div>
              </div>
            `;
          })}
        </div>
      </div>
    `;
  }

  renderSearchResults() {
    const results = this.searchResults;
    if (results.length === 0) {
      return html`<div class="panel"><div class="no-results">No challenges found matching "<strong>${this.searchQuery}</strong>".</div></div>`;
    }
    return html`
      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">Search results</div>
          <div class="panel-subtitle">${results.length} challenge${results.length !== 1 ? 's' : ''} found</div>
        </div>
        <div class="challenges-list">
          ${results.map(({ group, challenge }) => {
            const expanded = !!this.expandedIds[challenge.id];
            return html`
              <div class="challenge-card ${expanded ? 'expanded' : ''}">
                <div class="challenge-header" @click=${() => this.toggleChallenge(challenge.id)}>
                  <div class="challenge-name">
                    <div class="search-result-group">${group.name}</div>
                    <span .innerHTML=${this.highlight(challenge.name)}></span>
                  </div>
                  <div class="challenge-toggle">${expanded ? '−' : '+'}</div>
                </div>
                <div class="challenge-body">
                  <div class="painpoint" .innerHTML=${this.highlight(challenge.painpoint)}></div>
                  <div class="solution-box">
                    <div class="solution-label">How Lowgile addresses this</div>
                    <div class="solution-text" .innerHTML=${this.highlight(challenge.solution)}></div>
                  </div>
                </div>
              </div>
            `;
          })}
        </div>
      </div>
    `;
  }

  render() {
    return html`
      <div class="section-wrapper">
        <div class="search-wrapper">
          <svg class="search-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8">
            <circle cx="8.5" cy="8.5" r="5.5"/><line x1="13" y1="13" x2="18" y2="18"/>
          </svg>
          <input
            class="search-input"
            type="text"
            placeholder="Search challenges, processes, or keywords..."
            .value=${this.searchQuery}
            @input=${e => { this.searchQuery = e.target.value; }}
          />
        </div>

        <div class="tabs">
          ${TABS.map(tab => html`
            <button
              class="tab-btn ${this.activeTab === tab.label ? 'active' : ''}"
              ?disabled=${tab.ids.length === 0}
              @click=${() => { if (tab.ids.length > 0) { this.activeTab = tab.label; this.activeGroupId = tab.ids[0]; this.searchQuery = ''; } }}
            >${tab.label}</button>
          `)}
        </div>

        <div class="explorer">
          ${this.renderSidebar()}
          ${this.renderPanel()}
        </div>

      </div>
    `;
  }
}

customElements.define('process-explorer', ProcessExplorer);
