import { content } from '../data/content'
import { StarIcon, TeamIcon, CheckmarkIcon, EmailIcon } from '../icons'
import mePhoto from '../assets/me.jpg'
import fubLogo from '../assets/fub.png'

export function Home() {
    return (
        <section>
            <div className="home-hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>{content.home.title}</h1>
                        <p className="hero-subtitle">AVP, Senior Business Analyst</p>
                        <p className="hero-description">
                            I drive business growth through data-driven insights and process optimization.
                            Experienced in delivering measurable business outcomes at <strong>First United Bank</strong>.
                        </p>
                        <div className="company-highlights">
                            <div className="company-badge fub">
                                <div className="company-logo">
                                    <img src={fubLogo} alt="First United Bank" />
                                </div>
                            </div>
                        </div>
                        <div className="hero-stats">
                            <div className="stat">
                                <span className="stat-number">6+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">25%</span>
                                <span className="stat-label">Efficiency Improvement</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">99%</span>
                                <span className="stat-label">On-Time Delivery</span>
                            </div>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src={mePhoto} alt="Alexandra Dujakovich" className="profile-photo" />
                    </div>
                </div>
            </div>

            <div className="home-highlights">
                <div className="highlight-card">
                    <div className="highlight-icon">
                        <StarIcon width={24} height={24} />
                    </div>
                    <div className="highlight-content">
                        <h3>Financial Analysis</h3>
                        <p>Financial modeling, ratio analysis, cash flow analysis, valuation, and risk assessment</p>
                    </div>
                </div>

                <div className="highlight-card">
                    <div className="highlight-icon">
                        <TeamIcon width={24} height={24} />
                    </div>
                    <div className="highlight-content">
                        <h3>Banking Operations</h3>
                        <p>Regulatory compliance, credit analysis, loan processing, and risk management</p>
                    </div>
                </div>

                <div className="highlight-card">
                    <div className="highlight-icon">
                        <CheckmarkIcon width={24} height={24} />
                    </div>
                    <div className="highlight-content">
                        <h3>Business Intelligence</h3>
                        <p>Dashboard development, KPI tracking, data visualization, and executive reporting</p>
                    </div>
                </div>

                <div className="highlight-card">
                    <div className="highlight-icon">
                        <EmailIcon width={24} height={24} />
                    </div>
                    <div className="highlight-content">
                        <h3>Financial Tools</h3>
                        <p>Bloomberg Terminal, FactSet, Morningstar, SAP, and Oracle Financials</p>
                    </div>
                </div>
            </div>

            <div className="home-cta">
                <h2>Let's Drive Financial Excellence</h2>
                <p>Ready to discuss your next financial analysis challenge, explore opportunities, or chat about data-driven financial solutions?</p>
                <div className="cta-buttons">
                    <a href="#about" className="cta-button primary" onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                        <StarIcon width={16} height={16} />
                        View My Work
                    </a>
                    <a href="#contact" className="cta-button secondary" onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                        <EmailIcon width={16} height={16} />
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    )
}
