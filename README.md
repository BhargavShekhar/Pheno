# Pheno 🌿

Pheno is a full-stack PERN (PostgreSQL, Express, React, Node.js) educational application designed for students to identify plant species and explore botanical details instantly. Students capture or upload a plant photo to receive scientific taxonomy, growth habits, and ecological insights.

---

## Features

* **Image Upload & Capture:** Upload photos of leaves, flowers, or whole plants directly from the browser.
* **Instant Plant Identification:** Analyzes visual data to return common and scientific names.
* **Comprehensive Botanical Profiles:**
  * Taxonomy: Family, genus, species, and native distribution.
  * Care & Ecology: Sunlight exposure, water requirements, and soil preferences.
  * Field Notes: Toxicity warnings, medicinal uses, and biological fun facts.
* **Student Herbarium:** Authenticated users can bookmark and catalog identified specimens to their personal collection.

---

## Tech Stack

* **Frontend:** React.js, Tailwind CSS (or CSS Modules), Axios
* **Backend:** Node.js, Express.js
* **Database:** PostgreSQL (with Prisma or `pg` pool)
* **Vision / AI Integration:** PlantNet API / Google Gemini Vision API

---

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v18+)
* [PostgreSQL](https://www.postgresql.org/) running locally or a hosted cloud instance (Neon, Supabase)
* Vision API Key (e.g., Gemini Vision, PlantNet)

---

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [Pheno Repository](https://github.com/BhargavShekhar/Pheno.git)
   cd Pheno
