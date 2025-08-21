import { motion } from 'framer-motion';
import {
  FaTrophy,
  FaMedal,
  FaCode,
  FaRobot,
  FaBrain,
  FaAward,
  FaBug,
  FaProjectDiagram,
  FaLightbulb,
  FaUsers,
  FaRegHandshake,
  FaBullhorn,
} from 'react-icons/fa';

const experiences = [
  {
    title: 'Summer Research Intern',
    organization: 'Indian Space Acadmey',
    period: 'Jun 2025 – JUl 2025',
    description: (
      <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
        <li>
          🧩 Participated to{' '}
          <span className="font-semibold text-blue-600">120 hours of intensive training and project work</span> – on {' '}
          <span className="font-medium text-indigo-600">Dara-Driven Astronomy</span>
        </li>
        <li>
          💻 Engineered core features using{' '}
          <span className="font-semibold text-purple-600">python </span> and{' '}
          <span className="font-semibold text-teal-600">ML</span>
        </li>
        {/* <li>
          ⚙️ Enhanced performance of{' '}
          <span className="font-medium text-yellow-600">QGraphicsScene layouts</span> for smoother rendering
        </li>
        <li>
          🗃️ Optimized data structures with{' '}
          <span className="font-semibold text-green-700">STL</span> and integrated with a{' '}
          <span className="font-semibold text-blue-700">centralized database</span>
        </li>
        <li>
          🐞 Resolved <span className="text-red-600 font-bold">30+ bugs</span> and boosted platform stability
        </li> */}
      </ul>
    ),
    icon: FaBug,
  },
  {
    title: 'LeetCode',
    organization: 'DSA Practice',
    period: 'Ongoing',
    description: (
      <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
        <li>
          🧠 Solved <span className="font-semibold text-orange-600">500+ problems</span> on{' '}
          <a
            href="https://leetcode.com/u/Astrone_1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline hover:text-orange-600 transition duration-200"
          >
            LeetCode
          </a>{' '}
          {/* – <span className="text-orange-700 font-medium">Knight (Top 5% Worldwide)</span>, Max Rating: 1851 */}
        </li>
        {/* <li>
          🟢 Solved <span className="font-semibold text-green-600">200+ questions</span> on{' '}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline hover:text-green-700 transition duration-200"
          >
            GeeksforGeeks
          </a>{' '}
          {/* – <span className="font-medium">3★ Coder</span> */}
        {/* </li> } */}
        <li>
          ⚙️ Built a solid foundation in{' '}
          <span className="font-semibold text-purple-600">Data Structures & Algorithms</span> through daily practice
        </li>
      </ul>
    ),
    icon: FaCode,
  },
  {
    title: 'Flipkart GRiD 7.0 (2025)',
    organization: 'Software Development Track',
    period: '2025',
    description: (
      <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
        <li>
          <span className="text-green-600 font-bold">Qualified for Round 1</span> (out of Lakhs of participants)
        </li>
         <li>
          Solved <span className="font-semibold text-blue-600">complex algorithmic challenges</span> showcasing strong problem solving skills
        </li>
      </ul>
    ),
    icon: FaTrophy,
  },

//   {
//     title: 'Tata Imagination Challenge 2024',
//     organization: 'National Semi-Finalist',
//     period: '2024',
//     description: (
//       <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
//         <li>
//           <span className="text-green-600 font-bold">Top 0.1%</span> (7,118 / 312,540 participants)
//         </li>
        
//      <li>
//   Applied <span className="font-medium text-indigo-600">critical thinking and problem-solving skills</span> to thoroughly analyze various business challenges and identify potential opportunities for improvement
// </li>
// <li>
//   Prepared, presented, and formally submitted <span className="font-semibold text-teal-600">detailed business plans and innovative ideas</span> for evaluation and feedback by mentors and industry experts
// </li>

//       </ul>
//     ),
//     icon: FaLightbulb,
//   },
  {
    title: 'Internal Smart India Hackathon',
    organization: '7th Place – IIIT Bhagalpur',
    period: '2023',
    description: (
      <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
        <li>
          Built <span className="text-cyan-500 font-semibold">A Trip planner website </span> with expolring, and search features
        </li>
        <li>
          Designed <span className="font-medium text-green-600">intuitive UI/UX</span> for streamlined visitor experience
        </li>
      </ul>
    ),
    icon: FaRobot,
  },
  // {
  //   title: 'EY Techathon 5.0 (2024)',
  //   organization: 'SkillUp AI Project',
  //   period: '2024',
  //   description: (
  //     <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
  //       <li>
  //         Ranked <span className="text-green-600 font-bold">Top 1,749</span> out of 1.5L+ participants
  //       </li>
  //       <li>
  //         Built an AI-driven <span className="text-orange-500 font-semibold">personalized learning assistant</span> using GenAI frameworks
  //       </li>
  //     </ul>
  //   ),
  //   icon: FaBrain,
  // },
  // {
  //   title: 'CodeKaze by Naukri 2024',
  //   organization: 'Competitive Coding',
  //   period: '2024',
  //   description: (
  //     <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
  //       <li>
  //         Secured <span className="text-green-600 font-bold">AIR 920</span> out of 1L+ (Top 0.92%)
  //       </li>
  //       <li>
  //         Demonstrated <span className="font-medium text-blue-600">fast</span> and <span className="font-medium text-purple-600">optimized</span> problem-solving skills
  //       </li>
  //       <li>
  //         Applied advanced <span className="font-semibold text-teal-600">DSA concepts</span> to solve complex algorithmic challenges
  //       </li>
  //       <li>
  //         Optimized <span className="font-medium text-orange-500">time and space complexity</span> under strict competition constraints
  //       </li>
  //     </ul>
  //   ),
  //   icon: FaCode,
  // },
  // {
  //   title: 'Lead - ECell',
  //   organization: 'E-Cell, IIIT Bhagalpur',
  //   period: 'Jun 2023 – Nov 2023',
  //   description: (
  //     <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
  //       <li>
  //         Contributed to two <span className="font-medium text-green-600">impactful projects</span>: a one-stop solution for farmers and a college-based e-commerce platform
  //       </li>
  //       <li>
  //         Collaborated with team members to <span className="font-medium text-blue-600">brainstorm</span> and refine innovative business ideas
  //       </li>
  //       <li>
  //         Enhanced <span className="font-medium text-purple-600">pitching skills</span> via presentations and discussions promoting entrepreneurial initiatives
  //       </li>
  //       <li>
  //         Fostered <span className="font-medium text-orange-500">creativity</span> and <span className="font-medium text-teal-600">teamwork</span> driving successful project execution
  //       </li>
  //     </ul>
  //   ),
  //   icon: FaUsers,
  // },
  // {
  //   title: 'Team Member',
  //   organization: 'EBSB BOARD, IIIT Bhagalpur',
  //   period: 'Feb 2023 – Aug 2023',
  //   description: (
  //     <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
  //       <li>
  //         Engaged in <span className="font-medium text-cyan-500">community outreach</span> promoting cultural awareness and development
  //       </li>
  //       <li>
  //         Organized <span className="font-medium text-indigo-600">events</span> to celebrate cross-cultural communication and understanding
  //       </li>
  //       <li>
  //         Participated in <span className="font-medium text-green-600">team-building activities</span> enhancing collaborative efforts
  //       </li>
  //       <li>
  //         Planned <span className="font-medium text-purple-600">programs</span> facilitating intercultural dialogue and inclusivity among students
  //       </li>
  //     </ul>
  //   ),
  //   icon: FaRegHandshake,
  // },
  // {
  //   title: 'Circulation Team Lead',
  //   organization: 'Enyugma, IIIT Bhagalpur',
  //   period: 'Nov 2022 – Dec 2022',
  //   description: (
  //     <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
  //       <li>
  //         Enhanced event engagement via <span className="font-medium text-blue-600">effective social media strategies</span>
  //       </li>
  //       <li>
  //         Fostered <span className="font-medium text-purple-600">cross-functional collaboration</span> ensuring seamless promotional processes
  //       </li>
  //       <li>
  //         Maximized <span className="font-medium text-green-600">participation</span> through strategic communication
  //       </li>
  //       <li>
  //         Coordinated with <span className="font-medium text-orange-500">25+ team members</span> to drive college-wide event awareness
  //       </li>
  //       <li>
  //         Achieved <span className="font-medium text-teal-600">30% increase</span> in event attendance over previous year
  //       </li>
  //     </ul>
  //   ),
  //   icon: FaBullhorn,
  // },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-16"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent mb-2">
            Experiences & Achievements
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            From learning foundations to solving real-world challenges.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="relative max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1 }}
            className="absolute left-6 top-0 w-1 bg-gradient-to-b from-cyan-400 to-indigo-600 rounded-full"
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={item}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                className="relative flex gap-6 items-start group"
              >
                <div className="absolute -left-6 top-0 flex flex-col items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 text-white font-semibold shadow-md z-20">
                    {i + 1}
                  </div>
                  {i !== experiences.length - 1 && (
                    <div className="w-1 flex-1 bg-indigo-300 rounded-full mt-1" />
                  )}
                </div>

                <div className="ml-10 mt-1 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 shadow-md border border-cyan-200 dark:border-slate-700"
                  >
                    <exp.icon className="text-xl text-indigo-500" />
                  </motion.div>
                </div>

                <div className="ml-6 flex-1 bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 group-hover:border-cyan-300 transition-all duration-300">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent mb-1">
                    {exp.title}
                  </h3>
                  <div className="flex items-center flex-wrap gap-3 mb-3">
                    <span className="px-3 py-0.5 bg-cyan-100 dark:bg-slate-700 text-cyan-700 dark:text-cyan-400 rounded-full text-sm font-medium">
                      {exp.organization}
                    </span>
                    <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {exp.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-100/40 dark:bg-cyan-900/30 rounded-full blur-2xl opacity-40 animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-100/40 dark:bg-indigo-900/30 rounded-full blur-2xl opacity-40 animate-pulse" />
      </div>
    </section>
  );
}