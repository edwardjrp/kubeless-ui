
const nodeFunction = `
module.exports = {
  <<HANDLER>>: function(req, res) {
     res.end("Hello World");
  }
};
`

const pythonFunction = `
def <<HANDLER>>():
    return "Hello World"
`

const rubyFunction = `
class Kubelessfunction
    def self.run(request)
        puts "Hello Wordl"
    end
end
`

export default [
  { value: 'nodejs6.10',
    label: 'NodeJS (6.10)',
    language: 'javascript',
    supportDeps: true,
    depsFilename: 'package.json',
    defaultFunction: nodeFunction
  },
  { value: 'ruby2.4',
    label: 'Ruby (2.4)',
    language: 'ruby',
    supportDeps: true,
    depsFilename: 'Gemfile',
    defaultFunction: rubyFunction
  },
  { value: 'python27',
    label: 'Python (27)',
    language: 'python',
    supportDeps: true,
    depsFilename: 'requirements.txt',
    defaultFunction: pythonFunction
  }
]
