# GitHub Productivity Monitor VS Code Extension

A comprehensive VS Code extension that automatically tracks developer activities, integrates with GitHub, and provides productivity insights with a freemium business model.

## Features

### 🔍 Activity Tracking
- **File Operations**: Track open, edit, save, close events
- **Editor Activity**: Monitor cursor movements, selections, typing patterns
- **Debug Sessions**: Log debugging start/stop, breakpoints, variables
- **Terminal Usage**: Track command execution and output
- **Inactivity Detection**: Detect periods of no activity
- **Context Awareness**: Understand project context and file types

### 🐙 GitHub Integration
- **Authentication**: Secure OAuth flow with GitHub
- **Repository Management**: Auto-create tracking repository
- **Activity Correlation**: Link VS Code activities with GitHub events
- **Auto-Commits**: Automatically commit activity summaries every 30 minutes
- **Rate Limiting**: Intelligent API usage management
- **Offline Support**: Queue activities when offline

### 📊 Productivity Insights
- **Real-time Statistics**: View your coding productivity in real-time
- **Activity Summaries**: Daily, weekly, and monthly activity reports
- **Language Analytics**: Track programming language usage
- **Productivity Score**: Algorithmic productivity scoring
- **Time Tracking**: Detailed coding time analysis
- **Motivational Messages**: Stay motivated with progress updates

### 🔒 Privacy & Security
- **Data Encryption**: Encrypt sensitive data at rest
- **Local Processing**: Keep sensitive data local when possible
- **Privacy Controls**: Granular data control and deletion
- **GDPR Compliance**: Full compliance with data protection regulations
- **Anonymous Mode**: Optional data anonymization

### 💼 Subscription Model
- **Free Tier**: Basic activity tracking and local statistics
- **7-Day Trial**: Full feature access for evaluation
- **Premium**: Advanced analytics, GitHub integration, cloud sync

## Installation

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "GitHub Productivity Monitor"
4. Click Install

## Getting Started

1. **Authenticate with GitHub**: Run the command `GitHub Productivity: Authenticate with GitHub`
2. **Start Tracking**: Use `GitHub Productivity: Start Activity Tracking`
3. **View Statistics**: Access your productivity stats with `GitHub Productivity: View Productivity Stats`
4. **Configure Settings**: Customize the extension with `GitHub Productivity: Configure Settings`

## Commands

| Command | Description |
|---------|-------------|
| `githubProductivity.authenticate` | Authenticate with GitHub |
| `githubProductivity.startTracking` | Start activity tracking |
| `githubProductivity.stopTracking` | Stop activity tracking |
| `githubProductivity.viewStats` | View productivity statistics |
| `githubProductivity.configureSettings` | Open extension settings |

## Configuration

The extension can be configured through VS Code settings:

```json
{
  "githubProductivity.autoCommitInterval": 30,
  "githubProductivity.trackTerminal": true,
  "githubProductivity.trackDebugging": true,
  "githubProductivity.enableMotivationalMessages": true,
  "githubProductivity.dataRetentionDays": 30,
  "githubProductivity.enableEncryption": true,
  "githubProductivity.repositoryName": "productivity-tracking"
}
```

### Available Settings

- `autoCommitInterval`: Minutes between automatic commits (5-1440 minutes)
- `trackTerminal`: Track terminal commands and activities
- `trackDebugging`: Track debugging sessions and breakpoints
- `enableMotivationalMessages`: Show motivational messages and progress updates
- `dataRetentionDays`: Number of days to retain activity data locally (1-365 days)
- `enableEncryption`: Encrypt sensitive data stored locally
- `repositoryName`: Name of the GitHub repository for activity tracking

## Privacy

We take your privacy seriously:

- **Local Data**: All activity data is stored locally by default
- **Encryption**: Sensitive data is encrypted using AES-256
- **GitHub Integration**: Only minimal required permissions are requested
- **Data Control**: You have full control over your data
- **Anonymization**: Option to anonymize personal information
- **Data Deletion**: Complete data removal on request

## Requirements

- VS Code 1.74.0 or higher
- GitHub account (for GitHub integration features)
- Internet connection (for GitHub sync and premium features)

## Extension Settings

This extension contributes the following settings:

* `githubProductivity.autoCommitInterval`: Control automatic commit frequency
* `githubProductivity.trackTerminal`: Enable/disable terminal tracking
* `githubProductivity.trackDebugging`: Enable/disable debug tracking
* `githubProductivity.enableMotivationalMessages`: Show motivational messages
* `githubProductivity.dataRetentionDays`: Data retention period
* `githubProductivity.enableEncryption`: Enable data encryption
* `githubProductivity.repositoryName`: GitHub repository name

## Known Issues

- Terminal command tracking requires additional permissions
- GitHub rate limiting may affect real-time sync
- Large projects may impact performance during initial indexing

## Release Notes

### 1.0.0

Initial release of GitHub Productivity Monitor

#### Features
- Complete activity tracking system
- GitHub integration with OAuth
- Local data storage with encryption
- Productivity analytics and reporting
- Freemium subscription model
- Privacy-first approach

## Development

### Building from Source

```bash
# Clone the repository
git clone https://github.com/Pratikchandrathakur/love-to-code.git
cd love-to-code/github-productivity-monitor

# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Run tests
npm test

# Package the extension
npm run package
```

### Architecture

The extension follows a modular architecture:

- **Services**: Core business logic (ActivityTracker, GitHubService, etc.)
- **Models**: Data structures and types
- **Utils**: Utility functions (logging, storage, encryption, validation)
- **Commands**: VS Code command implementations
- **Webviews**: UI components for statistics and configuration

### Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## Support

- **GitHub Issues**: [Report bugs and request features](https://github.com/Pratikchandrathakur/love-to-code/issues)
- **Documentation**: [Full documentation](https://github.com/Pratikchandrathakur/love-to-code/wiki)
- **Contact**: [LinkedIn](https://www.linkedin.com/in/pratik-chandra-thakur-739325269/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the VS Code team for the excellent extension API
- GitHub for providing the platform and API
- The TypeScript and Node.js communities

---

**Enjoy tracking your productivity!** 🚀