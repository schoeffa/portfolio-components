import ProfileForm from '@/components/ProfileForm.vue';
import ProfileTextInput from '@/components/ProfileTextInput.vue';
import ProfileTextAreaInput from '@/components/ProfileTextAreaInput.vue';

export default {
  title: 'components/ProfileForm',
  component: ProfileForm,
  decorators: [],
  tags: ['autodocs'],
  parameters: { backgrounds: { default: 'Light' } },
  args: {
    isDarkMode: false,
    formError: 'There is an error with the values you have input.',
    formFields: [
      {
        component: ProfileTextInput,
        model: 'name',
        props: {
          label: 'Name',
          inputId: 'name-input'
        }
      },
      {
        component: ProfileTextInput,
        model: 'email',
        props: {
          label: 'email',
          inputId: 'email-input'
        }
      },
      {
        component: ProfileTextAreaInput,
        model: 'message',
        props: {
          label: 'message',
          inputId: 'message-input'
        }
      }
    ]
  }
};

export const FormLightMode = {};

export const FormDarkMode = {
  args: {
    isDarkMode: true
  },
  parameters: { backgrounds: { default: 'Dark' } }
};
