import ProfileModal from '../components/ProfileModal.vue';
import '../styles/ProfileModal.scss';

export default {
  title: 'components/ProfileModal',
  component: ProfileModal,
  decorators: [],
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'Light' },
    slots: {
      default: {
        description: 'Default slot content',
        template:
          '<h2>Default Slot Content</h2><p>Bacon ipsum dolor amet cupim shank jerky t-bone venison flank pig pork leberkas. Shankle kevin jowl alcatra, spare ribs t-bone buffalo pancetta fatback short ribs ham ground round chicken. Corned beef ribeye short ribs porchetta pancetta boudin capicola tail tongue andouille tenderloin pastrami buffalo alcatra tri-tip. Bresaola tenderloin spare ribs shank strip steak turducken pastrami andouille shoulder jerky jowl t-bone short ribs. Strip steak ham frankfurter rump, prosciutto pork chop doner alcatra swine pancetta short ribs.\n' +
          '\n' +
          'Swine bresaola meatball chuck. Strip steak spare ribs short ribs meatball, corned beef venison tail porchetta flank. Pancetta fatback chicken flank jowl. Pork belly sirloin ham hock shankle pastrami swine short ribs frankfurter chicken. Ball tip t-bone landjaeger, flank chuck chicken leberkas boudin. Spare ribs chicken swine venison, beef pork shank.\n' +
          '\n' +
          'Beef ribs jowl t-bone short ribs boudin pork short loin, jerky biltong. Meatloaf kielbasa sausage turkey landjaeger short ribs bresaola chicken. Kevin ham boudin drumstick. Ribeye venison meatball drumstick bacon leberkas hamburger ham short loin.</p>'
      }
    }
  },
  args: { isVisible: true }
};

export const ModalLightMode = {
  args: {
    isDarkMode: false
  }
};

export const ModalDarkMode = {
  args: {
    isDarkMode: true
  }
};
