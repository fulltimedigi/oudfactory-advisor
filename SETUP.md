# Setup Guide — Oud Factory Fragrance Advisor
# دليل التفعيل — مستشار عطور Oud Factory

---

## Option 1: Embed on Shopify (Recommended)
## الخيار الأول: دمج في Shopify (المُوصى به)

### Step 1 — Create a new page
1. Go to your Shopify Admin → **Online Store → Pages**
2. Click **Add page**
3. Title: `Fragrance Advisor` (or `مستشار العطور`)
4. Leave content empty for now

### Step 2 — Add a custom page template
1. Go to **Online Store → Themes → Edit code**
2. Under `Templates`, click **Add a new template**
3. Choose `page` → name it `fragrance-advisor`
4. This creates: `templates/page.fragrance-advisor.json`

### Step 3 — Create a section for the advisor
1. Under `Sections`, click **Add a new section**
2. Name it `fragrance-advisor`
3. Replace all content with:

```liquid
{% schema %}
{
  "name": "Fragrance Advisor",
  "settings": []
}
{% endschema %}

<div id="fragrance-advisor-wrapper">
  {{ section.settings.custom_html }}
</div>
```

4. Open `index.html` from this package
5. Copy **everything between `<body>` and `</body>`** (including the `<script>` block)
6. Paste it into the section file

### Step 4 — Assign template to page
1. Go back to the page you created in Step 1
2. In the right sidebar, under **Theme template**, select `fragrance-advisor`
3. Save

### Step 5 — Add to navigation (optional)
1. Go to **Online Store → Navigation**
2. Add a link pointing to your new page
3. Label: `Fragrance Advisor` / `مستشار العطور`

---

## Option 2: Direct HTML Page (Standalone)
## الخيار الثاني: صفحة مستقلة

Upload `index.html` to any web hosting service (Netlify, GitHub Pages, etc.) and share the URL directly. No Shopify required.

**Netlify (Free):**
1. Go to [netlify.com](https://netlify.com)
2. Drag & drop the `index.html` file
3. Get a live URL in seconds

---

## Lead Collection Setup (Google Sheet)
## إعداد جمع بيانات الزوار (Google Sheet)

> Requires the `collect-leads.gs` file from this package.

### Step 1 — Create a Google Sheet
1. Open [sheets.google.com](https://sheets.google.com)
2. Create a new sheet named: `Oud Factory Leads`
3. Add headers in Row 1:
   ```
   A1: Timestamp | B1: Name | C1: Phone | D1: Top Product | E1: Score | F1: Usage | G1: Scent | H1: Budget | I1: Oud Pref
   ```

### Step 2 — Deploy Apps Script
1. In the Sheet: **Extensions → Apps Script**
2. Delete the default code
3. Paste the contents of `collect-leads.gs`
4. Click **Deploy → New deployment**
5. Type: **Web app**
6. Execute as: **Me**
7. Who has access: **Anyone**
8. Click **Deploy** → Copy the **Web App URL**

### Step 3 — Connect to the advisor
1. Open `index.html`
2. Find line: `const LEAD_ENDPOINT = "";`
3. Replace `""` with your Web App URL:
   ```js
   const LEAD_ENDPOINT = "https://script.google.com/macros/s/YOUR_ID/exec";
   ```
4. Save and re-upload

### Step 4 — Enable lead form
In `index.html`, find the results section and ensure the lead capture form is visible. The form appears after the top recommendation and sends data to your Sheet automatically.

---

## Updating Products / تحديث المنتجات

To change prices, add products, or update descriptions:

1. Open `index.html` in any text editor (VS Code recommended)
2. Find `const P = {` (around line 60)
3. Edit the relevant product object
4. Save and re-upload to Shopify or hosting

**Price format:** Sale price only (after any discount). Do not include $ sign.

---

## WhatsApp Integration / واتساب

The WhatsApp button is pre-configured with:
- Number: **+971-56-878-8399**
- Pre-filled message (in English or Arabic based on user's language)

To change the number, search for `971568788399` in `index.html` and replace.

---

## Browser Compatibility / توافق المتصفحات

| Browser | Status |
|---------|--------|
| Chrome / Edge | ✅ Full support |
| Safari (iOS + macOS) | ✅ Full support |
| Firefox | ✅ Full support |
| Samsung Internet | ✅ Full support |

No external dependencies. No cookies. No tracking.

---

## Support / الدعم

**FullTimeDigi**  
WhatsApp: [Contact via WhatsApp](https://wa.me/message/FULLTIMEDIGI)
