/**
 * Oud Factory Fragrance Advisor — Lead Collector
 * Google Apps Script — Deploy as Web App
 * 
 * Receives POST requests from the funnel and logs visitor data to this Sheet.
 * 
 * Sheet columns (Row 1 headers):
 * A: Timestamp | B: Name | C: Phone | D: Top Product | E: Score
 * F: Usage (q1) | G: Occasion (q2) | H: Intensity (q3) | I: Scent (q4)
 * J: Oud Pref (q5) | K: Budget (q6) | L: Language
 */

function doPost(e) {
  try {
    // Parse incoming JSON
    const data = JSON.parse(e.postData.contents);
    
    // Get or create the leads sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName("Leads");
    
    // Create sheet with headers if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet("Leads");
      sheet.appendRow([
        "Timestamp",
        "Name",
        "Phone",
        "Top Product",
        "Score",
        "Usage",
        "Occasion",
        "Intensity",
        "Scent Character",
        "Oud Preference",
        "Budget",
        "Language"
      ]);
      // Style header row
      sheet.getRange(1, 1, 1, 12)
        .setBackground("#c8a84b")
        .setFontColor("#000000")
        .setFontWeight("bold");
      sheet.setFrozenRows(1);
    }
    
    // Append the new lead row
    sheet.appendRow([
      new Date().toLocaleString("en-GB", {timeZone: "Asia/Dubai"}),
      data.name || "",
      data.phone || "",
      data.top || "",
      data.score || "",
      data.answers?.q1 || "",
      data.answers?.q2 || "",
      data.answers?.q3 || "",
      data.answers?.q4 || "",
      data.answers?.q5 || "",
      data.answers?.q6 || "",
      data.lang || "en"
    ]);
    
    // Return success
    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (err) {
    // Return error (won't break the funnel — it fails silently)
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle GET requests (for testing the endpoint)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: "ok", 
      message: "Oud Factory Lead Collector is active",
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Test function — run manually to check setup
 */
function testSetup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  Logger.log("Sheet name: " + ss.getName());
  Logger.log("Setup OK ✅");
}
