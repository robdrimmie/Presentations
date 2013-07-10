When does an agile approach fit best and when would it not fit?
How do you design an agile team? 
What are the skills or personality of an effective team leader/scrum master?
How is working in a agile project different than a different development approach project? Good/bad
How do you balance multiple agile projects?
How and when would you bring in full system tests, or user experience testing
Concepts of minimum viable product and startup models based on this


OUTLINE
- Me, briefly
	- Rob Drimmie. Developing through co-op since 1994, full-time since 1999. Mostly web, but including forays into native mobile.
- Apps Factory, what we do briefly
	- Help people with ideas but no technical resources learn the application development process (not how to develop) and help them make steps to a finished application.
- Apps Factory, how we work, somewhat less briefly
	- daily standup
	- kanban board
	- weekly builds (Thursday, so we don't rush on Fridays)
	- open-source git workflow (more to come)

- Methodologies are a formal way to describe what needs to be built and to track where in the building process a project is.
- Predictive: Define everything up front, figure out how long it will take, do it.
	- Pros: Expectations clearly set on all sides. Timelines, budgets, resource needs understood.
	- Cons: Rigid, changes can really throw a wrench at it. Estimating sucks and everyone sucks at it. Unknown complications are commonplace.
- Adaptive: Figure it out as it happens.
	- Pros: Figure out what is most important *now*. Priorities change as requirements change. 
	- Cons: Unexplored dependancies can result in fragile systems. Timeline ($$) can be very unpredictable.

"Agile" is an umbrella term for adaptive methodolgies, defined in 2001 (http://agilemanifesto.org/) but around long before then.
	
- Kanban - focus on visualizing project state and respecting focus (WIP)
- XP - Pair Programming, Continuous Process, TDD
- Best known Agile is Scrum, most use the terms synonymously
	- Product Owner/Team/Scrum Master
	- stand up
	- Scrum Board
	- Sprints

- Product Owner (1)
	- The client, or advocate. Fills backlog, sets priority. Often Project Manager.

- Team (n, typically 5-7)
	- Make things
	- Cross functional, depending on project needs (dev, design, qa, writing, etc)

- Scrum Master
	- Facilitator. Keeps process running, removes blocks.
	
- Stand-up/Scrum
	- every day, at a predictable time.
	- everyone talks: What I did yesterday, What I'm going to do today, What is blocking me.
	- kanban board is updated
		- In multi-team organizations reps from each team do standups, "Scrum of Scrums"

- Kanban board
	- Vote "Artifact Most Commonly Associated with Agile", 12 years running
	- Cards traverse the board from backlog to complete, through columns representing different states, such as "To Do", "In Progress", "Testing", "Complete".
	- Offers central, visible project status available to everyone

- Sprints
	- Development cycles, typically 2-4 weeks long.
	- Start by figuring out what is going to be built
	- Conclude by reviewing what was actually built, what went right and wrong.
	- Product Owner has final say, is it done or not.

- Testing - 4 major buckets
	- Unit *
	- Integration
	- System
	- Acceptance *
* these are the ones most startups and small teams care about

- Unit
	- Does the code work?
	- For deeply important functions, ideally every possible branch and parameter (including bad ones) should be tested.
	- For most projects, 70-80% is fine.
	- Before or after is up to the team
	- New test for every filed bug

- Integration
	- Tests how systems interact, eg
		- internal functionality not exposed to unauthenticated users
		- software that depends on changed API continues to run

- System testing
	- All the moving pieces. 
	- Backups
	- Failsafes
	- etc

- Acceptance testing
	- The user agrees it is awesome. 

- Usability
	- Arguable the single most important part of any application
	- Not just end users (though mostly). APIs can be usable or not.
	- 

- What's Important
	- Have a process. Structure your development in *some* fashion and you'll be miles ahead.
	- Automated tests. Regressions suck for everyone.
	- Talk, frequently. Bad things occur when creatives go dark.
	- Show your work. Show off awesome things, get help with hard things, everyone benefits.




- step one: Have a process. Lighter IMO is better but that is not universally the case.
- 