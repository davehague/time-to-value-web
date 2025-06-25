export const contactFormSubmission = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: 'Inter', 'Open Sans', Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
            color: #333;
            line-height: 1.6;
        }
        .container {
            background-color: #fff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            max-width: 600px;
            margin: 20px auto;
        }
        .header {
            border-bottom: 3px solid #2d6cdf;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .header h1 {
            color: #2d6cdf;
            margin: 0;
            font-size: 24px;
            font-weight: bold;
        }
        .header p {
            color: #666;
            margin: 5px 0 0 0;
            font-size: 14px;
        }
        .field-group {
            margin-bottom: 20px;
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 8px;
            border-left: 4px solid #2d6cdf;
        }
        .field-label {
            font-weight: bold;
            color: #3d3d4e;
            margin-bottom: 5px;
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 0.5px;
        }
        .field-value {
            color: #333;
            font-size: 16px;
            margin: 0;
        }
        .contact-info {
            background-color: #e8f4fd;
            padding: 20px;
            border-radius: 8px;
            margin: 25px 0;
        }
        .contact-info h3 {
            color: #2d6cdf;
            margin-top: 0;
            margin-bottom: 15px;
        }
        .contact-details {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        .contact-item {
            flex: 1;
        }
        .priority-badge {
            display: inline-block;
            padding: 6px 12px;
            background-color: #ff6b5d;
            color: white;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 20px;
        }
        .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            font-size: 12px;
            text-align: center;
            color: #666;
        }
        .timestamp {
            background-color: #f8f9fa;
            padding: 10px;
            border-radius: 6px;
            font-size: 12px;
            color: #666;
            text-align: center;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>Time To Value Website - Contact Form</p>
        </div>
        
        <div class="priority-badge">New Lead</div>
        
        <div class="timestamp">
            Submitted: {{timestamp}}
        </div>

        <div class="contact-info">
            <h3>Contact Information</h3>
            <div class="contact-details">
                <div class="contact-item">
                    <div class="field-label">Name</div>
                    <div class="field-value">{{firstName}} {{lastName}}</div>
                </div>
                <div class="contact-item">
                    <div class="field-label">Email</div>
                    <div class="field-value">{{email}}</div>
                </div>
                <div class="contact-item">
                    <div class="field-label">Company</div>
                    <div class="field-value">{{company}}</div>
                </div>
            </div>
        </div>

        <div class="field-group">
            <div class="field-label">Type of Help Requested</div>
            <p class="field-value">{{helpType}}</p>
        </div>

        <div class="field-group">
            <div class="field-label">AI Challenge / Situation</div>
            <p class="field-value">{{challenge}}</p>
        </div>

        <div class="footer">
            <p><strong>Time To Value</strong> - Helping David Beat Goliath by Leveraging AI<br>
            Respond promptly to maintain the "quick response time" brand promise!</p>
        </div>
    </div>
</body>
</html>
`;

export const contactFormAutoReply = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: 'Inter', 'Open Sans', Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
            color: #333;
            line-height: 1.6;
        }
        .container {
            background-color: #fff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            max-width: 600px;
            margin: 20px auto;
        }
        .header {
            text-align: center;
            border-bottom: 3px solid #2d6cdf;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .header h1 {
            color: #2d6cdf;
            margin: 0;
            font-size: 24px;
            font-weight: bold;
        }
        .header p {
            color: #666;
            margin: 10px 0 0 0;
            font-size: 16px;
        }
        .content {
            margin-bottom: 30px;
        }
        .highlight-box {
            background-color: #e8f4fd;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #2d6cdf;
            margin: 20px 0;
        }
        .next-steps {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }
        .next-steps h3 {
            color: #3d3d4e;
            margin-top: 0;
        }
        .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            font-size: 14px;
            text-align: center;
            color: #666;
        }
        .signature {
            margin-top: 25px;
            padding-top: 20px;
            border-top: 1px solid #eee;
        }
        .signature p {
            margin: 5px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Thanks for reaching out, {{firstName}}!</h1>
            <p>I've received your message and will respond soon</p>
        </div>
        
        <div class="content">
            <p>Hi {{firstName}},</p>
            
            <p>Thanks for taking the time to reach out about your AI challenges. I've received your message about <strong>{{helpType}}</strong> and I'm already thinking about how I can help.</p>
            
            <div class="highlight-box">
                <p><strong>What happens next:</strong></p>
                <p>I'll personally review your message and respond with honest thoughts about your situation. No generic sales pitch - just practical insights about what's possible and whether AI can realistically help you achieve your goals.</p>
            </div>
            
            <div class="next-steps">
                <h3>You can expect to hear from me:</h3>
                <ul>
                    <li>As soon as possible during business hours</li>
                    <li>With actionable insights, regardless of whether we work together</li>
                </ul>
            </div>
            
            <p>I believe in providing value upfront, so even if we don't end up working together, you'll walk away with something useful.</p>
            
            <p>Looking forward to our conversation!</p>
        </div>
        
        <div class="signature">
            <p><strong>Dave Hague</strong><br>
            Founder, Time To Value<br>
            <a href="mailto:dave@time2value.com" style="color: #2d6cdf;">dave@time2value.com</a></p>
            
            <p style="font-style: italic; color: #666; margin-top: 15px;">
            "Helping David beat Goliath by leveraging AI"
            </p>
        </div>
        
        <div class="footer">
            <p><strong>Time To Value</strong><br>
            Helping David Beat Goliath by Leveraging AI</p>
        </div>
    </div>
</body>
</html>
`;
