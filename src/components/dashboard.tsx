// Dashboard.jsx
import React from "react";

/* --- Tiny inline SVG icons (self-contained, accessible) --- */
const Icon = ({ children }: { children: React.ReactNode }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="inline-block"
  >
    {children}
  </svg>
);

const HomeIcon = () => (
  <Icon>
    <path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V11.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

const HeartIcon = () => (
  <Icon>
    <path d="M20.8 7.3a4.9 4.9 0 0 0-6.9 0L12 9.2l-1.9-1.9a4.9 4.9 0 0 0-6.9 6.9L12 21l8.8-6.8a4.9 4.9 0 0 0 0-6.9z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

const TrophyIcon = () => (
  <Icon>
    <path d="M8 4h8v3a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V4zM6 5H4a1 1 0 0 0-1 1v2a4 4 0 0 0 4 4h0M18 5h2a1 1 0 0 1 1 1v2a4 4 0 0 1-4 4h0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 14v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </Icon>
);

const UserIcon = () => (
  <Icon>
    <path d="M20 21v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

const SettingsIcon = () => (
  <Icon>
    <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.4 15a1 1 0 0 0 .2 1.1l.05.05a2 2 0 0 1-2.8 2.8l-.05-.05a1 1 0 0 0-1.1-.2 7 7 0 0 1-2.5.6 7 7 0 0 1-2.5-.6 1 1 0 0 0-1.1.2l-.05.05a2 2 0 0 1-2.8-2.8l.05-.05a1 1 0 0 0 .2-1.1 7 7 0 0 1-.6-2.5 7 7 0 0 1 .6-2.5 1 1 0 0 0-.2-1.1l-.05-.05a2 2 0 0 1 2.8-2.8l.05.05a1 1 0 0 0 1.1.2 7 7 0 0 1 2.5-.6 7 7 0 0 1 2.5.6 1 1 0 0 0 1.1-.2l.05-.05a2 2 0 0 1 2.8 2.8l-.05.05a1 1 0 0 0-.2 1.1 7 7 0 0 1 .6 2.5 7 7 0 0 1-.6 2.5z" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

const LogOutIcon = () => (
  <Icon>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 17l5-5-5-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 12H9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

/* ---------------- Dashboard Component ---------------- */
export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-gray-200 p-5 flex flex-col justify-between">
        <div>
          <div className="mb-6">
            <input
              className="w-full bg-white border border-gray-300 rounded px-2 py-1 text-sm font-semibold"
              value="LangMaster"
              readOnly
            />
          </div>

          <nav className="space-y-3">
            <button className="flex items-center w-full px-4 py-3 bg-white rounded-xl shadow">
              <HomeIcon /> <span className="ml-3 font-medium">Dashboard</span>
            </button>

            <button className="flex items-center w-full px-4 py-3 rounded-xl hover:bg-gray-300">
              <HeartIcon /> <span className="ml-3">Practice</span>
            </button>

            <button className="flex items-center w-full px-4 py-3 rounded-xl hover:bg-gray-300">
              <TrophyIcon /> <span className="ml-3">Achievements</span>
            </button>

            <button className="flex items-center w-full px-4 py-3 rounded-xl hover:bg-gray-300">
              <UserIcon /> <span className="ml-3">My Profile</span>
            </button>
          </nav>
        </div>

        <div className="space-y-3">
          <button className="flex items-center w-full px-4 py-3 rounded-xl hover:bg-gray-300">
            <SettingsIcon /> <span className="ml-3">Settings</span>
          </button>
          <button className="flex items-center w-full px-4 py-3 rounded-xl hover:bg-gray-300">
            <LogOutIcon /> <span className="ml-3">Logout</span>
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-extrabold">Good evening, Alex!</h1>
            <p className="text-sm text-gray-600 mt-1">Level 5</p>
          </div>

          <div className="flex items-center space-x-4">
            <button className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">⚡</button>
            <img src="https://via.placeholder.com/48" alt="profile" className="w-12 h-12 rounded-full object-cover" />
          </div>
        </header>

        {/* Progress */}
        <section className="mb-6">
          <h2 className="text-base font-semibold mb-3">Your Progress</h2>
          <div className="flex items-center space-x-4">
            {[0,1,2,3].map(i => (
              <div key={i} className="h-16 w-16 rounded-full bg-gray-300 overflow-hidden flex-shrink-0" />
            ))}
            <button className="h-16 w-16 rounded-full bg-black text-white flex items-center justify-center">View</button>
          </div>
        </section>

        {/* Skill Assessment */}
        <section className="mb-6">
          <div className="bg-gray-200 rounded-xl p-4 flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Skill Assessment</h3>
              <p className="text-sm text-gray-700">Evaluate your language skills!</p>
            </div>
            <button className="px-4 py-2 bg-white rounded-full shadow">Start Test</button>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="mb-6">
          <h3 className="font-semibold mb-3">Recent Activity</h3>
          <div className="bg-gray-200 rounded-xl p-4 flex justify-between items-center">
            <div>
              <p className="font-medium">Spanish</p>
              <p className="text-sm text-gray-700">Level 3</p>
            </div>
            <button className="px-4 py-2 bg-white rounded-full shadow">Start</button>
          </div>
        </section>

        {/* Activities */}
        <section>
          <h3 className="font-semibold mb-3">Activities</h3>
          <div className="flex items-center space-x-6">
            {["Reading","Listening","Grammar","Skill Review"].map((a) => (
              <div key={a} className="flex flex-col items-center">
                <div className="h-16 w-16 rounded-full bg-gray-300 flex items-center justify-center">●</div>
                <div className="text-sm mt-2">{a}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="w-72 p-6">
        <div className="bg-gray-200 rounded-xl p-4 mb-6">
          <h4 className="font-semibold">Today's Challenge</h4>
          <p className="text-sm text-gray-700 my-3">Complete your daily tasks!</p>
          <button className="w-full py-2 bg-white rounded-full shadow">Get Started</button>
        </div>

        <div>
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-semibold">Leaderboard</h4>
            <button className="text-xs bg-black text-white px-2 py-1 rounded-full">See All</button>
          </div>

          <ul className="space-y-2">
            {[
              { name: "Jordan", points: 4500 },
              { name: "Sophie", points: 3200 },
              { name: "Liam", points: 2800 },
              { name: "You", points: 500 }
            ].map((u, i) => (
              <li key={u.name} className="flex justify-between items-center bg-gray-200 px-3 py-2 rounded-full">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-gray-300" />
                  <div>
                    <div className="text-sm font-medium">#{i+1} {u.name}</div>
                  </div>
                </div>
                <div className="text-sm">{u.points} pts.</div>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}



    
   
   
 
    
  
  