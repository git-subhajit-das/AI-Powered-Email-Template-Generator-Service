import createEmail from "../services/emailService.js";

async function generateEmail(req, res) {
  try {
    console.log(req.body)
    const { purpose, recipient_name, tone } = req.body;

    // Check that all three inputs are provided.
    if (!purpose || !recipient_name || !tone) {
      return res.status(400).json({
        message: "Please provide purpose, recipient_name and tone."
      });
    }

    // Measure how long the AI service takes.
    const startTime = Date.now();

    const email = await createEmail(
      purpose,
      recipient_name,
      tone
    );

    const responseTime = Date.now() - startTime;

    res.status(200).json({
      success: true,
      email: email,
      response_time_ms: responseTime
    });

  } catch (error) {
    console.log(error.message);

    res.status(500).json({
      success: false,
      message: "Unable to generate email.",
      error : error.message
    });
  }
}

export default generateEmail;
