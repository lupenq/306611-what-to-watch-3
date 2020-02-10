// Это сделано для того, чтобы каждый раз не писать адаптер в файлах тестов,
// не импортировать реакт и другие необходимые библиотеки.


import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

window.React = require(`react`);
window.PropTypes = require(`prop-types`);
window.renderer = require(`react-test-renderer`);
window.Enzyme = require(`enzyme`);


Enzyme.configure({adapter: new Adapter()});
