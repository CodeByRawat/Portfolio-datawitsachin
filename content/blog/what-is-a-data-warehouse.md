---
title: "What Is a Data Warehouse? Definition, Architecture, Examples and How It Works (2026)"
description: "A plain-English guide to data warehouses: what they are, how they work (ETL/ELT, schemas, OLAP), data warehouse vs database vs data lake vs lakehouse, cloud platforms like Snowflake, BigQuery, Redshift and Databricks, costs, use cases, and how AI uses warehouse data."
date: 2026-11-12
cluster: data
order: 64
hire: a data warehouse
---

<p class="lede">A <strong>data warehouse</strong> is a central database designed for <strong>analysis and reporting</strong> rather than day-to-day transactions. It collects data from many sources (sales, finance, marketing, operations, websites, apps), cleans and organises it into a consistent structure, and keeps history, so people and tools can answer business questions quickly and reliably from one trusted place: a "single source of truth".</p>

Most organisations run dozens of systems: a CRM, an ERP or accounting system, an e-commerce platform, a help desk, marketing tools, spreadsheets. Each holds part of the picture, in its own format. Asking a simple question like *"Which marketing channel brings customers with the highest lifetime value?"* means combining data from several of them. A data warehouse is where that combining happens. This guide explains what a data warehouse is, how it works, how it differs from databases, data lakes and lakehouses, the main platforms, costs, and how warehouses power BI dashboards and AI.

## What is a data warehouse, in simple terms?

Think of your operational systems as **shops** that each keep their own till receipts. A data warehouse is the **head office archive**: every shop sends copies of its records, which are checked, translated into the same format and filed in a consistent way, so head office can analyse the whole business across all shops and all years.

Key characteristics (originally described by Bill Inmon, often called the "father of data warehousing"):

- **Subject-oriented:** organised around business subjects such as customers, products, sales and finance, not around individual applications
- **Integrated:** data from different sources is standardised (same customer IDs, currencies, date formats, definitions)
- **Time-variant:** keeps history, so you can analyse trends over months and years
- **Non-volatile:** data is loaded and read, not constantly overwritten by transactions

## How a data warehouse works

### 1. Data sources
Operational databases, SaaS applications (CRM, ERP, marketing, support), files, event streams from websites and apps, and third-party data.

### 2. Data ingestion: ETL or ELT
- **ETL (Extract, Transform, Load):** data is extracted from sources, transformed (cleaned, joined, standardised) in a separate processing layer, then loaded into the warehouse. The traditional approach.
- **ELT (Extract, Load, Transform):** raw data is loaded into the warehouse first, then transformed inside it using the warehouse's own computing power. The common approach with modern cloud warehouses, often using tools such as **dbt** for transformations.

Ingestion tools such as Fivetran, Airbyte, Stitch, or cloud-native connectors move data from sources on a schedule or continuously. (Related: [How to integrate data from multiple sources](/blog/how-to-integrate-data-from-multiple-sources/).)

### 3. Storage and modelling
Data is organised into layers, commonly:
- **Raw / staging:** data as it arrived from the source
- **Cleaned / integrated:** standardised, de-duplicated and joined
- **Presentation / marts:** business-friendly tables for specific teams (sales, finance, marketing)

Many teams call this the **medallion architecture**: bronze (raw), silver (cleaned), gold (business-ready).

### 4. Data models: star and snowflake schemas
Warehouses usually use **dimensional modelling** (popularised by Ralph Kimball):
- **Fact tables** store measurable events: orders, payments, website sessions, support tickets (with numbers like amount, quantity, duration)
- **Dimension tables** store the context: customer, product, date, region, channel

A **star schema** has one fact table connected to several dimension tables, like a star. A **snowflake schema** normalises dimensions into further sub-tables. Star schemas are simpler and faster to query, which is why most BI teams prefer them.

**Example:** a `fact_orders` table with order ID, date key, customer key, product key, quantity and revenue, joined to `dim_customer`, `dim_product` and `dim_date`.

