# Contributing to Cold Fusion & LENR Research

Thank you for your interest in contributing to this project! We welcome contributions of all kinds.

## 🚀 Quick Start

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/Xfaang/cold-fusion.git
   cd cold-fusion
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start development**:
   ```bash
   npm run dev
   ```

## 📝 Types of Contributions

### Scientific Content
- **References**: Add new scientific papers or correct existing citations
- **Analysis**: Improve evidence evaluation or experimental descriptions
- **Translations**: Enhance Polish/English translations

### Technical Improvements  
- **Bug fixes**: Fix issues with the application
- **Performance**: Optimize loading times or user experience
- **Accessibility**: Improve screen reader support and keyboard navigation
- **Mobile**: Enhance responsive design

### Documentation
- **README improvements**: Make setup instructions clearer
- **Code comments**: Add helpful comments for complex logic
- **API documentation**: Document component interfaces

## 🔄 Development Workflow

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our conventions:
   - Use TypeScript for type safety
   - Follow existing code formatting
   - Add/update tests if needed
   - Update translations in both languages

3. **Test your changes**:
   ```bash
   npm run build    # Ensure production build works
   npm run preview  # Test the built version
   ```

4. **Commit with clear messages**:
   ```bash
   git add .
   git commit -m "feat: add new experimental data analysis"
   ```

5. **Push and create a Pull Request**:
   ```bash
   git push origin feature/your-feature-name
   ```

## 📋 Guidelines

### Code Style
- Use meaningful variable and function names
- Keep components focused and reusable
- Maintain consistent indentation (2 spaces)
- Use TypeScript interfaces for props

### Scientific Accuracy
- **Verify sources**: Ensure all references are accurate and accessible
- **Neutral tone**: Present information objectively without bias
- **Cite properly**: Include proper academic citations
- **Fact-check**: Double-check technical details and data

### Internationalization
- Add new text to both `pl` and `en` sections in `src/i18n.ts`
- Use the `t()` function for all user-facing text
- Consider cultural context in translations

## 🐛 Reporting Issues

Found a bug or have a suggestion? Please create an issue with:

- **Clear title** describing the problem
- **Steps to reproduce** (for bugs)
- **Expected vs actual behavior**
- **Screenshots** if helpful
- **Browser/device information**

## 📚 Scientific Sources

When adding references:

1. **Peer-reviewed preferred**: Academic journals are most reliable
2. **Accessible links**: Use permanent URLs when possible (DOI, arXiv, etc.)
3. **Proper attribution**: Include all authors, publication year, journal
4. **Categorize correctly**: Place in appropriate reference section

## ⚡ Quick Tips

- **Start small**: Begin with simple fixes or additions
- **Ask questions**: Open an issue if you're unsure about something
- **Be patient**: We review contributions carefully to maintain quality
- **Have fun**: Science is exciting - let your enthusiasm show!

## 📞 Getting Help

- **Open an issue** for questions about contributing
- **Check existing issues** - your question might be already answered
- **Review the code** - sometimes reading existing implementations helps

## 🎯 Priority Areas

We especially welcome contributions in:

- **Mobile optimization**
- **Performance improvements** 
- **Accessibility enhancements**
- **Scientific accuracy reviews**
- **Translation improvements**

Thank you for making this project better! 🚀