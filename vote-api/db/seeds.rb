poll = Poll.create!(title: "Яку мову ви вважаєте найкращою для початківців?")
poll.votes.create!(option: "Ruby")
poll.votes.create!(option: "JavaScript")
poll.votes.create!(option: "Python")

poll2 = Poll.create!(title: "Яку систему контролю версій ви віддаєте перевагу?")
poll2.votes.create!(option: "Git")
poll2.votes.create!(option: "Mercurial")
poll2.votes.create!(option: "SVN")

poll3 = Poll.create!(title: "Який редактор коду ви використовуєте найчастіше?")
poll3.votes.create!(option: "VS Code")
poll3.votes.create!(option: "Windsurf")
poll3.votes.create!(option: "Vim")

poll4 = Poll.create!(title: "Який інструмент для тестування ви використовуєте?")
poll4.votes.create!(option: "RSpec")
poll4.votes.create!(option: "Jest")
poll4.votes.create!(option: "JUnit")

poll5 = Poll.create!(title: "Який пакетний менеджер ви використовуєте найчастіше?")
poll5.votes.create!(option: "npm")
poll5.votes.create!(option: "yarn")
poll5.votes.create!(option: "pip")
