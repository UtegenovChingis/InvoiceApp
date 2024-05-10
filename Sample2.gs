async function sample2() {
  const apiKey = "AIzaSyCt_7CBMAz19uwwVkBiDHWy5aS8N4VQp_8"; // Please set your API key.
  const fileId = "1Kaw-yO-_EZuZMoD0KMHUI09ZxQ5spjCJ"; // File ID of PDF file of invoice file.

  // Parsing invoice of PDF file and retrieve values.
  const ip = new InvoiceApp({
    apiKey,
    blob: DriveApp.getFileById(fileId).getBlob(),
  });
  const res = await ip.run();
  if (typeof res == "object") {
    console.log("--- Valid values.");
    console.log(JSON.stringify(res));

    // do something.
  } else {
    console.log("--- Invalid values.");
    console.log(res);
  }
}
