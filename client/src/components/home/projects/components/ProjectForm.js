import React from 'react';
import { Formik } from 'formik';
import FormGroup from 'components/common/form';
import FormSelect from 'components/common/form/FormSelect';
import TextArea from 'components/common/form/TextArea';
import { STATUS_OPTIONS, CATEGORY_OPTIONS } from 'constants/options';
import DateSelector from 'components/common/form/DateSelector';
import ProjectSchema from 'schemas/ProjectSchema';
import * as projectService from 'services/project';
import history from 'utils/history';
import * as routes from 'constants/routes';
import CreatableMulti from 'components/common/form/CreatableSelect';

const ProjectForm = (props) => {
  const { data, id } = props;

  const statusOptions = STATUS_OPTIONS.map(status => {
    return {
      label: status,
      value: status
    }
  });
  const categoryOptions = CATEGORY_OPTIONS.map(category => {
    return {
      label: category,
      value: category
    }
  });

  const handleFormSubmit = async values => {
    try {
      if(id){
        await projectService.updateProject(values);
        history.goBack();
      }else{
        await projectService.addProject(values);
        history.push(routes.PROJECTS);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Formik enableReinitialize initialValues={data} validationSchema={ProjectSchema} onSubmit={handleFormSubmit}>
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          setFieldTouched,
          setFieldError,
        } = props;
        return (
          <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col col-8-md">
                  <FormGroup
                    name="name"
                    value={values.name}
                    label="Project Name"
                    placeholder="Project Name"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    error={touched.name && errors.name}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col col-8-md">
                  <TextArea
                    name="description"
                    value={values.description}
                    label="Project Description"
                    placeholder="Project Description"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    error={touched.description && errors.description}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col col-8-md">
                  <TextArea
                    name="businessGoal"
                    value={values.businessGoal}
                    label="Business Goal"
                    placeholder="Business Goal"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    error={touched.businessGoal && errors.businessGoal}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col col-8-md">
                  <CreatableMulti
                    name="techStacks"
                    value={values.techStack_value}
                    label="Technology Stacks"
                    handleChange={e => {
                      let tech = e && e.map(tech => { 
                        return tech.target.value;
                      })
                      let techStack_value = e && e.map(tech => {
                        let properties = {
                          label: tech.target.label,
                          value: tech.target.value
                        }
                        return properties;
                      })
                      console.log('TECHSTACK_VALUES => ',values.techStack_value);
                      console.log('TECH => ',tech);
                      setFieldValue('techStacks', tech);
                      setFieldValue('techStack_value', techStack_value);
                      setFieldError('techStacks', '');
                    }}
                    handleBlur={setFieldTouched}
                    placeholder="Add Technology Stacks"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col col-4-md col-6">
                  <FormSelect
                    name="status"
                    value={values.status_value}
                    label="Project Status"
                    placeholder="Add Project Status"
                    handleChange={e => {
                      setFieldValue('status', e.target.value);
                      setFieldValue('status_value', { label: e.target.value, value: e.target.value });
                      setFieldError('status', '');
                    }}

                    handleBlur={handleBlur}
                    options={statusOptions}
                    error={touched.status && errors.status}
                  />
                </div>
                <div className="col col-4-md col-6">
                  <FormSelect
                    name="category"
                    label="Category"
                    placeholder="Add Category"
                    value={values.category_value}
                    handleChange={e => {
                      setFieldValue('category', e.target.value);
                      setFieldValue('category_value', { label: e.target.value, value: e.target.value });
                      setFieldError('category', '');
                    }}
                    handleBlur={handleBlur}
                    options={categoryOptions}
                    error={touched.category && errors.category}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col col-4-md col-6">
                  <DateSelector
                    name="startDate"
                    label="Start Date"
                    value={values.startDate}
                    placeholderText="Select Start Date"
                    handleChange={handleChange}
                    error={touched.startDate && errors.startDate}
                  />
                </div>
                <div className="col col-4-md col-6">
                  <DateSelector
                    name="endDate"
                    label="End Date"
                    value={values.endDate}
                    placeholderText="Select End Date"
                    handleChange={handleChange}
                    error={touched.endDate && errors.endDate}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn--blue"
                disabled={!dirty || isSubmitting}
              >{id ? 'Update' : 'Create Project'}</button>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default ProjectForm;
