import type { Module } from '@/types';

export const modules: Module[] = [
  { id: 'm1', number: 'W1', title: 'Introduction to Sport Governance, Leadership, and Motivation' },
  { id: 'm2', number: 'W2', title: 'Governance Processes' },
  { id: 'm3', number: 'W3', title: 'Developing Strategy and Policy in Sport' },
  { id: 'm4', number: 'W4', title: 'Power, Politics and Ethics' },
  { id: 'm5', number: 'W5', title: 'Organizational Structure and Governance Implications' },
  { id: 'm6', number: 'W6', title: 'Compliance, Risk Management and Change' },
  { id: 'm7', number: 'W7', title: 'Board Governance and Communication' },
  { id: 'm8', number: 'W8', title: 'Metrics, Evaluation and the Future of Governance' },
];

export const defaultNotes: Record<string, { title: string; content: string }> = {
  m1: {
    title: 'Introduction to Sport Governance, Leadership, and Motivation',
    content: `<h2>What is Sport Governance?</h2>
<p>Sport governance refers to the system by which sports organisations are directed and controlled. It encompasses the structures, processes, and practices that ensure accountability, fairness, and transparency in the management of sport at all levels — from national Olympic committees to local clubs.</p>
<blockquote>"Good governance is not about making the right decisions. It is about creating the environment where the right decisions are made." — International Olympic Committee</blockquote>
<h2>Characteristics of Good Governance</h2>
<ul>
  <li><strong>Transparency</strong> — open and clear decision-making processes</li>
  <li><strong>Accountability</strong> — leaders answer for their actions to stakeholders</li>
  <li><strong>Integrity</strong> — ethical behaviour and conflict-of-interest management</li>
  <li><strong>Democracy</strong> — inclusive participation and fair representation</li>
  <li><strong>Solidarity</strong> — sharing resources and benefits across the sporting community</li>
</ul>
<h2>Leadership in Sport Governance</h2>
<p>Effective sport governance requires strong leadership that can balance competing interests, drive organisational vision, and maintain the confidence of stakeholders. Leaders must demonstrate both <strong>strategic foresight</strong> and <strong>operational competence</strong> to navigate the complex environment of modern sport.</p>
<h2>Motivation and Stakeholder Engagement</h2>
<p>Understanding what motivates different stakeholders — athletes, administrators, sponsors, government, and the public — is essential for building consensus and driving positive outcomes. Motivated stakeholders are more likely to contribute to the organisation's mission and support governance initiatives.</p>`,
  },
  m2: {
    title: 'Governance Processes',
    content: `<h2>The Governance Process Framework</h2>
<p>Governance processes are the formal and informal mechanisms through which decisions are made, implemented, and reviewed within sport organisations. These processes ensure consistency, fairness, and accountability across all levels of operation.</p>
<h2>Key Governance Processes</h2>
<ul>
  <li><strong>Decision-making</strong> — how boards arrive at collective decisions (voting, consensus)</li>
  <li><strong>Meeting management</strong> — agendas, minutes, quorum, and reporting</li>
  <li><strong>Delegation</strong> — assigning authority to sub-committees or staff</li>
  <li><strong>Reporting</strong> — upward and downward information flows</li>
  <li><strong>Review and evaluation</strong> — assessing performance and outcomes</li>
  <li><strong>Conflict resolution</strong> — managing disputes between stakeholders</li>
</ul>
<blockquote>Process is the backbone of governance. Without clear processes, even the best intentions can lead to poor outcomes.</blockquote>
<h2>Policy vs. Operational Decisions</h2>
<p>Boards should focus on <strong>policy-level decisions</strong> (what should be done and why) while delegating <strong>operational decisions</strong> (how things are done) to management. Blurring this line is one of the most common governance failures in sport organisations.</p>
<h2>Continuous Improvement</h2>
<p>Governance processes should be regularly reviewed and updated. Best practices evolve, and organisations that fail to adapt their processes risk becoming inefficient or non-compliant with new regulatory requirements.</p>`,
  },
  m3: {
    title: 'Developing Strategy and Policy in Sport',
    content: `<h2>What is a Sports Policy?</h2>
<p>A <strong>sports policy</strong> is a formal statement of intent that guides how a government or organisation approaches sport. It sets priorities, allocates resources, and establishes the framework for programme delivery. In Zimbabwe, the <em>National Sports Policy</em> provides the overarching direction for all sporting activity.</p>
<h2>Key Elements of Sports Policy</h2>
<ul>
  <li><strong>Mass participation</strong> — promoting sport for all citizens regardless of ability</li>
  <li><strong>High performance</strong> — supporting elite athletes to compete internationally</li>
  <li><strong>Infrastructure</strong> — developing and maintaining sports facilities</li>
  <li><strong>Funding model</strong> — how sport is financed (government, private sector, grants)</li>
  <li><strong>Institutional framework</strong> — roles of ministries, federations, and committees</li>
</ul>
<h2>Strategic Planning for Sport Organisations</h2>
<p>A strategic plan translates policy into action. A typical 4-year plan aligned with the Olympic cycle includes:</p>
<ol>
  <li><strong>Situational analysis</strong> — SWOT assessment of the organisation</li>
  <li><strong>Vision and mission</strong> — what the organisation aims to achieve</li>
  <li><strong>Strategic objectives</strong> — measurable goals (e.g., qualify 5 athletes for the Olympics)</li>
  <li><strong>Action plans</strong> — programmes, timelines, and responsible persons</li>
  <li><strong>Monitoring & evaluation</strong> — tracking progress and adapting as needed</li>
</ol>
<blockquote>"A goal without a plan is just a wish." — Strategic planning is what separates vision from results.</blockquote>`,
  },
  m4: {
    title: 'Power, Politics and Ethics',
    content: `<h2>Understanding Power in Sport Governance</h2>
<p>Power in sport governance refers to the ability of individuals, groups, or organisations to influence decisions and control resources. Understanding how power operates is essential for navigating the political landscape of sport.</p>
<h2>Forms of Power in Sport</h2>
<ul>
  <li><strong>Positional power</strong> — authority derived from one's role or title</li>
  <li><strong>Expert power</strong> — influence based on knowledge and skills</li>
  <li><strong>Resource power</strong> — control over funding, facilities, or media access</li>
  <li><strong>Network power</strong> — influence through relationships and alliances</li>
  <li><strong>Moral power</strong> — authority derived from respect and ethical standing</li>
</ul>
<h2>Politics in Sport Governance</h2>
<p>Politics is an inherent part of sport governance. Board members must learn to navigate political dynamics while maintaining ethical standards. This includes managing coalitions, negotiating with government bodies, and dealing with competing interests within the organisation.</p>
<blockquote>"The fight for ethics in sport is a fight for the soul of sport itself." — Thomas Bach, IOC President</blockquote>
<h2>Ethical Standards in Governance</h2>
<p>Ethical governance requires more than compliance with rules. It involves cultivating a culture of integrity where decisions are made transparently, conflicts of interest are managed proactively, and the welfare of all stakeholders — especially athletes — is prioritised.</p>`,
  },
  m5: {
    title: 'Organizational Structure and Governance Implications',
    content: `<h2>Governance Structures in Sport</h2>
<p>Sport organisations can take many structural forms, each with different governance implications. The most common structures include voluntary boards, executive-led models, and hybrid approaches that combine elected and appointed leadership.</p>
<h2>Types of Organisational Structures</h2>
<ul>
  <li><strong>Membership associations</strong> — governed by elected representatives of member bodies</li>
  <li><strong>Company limited by guarantee</strong> — corporate structure with a board of directors</li>
  <li><strong>Trust-based structures</strong> — governed by trustees with fiduciary responsibilities</li>
  <li><strong>Government agencies</strong> — state-run or state-funded sport bodies</li>
  <li><strong>Hybrid models</strong> — combining elements of multiple structures</li>
</ul>
<h2>Governance Implications of Structure</h2>
<p>The organisational structure directly affects:</p>
<ol>
  <li>Who has decision-making authority</li>
  <li>How accountability flows</li>
  <li>The balance between professional and volunteer leadership</li>
  <li>How stakeholders participate in governance</li>
  <li>The organisation's ability to adapt to change</li>
</ol>
<blockquote>Structure is not neutral. It shapes power, accountability, and the very culture of an organisation.</blockquote>
<h2>Zimbabwe's Sport Structure</h2>
<p>Zimbabwe's sports ecosystem includes the <strong>Zimbabwe Olympic Committee (ZOC)</strong> as the apex body, national sports associations, provincial structures, and club-level organisations. Each layer has distinct governance responsibilities and reporting lines that must be clearly defined.</p>`,
  },
  m6: {
    title: 'Compliance, Risk Management and Change',
    content: `<h2>Regulatory Compliance in Sport Governance</h2>
<p>Compliance refers to the obligation of sport organisations to adhere to applicable laws, regulations, codes, and standards. For sport organisations in Zimbabwe, this spans national legislation, international sport regulations, and organisational constitutions.</p>
<h2>Key Compliance Areas</h2>
<ul>
  <li><strong>World Anti-Doping Code (WADA)</strong> — mandatory for Olympic participation</li>
  <li><strong>Sport and Recreation Commission Act</strong> — Zimbabwe's national legislation</li>
  <li><strong>Olympic Charter</strong> — the foundational document of the Olympic Movement</li>
  <li><strong>International Federation statutes</strong> — rules set by each sport's global body</li>
  <li><strong>Financial regulations</strong> — auditing, procurement, and reporting standards</li>
</ul>
<h2>Risk Management</h2>
<p>Risk management involves identifying, assessing, and mitigating threats to the organisation. In sport governance, key risks include:</p>
<ol>
  <li><strong>Financial risks</strong> — funding shortfalls, mismanagement, fraud</li>
  <li><strong>Reputational risks</strong> — scandals, poor performance, public criticism</li>
  <li><strong>Legal risks</strong> — litigation, regulatory breaches, contract disputes</li>
  <li><strong>Operational risks</strong> — event failure, staff turnover, systems breakdown</li>
  <li><strong>Strategic risks</strong> — loss of relevance, declining participation</li>
</ol>
<h2>Managing Change</h2>
<p>Sport organisations must be able to adapt to changing circumstances — new regulations, technological shifts, evolving stakeholder expectations. Effective change management requires clear communication, stakeholder buy-in, and phased implementation.</p>`,
  },
  m7: {
    title: 'Board Governance and Communication',
    content: `<h2>The Board as a Governance Body</h2>
<p>The board is the highest decision-making body in a sport organisation. Its effectiveness depends on the quality of its members, the clarity of its processes, and the strength of its relationships with management and stakeholders.</p>
<h2>Board Composition and Diversity</h2>
<ul>
  <li><strong>Skills diversity</strong> — legal, financial, marketing, sport-specific expertise</li>
  <li><strong>Gender diversity</strong> — ensuring meaningful representation of women</li>
  <li><strong>Generational diversity</strong> — blending experience with fresh perspectives</li>
  <li><strong>Stakeholder representation</strong> — athletes, coaches, administrators</li>
  <li><strong>Independent directors</strong> — bringing external, unbiased viewpoints</li>
</ul>
<blockquote>"Diversity in governance is not just about fairness — it produces better decisions."</blockquote>
<h2>Communication in Governance</h2>
<p>Effective communication is essential for good governance. The board must:</p>
<ol>
  <li>Communicate clearly with management about expectations and decisions</li>
  <li>Report transparently to members, athletes, and the public</li>
  <li>Engage proactively with government and funding bodies</li>
  <li>Maintain constructive relationships with international federations</li>
  <li>Handle crisis communication swiftly and honestly</li>
</ol>
<h2>Board Meetings and Decision-Making</h2>
<p>Board decisions are typically made by majority vote at properly convened meetings. Minutes must be kept, and conflicts of interest must be declared and recorded. Understanding <strong>Robert's Rules of Order</strong> or similar meeting procedures is essential for effective participation.</p>`,
  },
  m8: {
    title: 'Metrics, Evaluation and the Future of Governance',
    content: `<h2>Measuring Governance Performance</h2>
<p>Governance effectiveness must be measured and evaluated. Without metrics, organisations cannot know whether their governance practices are improving or declining. Evaluation provides the basis for continuous improvement and accountability.</p>
<h2>Key Governance Metrics</h2>
<ul>
  <li><strong>Board performance</strong> — attendance, participation, decision quality</li>
  <li><strong>Financial health</strong> — budget adherence, audit outcomes, reserves</li>
  <li><strong>Stakeholder satisfaction</strong> — surveys of members, athletes, staff</li>
  <li><strong>Compliance rate</strong> — adherence to regulations and deadlines</li>
  <li><strong>Strategic progress</strong> — achievement of objectives against timelines</li>
  <li><strong>Diversity indicators</strong> — representation across gender, age, background</li>
</ul>
<h2>Evaluation Frameworks</h2>
<p>Several tools exist for evaluating governance:</p>
<ol>
  <li><strong>Self-assessment questionnaires</strong> — boards evaluate their own performance</li>
  <li><strong>External reviews</strong> — independent consultants assess governance quality</li>
  <li><strong>Benchmarking</strong> — comparing against peer organisations</li>
  <li><strong>360-degree feedback</strong> — gathering input from all stakeholder groups</li>
</ol>
<blockquote>"What gets measured gets managed. What gets evaluated gets improved."</blockquote>
<h2>The Future of Sport Governance</h2>
<p>Emerging trends shaping the future of sport governance include:</p>
<ul>
  <li><strong>Digital transformation</strong> — technology enabling more transparent and efficient governance</li>
  <li><strong>Athlete-centred governance</strong> — giving athletes a stronger voice in decision-making</li>
  <li><strong>Sustainability</strong> — integrating environmental and social responsibility</li>
  <li><strong>Global standards</strong> — convergence toward international best practices</li>
  <li><strong>Data-driven decisions</strong> — using analytics to inform strategy and policy</li>
</ul>`,
  },
};