### 5. Querying and analysis (OLAP)
Warehouses are optimised for **OLAP** (online analytical processing): large queries that scan and aggregate millions or billions of rows. Modern cloud warehouses use **columnar storage** (storing each column together, so a query reading only "revenue" and "date" doesn't read every column) and **massively parallel processing** (splitting work across many machines).

### 6. Consumption
- **BI dashboards and reports** (Power BI, Tableau, Looker, Metabase); see [What is business intelligence?](/blog/what-is-business-intelligence/)
- **SQL analysis** by analysts (see [What does a data analyst do?](/blog/what-does-a-data-analyst-do/))
- **Data science and machine learning** models
- **Reverse ETL:** sending warehouse data back to operational tools (e.g., syncing lead scores to the CRM)
- **AI assistants and agents** that answer questions from governed data

## Data warehouse vs database vs data lake vs lakehouse

| | Operational database (OLTP) | Data warehouse | Data lake | Lakehouse |
|---|---|---|---|---|
| **Purpose** | Run the application (record orders, update accounts) | Analysis and reporting | Store large volumes of raw data of any type | Combine lake flexibility with warehouse reliability |
| **Data** | Current, structured | Cleaned, structured, historical | Raw: structured, semi-structured, unstructured (logs, images, text) | All types, with table formats adding structure |
| **Schema** | Schema-on-write, normalised | Schema-on-write, dimensional | Schema-on-read | Open table formats (Delta Lake, Apache Iceberg, Apache Hudi) |
| **Queries** | Many small, fast reads/writes | Large analytical queries | Data science, ML, exploration | BI, SQL, data science, ML |
| **Users** | Applications | Analysts, business users | Data engineers, data scientists | All of the above |
| **Examples** | PostgreSQL, MySQL, SQL Server, Oracle | Snowflake, BigQuery, Redshift, Azure Synapse / Microsoft Fabric warehouse | Amazon S3, Azure Data Lake Storage, Google Cloud Storage | Databricks, Microsoft Fabric (OneLake), Snowflake with Iceberg tables |

**Why not just run reports on the operational database?** Heavy analytical queries slow down the application, data from other systems isn't there, history may be overwritten, and the structure is designed for transactions, not analysis.

**Data mart:** a smaller, subject-specific subset of a warehouse for one team (e.g., a finance mart).

## Popular data warehouse platforms

| Platform | Notes |
|---|---|
| **Snowflake** | Cloud-native, separates storage and compute, runs on AWS, Azure and Google Cloud; strong data sharing |
| **Google BigQuery** | Serverless, pay-per-query or capacity pricing; tight integration with Google Cloud and Google Analytics exports |
| **Amazon Redshift** | AWS's warehouse; provisioned and serverless options |
| **Microsoft Fabric / Azure Synapse** | Microsoft's analytics platform with warehouse, lakehouse and Power BI integration |
| **Databricks SQL** | Lakehouse platform built on Delta Lake and Apache Spark |
| **ClickHouse, Firebolt** | High-performance analytical databases, popular for real-time analytics |
| **PostgreSQL / DuckDB** | Practical choices for small data volumes and prototypes |
| **Oracle, Teradata, SAP BW** | Established enterprise and on-premises warehouses |

## The modern data stack

A typical cloud setup for a growing company:

1. **Sources:** CRM, ERP, product database, marketing and support tools
2. **Ingestion:** Fivetran, Airbyte or native connectors
3. **Warehouse:** Snowflake, BigQuery, Redshift, Databricks or Fabric
4. **Transformation:** dbt (SQL models, tests and documentation)
5. **Orchestration:** Airflow, Dagster, Prefect, or the tools' own schedulers (see [What is workload automation?](/blog/what-is-workload-automation/))
6. **BI:** Power BI, Tableau, Looker, Metabase
7. **Reverse ETL and activation:** Hightouch, Census
8. **Governance and quality:** data catalogues, data contracts, tests, access controls

## Data warehouse use cases and examples

- **Retail and e-commerce:** combine orders, inventory, web analytics and marketing spend to measure profitability by product and channel
- **Finance:** consolidate ledgers from multiple entities for faster month-end reporting (see [What is record to report?](/blog/what-is-record-to-report/))
- **SaaS:** track sign-ups, product usage, churn, MRR and customer health
- **Healthcare:** analyse patient flow, outcomes and operational efficiency (with strict privacy controls)
- **Marketing:** multi-touch attribution and customer lifetime value
- **Supply chain:** supplier performance, demand forecasting and stock levels (see [What is supply chain automation?](/blog/what-is-supply-chain-automation/))
- **Sales:** pipeline, win rates and forecast accuracy combined from CRM and billing (see [What is a CRM?](/blog/what-is-a-crm/))

## Benefits of a data warehouse

- **One trusted version of the numbers** across teams
- **Faster reporting:** automated dashboards instead of manual spreadsheet merges
- **Historical analysis** and trend spotting
- **Better performance** for analytical queries without slowing operational systems
- **Data quality and consistent definitions** (what counts as a "customer" or "active user")
- **Security and governance:** central access control and auditing
- **Foundation for AI and machine learning**

## Challenges and costs

- **Cost management:** cloud warehouses charge for storage and compute; poorly written queries or always-on clusters get expensive. Use auto-suspend, query monitoring, partitioning/clustering and budgets.
- **Data quality:** garbage in, garbage out; add tests and ownership.
- **Modelling and definitions:** agreeing business definitions takes time and stakeholder alignment.
- **Skills:** you need data engineering and analytics skills (SQL, modelling, pipelines).
- **Governance and privacy:** personal data must be protected and handled lawfully (e.g., GDPR, HIPAA where applicable).

**Rough costs:** a small company can start with a cloud warehouse, managed ingestion and a BI tool for a few hundred dollars per month; costs grow with data volume, query load and the number of connectors. Enterprise warehouses can cost tens or hundreds of thousands per year, plus team salaries.

## How AI uses the data warehouse

AI has made the warehouse more important, not less:

- **Natural-language querying:** AI assistants turn questions like "What were our top 10 products by margin last quarter?" into SQL against the warehouse. Accuracy depends heavily on a clean model and a **semantic layer** (shared definitions of metrics).
- **AI agents** retrieve governed data through tools and APIs, including via the Model Context Protocol (MCP). (See [What is an AI agent?](/blog/what-is-an-ai-agent/))
- **Machine learning** models for forecasting, churn prediction and segmentation are trained on warehouse data. (See [What is machine learning?](/blog/what-is-machine-learning/))
- **AI inside the platforms:** major warehouses now offer built-in AI functions to summarise, classify or extract information from text with SQL.
- **AI-assisted data engineering:** writing SQL, dbt models, documentation and tests faster.

**The rule:** AI on top of messy, undefined data produces confident wrong answers. Good modelling, definitions and access controls come first.

## How to build a data warehouse: step by step

1. **Start with business questions.** List the decisions and reports that matter most.
2. **Inventory data sources** and owners.
3. **Choose a platform** based on your cloud, data volume, skills and budget.
4. **Set up ingestion** for the highest-value sources first.
5. **Model the data:** staging, cleaned and business-ready layers; star schemas for reporting.
6. **Define metrics** in one place (semantic layer or dbt metrics).
7. **Add tests, documentation and monitoring.**
8. **Build dashboards** for the original questions and get feedback.
9. **Govern access:** roles, row-level security, personal data handling.
10. **Iterate:** add sources and use cases in small increments.

## Frequently asked questions

### What is a data warehouse in simple terms?
A data warehouse is a central place where an organisation stores cleaned, organised data from many systems, including history, so people and tools can analyse it and produce reports from one trusted source.

### What is a data warehouse used for?
It's used for business intelligence dashboards, reporting, trend analysis, forecasting, data science and machine learning, and increasingly as the governed data source for AI assistants and agents.

### What is the difference between a database and a data warehouse?
An operational database runs an application and handles many small transactions on current data. A data warehouse is optimised for large analytical queries across integrated, historical data from many sources.

### What is the difference between a data warehouse and a data lake?
A data warehouse stores structured, cleaned data modelled for analysis. A data lake stores large volumes of raw data in any format (including logs, images and text) at low cost, and structure is applied when the data is read. Lakehouses combine both approaches.

### Is Snowflake a data warehouse?
Yes. Snowflake is a cloud data platform whose core product is a cloud data warehouse, and it also supports data lake and lakehouse patterns, data sharing and AI features.

### Is SQL a data warehouse?
No. SQL is a query language. Data warehouses are systems that store data, and most of them are queried using SQL.

### What are ETL and ELT?
ETL extracts data from sources, transforms it, then loads it into the warehouse. ELT extracts and loads raw data first, then transforms it inside the warehouse. ELT is common with modern cloud warehouses.

### Do small businesses need a data warehouse?
Not always. If your reporting comes from one or two systems, their built-in reports may be enough. Once you need to combine several systems, keep history or stop manual spreadsheet merging, a small cloud warehouse becomes worthwhile.
