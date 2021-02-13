import * as Yup from 'yup';

/**
 * Validation schema rule for project form
 */
const ProjectSchema = Yup.object().shape({
  name: Yup.string().required('Required field').max(50, 'Must be 50 characters or less').required('Required'),
  description: Yup.string().required('Required field'),
  businessGoal: Yup.string(),
  status: Yup.string().required('Required field'),
  category: Yup.string().required('Required field'),
  startDate: Yup.string().nullable(),
  endDate: Yup.string().nullable(),
  techStack: Yup.array()
});

export default ProjectSchema;
