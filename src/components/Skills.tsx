import Badge from './Badge';

type SkillsProps = {
  skills: string[];
  compliance: string[];
};

const Skills = ({ skills, compliance }: SkillsProps) => (
  <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-skin-base">Core Systems and Methods</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} label={skill} />
        ))}
      </div>
    </div>
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-skin-base">Compliance and Safety</h3>
      <div className="flex flex-wrap gap-2">
        {compliance.map((item) => (
          <Badge key={item} label={item} />
        ))}
      </div>
    </div>
  </div>
);

export default Skills;

