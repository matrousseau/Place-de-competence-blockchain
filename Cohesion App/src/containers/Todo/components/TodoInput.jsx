import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import {
  Button, ButtonToolbar, Modal,
} from 'reactstrap';
import PlusIcon from 'mdi-react/PlusIcon';
import classNames from 'classnames';
import { ThemeProps } from '../../../shared/prop-types/ReducerProps';

const priorityOptions = [
  { value: 'high', label: 'Haute' },
  { value: 'medium', label: 'Moyenne' },
  { value: 'low', label: 'Faible' },
];

const todoSidebarImg = `${process.env.PUBLIC_URL}/img/sidebar_img.svg`;

class TodoInput extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    togglePriorityFilter: PropTypes.func.isRequired,
    theme: ThemeProps.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      priority: 'low',
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState(prevState => ({ modal: !prevState.modal }));
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value,
    });
  }

  handlePriorityChange(event) {
    this.setState({
      priority: event.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addTodo } = this.props;
    const { title, description, priority } = this.state;

    if (title !== '') {
      this.toggle();
      addTodo(title, description, priority);
      this.setState({
        title: '',
        description: '',
        priority: { value: 'low', label: 'Low' },
      });
    }
  }

  handlePriorityFilterChange(event) {
    const { togglePriorityFilter } = this.props;
    togglePriorityFilter(event.target.value);
  }

  render() {
    const { title, description, priority } = this.state;
    const { modal } = this.state;
    const { theme } = this.props;

    const modalClasses = classNames({
      'todo__add-modal': true,
    }, theme.className);

    return (
      <div className="todo__input-new">
        <div className="todo__sidebar">
          <img className="todo_sidebar-image" src={todoSidebarImg} alt="sidebar-img" />
          <Button className="todo__btn-add-new" onClick={this.toggle}><PlusIcon /> Nouvelle tâche</Button>
          <div className="todo__date-filter">
            <p className="title">Statut </p>
            <ul className="todo__date-filter-list">
              <li>
                <input
                  className="todo__filter-radio"
                  type="radio"
                  id="all-tasks"
                  name="date-filter"
                  value="all-tasks"
                />
                <label htmlFor="all-tasks">Toutes les tâches</label>
              </li>
              <li>
                <input
                  className="todo__filter-radio"
                  type="radio"
                  id="pedning-tasks"
                  name="date-filter"
                  value="pedning-tasks"
                />
                <label htmlFor="pedning-tasks">Tâches en cours</label>
              </li>
              <li>
                <input
                  className="todo__filter-radio"
                  type="radio"
                  id="completed-tasks"
                  name="date-filter"
                  value="completed-tasks"
                />
                <label htmlFor="completed-tasks">Tâches terminées</label>
              </li>
            </ul>
          </div>
          <div className="todo__priority-filter">
            <p className="title">Priority</p>
            <ul className="todo__priority-filter-list">
              <li>
                <input
                  className="todo__filter-radio"
                  type="radio"
                  id="priority-all"
                  name="priority-filter"
                  value=""
                  onClick={this.handlePriorityFilterChange.bind(this)}
                  defaultChecked
                />
                <label htmlFor="priority-all">Tout</label>
              </li>
              <li>
                <input
                  className="todo__filter-radio"
                  type="radio"
                  id="priority-low"
                  name="priority-filter"
                  value="low"
                  onClick={this.handlePriorityFilterChange.bind(this)}
                />
                <label htmlFor="priority-low">Faible</label>
              </li>
              <li>
                <input
                  className="todo__filter-radio"
                  type="radio"
                  id="priority-medium"
                  name="priority-filter"
                  value="medium"
                  onClick={this.handlePriorityFilterChange.bind(this)}
                />
                <label htmlFor="priority-medium">Moyenne</label>
              </li>
              <li>
                <input
                  className="todo__filter-radio"
                  type="radio"
                  id="priority-high"
                  name="priority-filter"
                  value="high"
                  onClick={this.handlePriorityFilterChange.bind(this)}
                />
                <label htmlFor="priority-high">Importante</label>
              </li>
            </ul>
          </div>
        </div>
        <Modal
          isOpen={modal}
          toggle={this.toggle}
          className={modalClasses}
        >
          <div className="form">
            <div className="form__form-group">
              <span className="form__form-group-label">Titre</span>
              <div className="form__form-group-field">
                <input
                  type="text"
                  placeholder="title.."
                  required
                  value={title}
                  onChange={this.handleTitleChange.bind(this)}
                />
              </div>
            </div>

            <div className="form__form-group">
              <span className="form__form-group-label">Description</span>
              <div className="form__form-group-field">
                <textarea
                  type="text"
                  placeholder="what to do.."
                  required
                  value={description}
                  onChange={this.handleDescriptionChange.bind(this)}
                />
              </div>
            </div>

            <div className="form__form-group">
              <span className="form__form-group-label">Urgent</span>
              <div className="form__form-group-field priority">
                <Select
                  options={priorityOptions}
                  onChange={this.handlePriorityChange}
                  defaultValue={priority}
                />
              </div>
            </div>


            <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" type="submit" onClick={this.handleSubmit}>Ajout</Button>
              <Button type="button" onClick={this.toggle}>Retour</Button>
            </ButtonToolbar>
          </div>
        </Modal>
      </div>
    );
  }
}
export default TodoInput;
