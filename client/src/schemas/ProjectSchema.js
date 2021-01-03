import * as Yup from 'yup';

/**
 * Validation schema rule for project form
 */
const ProjectSchema = Yup.object().shape({
  name: Yup.string().required('Required field').max(50, 'Must be 50 characters or less').required('Required'),
  description: Yup.string().required('Required field'),
  businessGoal: Yup.string(),
  // status: Yup.object().shape({
  //   label: Yup.string().required(),
  //   value: Yup.string().required(),
  // }).required('Required field'),
  status: Yup.string().required('Required field'),
  category: Yup.string().required('Required field'),
  // category: Yup.object().shape({
  //   label: Yup.string().required(),
  //   value: Yup.string().required(),
  // }).required('Required field'),
  startDate: Yup.string().nullable(),
  endDate: Yup.string().nullable(),
  // techStacks: Yup.array()
  //   .of(
  //     Yup.object()
  //       .shape({
  //         label: Yup.string(),
  //         value: Yup.string()
  //       })
  //   ),
  techStack: Yup.array()
});

export default ProjectSchema;
