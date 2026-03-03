# Privacy Policy for Meal Planner System

**Last Updated:** March 2, 2026

## Overview

This Meal Planner System is a personal automation tool designed for household meal planning and grocery management. This privacy policy explains how personal information is collected, used, and protected.

## Information We Collect

### Personal Information
- **Calendar Events**: Event titles, dates, and times from your iCloud calendar to determine meal planning needs
- **Phone Numbers**: Your phone numbers for SMS notifications via Twilio
- **Grocery Preferences**: Dietary restrictions, preferred ingredients, cooking methods, and family size stored in configuration files
- **Meal History**: Past meal plans to avoid repetition and improve suggestions

### Third-Party Service Data
- **Kroger Account**: Authentication tokens to access and modify your Kroger shopping cart
- **iCloud Calendar**: CalDAV access to read calendar events
- **Twilio SMS**: Phone numbers for sending notifications

## How We Use Your Information

### Primary Functions
- **Meal Planning**: Generate weekly meal plans based on your preferences and calendar events
- **Grocery Management**: Create shopping lists and populate your Kroger cart
- **Notifications**: Send SMS updates about meal plan status and grocery cart readiness
- **Learning**: Track meal history to improve future recommendations

### Data Processing
- All processing occurs via GitHub Actions workflows on GitHub-hosted servers
- Data is stored in your private GitHub repository under your control

## Data Storage and Security

### Storage Locations
- **GitHub Repository**: All configuration files, meal history, and generated plans are stored in your private GitHub repository
- **GitHub Secrets**: API keys and sensitive credentials are encrypted and stored as GitHub repository secrets
- **No External Databases**: No personal data is stored on external servers or databases outside of your GitHub repository

### Security Measures
- **Encrypted Storage**: All secrets and API keys are encrypted in GitHub's secure secret storage
- **Private Repository**: All data resides in your private GitHub repository, accessible only to you
- **API Security**: All third-party API communications use secure HTTPS connections
- **Token Management**: OAuth tokens are securely stored and automatically refreshed

## Third-Party Services

### Data Sharing
We integrate with the following services and share only necessary data:

- **Anthropic Claude AI**: Meal preferences and history to generate meal plans (no personal identifiers)
- **Apple iCloud**: Read-only access to calendar events via CalDAV
- **Kroger API**: Product searches and cart modifications using your authenticated account
- **Twilio**: Phone numbers for SMS delivery

### Third-Party Policies
Each service has its own privacy policy:
- [Anthropic Privacy Policy](https://www.anthropic.com/privacy)
- [Apple Privacy Policy](https://www.apple.com/privacy/)
- [Kroger Privacy Policy](https://www.kroger.com/f/privacy-policy)
- [Twilio Privacy Policy](https://www.twilio.com/legal/privacy)

## Data Retention

### Retention Periods
- **Meal History**: Maintained indefinitely in your repository for recipe improvement
- **Calendar Events**: Cached temporarily for current week planning only
- **Generated Plans**: Archived in your repository for reference
- **API Logs**: GitHub Actions logs are retained for 90 days

### Data Deletion
Since all data is stored in your private GitHub repository, you have complete control over data retention and deletion:
- Delete specific files to remove meal history
- Delete the entire repository to remove all data
- Revoke API access tokens to disconnect third-party services

## Your Privacy Rights

### Data Control
You have complete control over your data:
- **Access**: All data is stored in your GitHub repository and is fully accessible
- **Modification**: Edit any configuration files or meal history as needed
- **Deletion**: Remove any files or delete the entire repository
- **Portability**: Export all data from your GitHub repository at any time

### Third-Party Access Control
- **API Revocation**: Revoke access tokens for any third-party service at any time
- **Permission Management**: Modify GitHub repository permissions and secrets as needed
- **Service Disconnection**: Remove any integration by deleting associated credentials

## Contact and Updates

### Repository Management
This system is designed for personal use. For questions about data handling:
- Review the code in your GitHub repository
- Modify privacy settings by updating repository permissions
- Contact the respective third-party services for their data practices

### Policy Updates
- This privacy policy is stored in your repository and can be updated by you at any time
- Check the "Last Updated" date at the top of this document for recent changes
- You control all aspects of data handling through your repository configuration

## Data Minimization

### Collection Principles
We only collect and process data necessary for meal planning functions:
- Calendar events are analyzed only for scheduling conflicts
- Meal preferences are used solely for recipe generation
- Grocery data is limited to ingredient matching and cart management
- Phone numbers are used exclusively for meal planning notifications

### Automatic Cleanup
- Temporary files are cleaned up after processing
- Only relevant meal history is retained for planning improvement
- No unnecessary personal data is stored or transmitted

## Technical Implementation

### Open Source Transparency
- All code is available in your repository for review
- No hidden data collection or transmission occurs
- All API interactions are logged and reviewable in GitHub Actions

### Self-Hosted Control
- You control the GitHub repository and all associated data
- No external servers or databases are used for personal data storage
- All processing occurs in GitHub's secure, encrypted environment

---

**Note**: This privacy policy applies to the personal meal planning system stored in your private GitHub repository. Since you control all aspects of the system, you have complete authority over data handling, privacy settings, and service integrations.