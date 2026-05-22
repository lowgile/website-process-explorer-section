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

// Tab configuration - maps display label to process group IDs
const TABS = [
  { label: 'Finance', ids: ['9.1','9.2','9.3','9.4','9.5','9.6','9.7','9.8'] },
  { label: 'Sales & Orders', ids: [] },
  { label: 'Procurement', ids: [] },
  { label: 'Deliver Services', ids: [] },
  { label: 'Customer Service', ids: [] },
  { label: 'HR', ids: [] },
  { label: 'IT', ids: [] },
  { label: 'Risk & Compliance', ids: [] },
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
      font-family: 'Figtree', sans-serif;
      color: #0D1B2A;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    .section-wrapper {
      padding: 72px 0 96px;
    }

    .eyebrow {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #3B5BDB;
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
      padding: 12px 16px 12px 42px;
      border: 1.5px solid #E2E8F0;
      border-radius: 8px;
      font-size: 14px;
      font-family: inherit;
      background: #fff;
      color: #0D1B2A;
      outline: none;
      transition: border-color 0.2s;
    }

    .search-input:focus {
      border-color: #3B5BDB;
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

    .tab-btn:hover { border-color: #3B5BDB; color: #3B5BDB; }

    .tab-btn.active {
      background: #0D1B2A;
      border-color: #0D1B2A;
      color: #fff;
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
      border-left-color: #3B5BDB;
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
      background: #3B5BDB;
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
      color: #3B5BDB;
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
      background: #3B5BDB;
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
      color: #3B5BDB;
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
    if (!tab) return [];
    if (tab.ids.length === 0) return [];
    return DATA.processGroups.filter(g => tab.ids.includes(g.id));
  }

  get activeGroup() {
    return DATA.processGroups.find(g => g.id === this.activeGroupId) || null;
  }

  get searchResults() {
    const q = this.searchQuery.trim().toLowerCase();
    if (!q) return null;
    const results = [];
    for (const group of DATA.processGroups) {
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
    const allGroups = DATA.processGroups;
    return html`
      <div class="sidebar">
        <div class="sidebar-header">
          <div class="sidebar-fn">9.0 Manage Financial Resources</div>
        </div>
        <div class="group-list">
          ${allGroups.map(g => {
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
        <div class="search-results">
          ${results.map(({ group, challenge }) => html`
            <div class="search-result-item">
              <div class="search-result-group">${group.name}</div>
              <div class="search-result-name" .innerHTML=${this.highlight(challenge.name)}></div>
              <div class="search-result-text" .innerHTML=${this.highlight(challenge.painpoint.slice(0,160) + '…')}></div>
            </div>
          `)}
        </div>
      </div>
    `;
  }

  render() {
    return html`
      <div class="section-wrapper">
        <div class="eyebrow">Process Explorer</div>
        <h2>Where are your biggest challenges?</h2>
        <p class="subtitle">Select your function, then click a process group to see the specific challenges we address and how.</p>

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
              @click=${() => { this.activeTab = tab.label; this.searchQuery = ''; }}
            >${tab.label}</button>
          `)}
        </div>

        <div class="explorer">
          ${this.renderSidebar()}
          ${this.renderPanel()}
        </div>

        <div class="footer-cta">
          <button class="btn-primary">Discuss a specific challenge →</button>
          <span class="cta-link">or <a>book a diagnostic call</a></span>
        </div>
      </div>
    `;
  }
}

customElements.define('process-explorer', ProcessExplorer);
