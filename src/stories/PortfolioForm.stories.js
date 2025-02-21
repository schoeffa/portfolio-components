import PortfolioForm from '../components/PortfolioForm.vue';
import PortfolioTextInput from '../components/PortfolioTextInput.vue';
import PortfolioTextAreaInput from '../components/PortfolioTextAreaInput.vue';

export default {
  title: 'components/PortfolioForm',
  component: PortfolioForm,
  decorators: [],
  tags: ['autodocs'],
  parameters: { backgrounds: { default: 'Light' } },
  args: {
    isDarkMode: false,
    formError: 'There is an error with the values you have input.',
    formFields: [
      {
        component: PortfolioTextInput,
        model: 'name',
        props: {
          label: 'Name',
          inputId: 'name-input'
        }
      },
      {
        component: PortfolioTextInput,
        model: 'email',
        props: {
          label: 'email',
          inputId: 'email-input'
        }
      },
      {
        component: PortfolioTextAreaInput,
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
