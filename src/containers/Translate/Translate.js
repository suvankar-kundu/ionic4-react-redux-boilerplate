import React from 'react';
import { Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { changeLocale } from './actions';

class Translate extends React.Component {
  constructor(props) {
    super(props);
    this.handleLocaleChange = this.handleLocaleChange.bind(this);
  }

  handleLocaleChange(event) {
    const { onLocaleChange } = this.props;
    onLocaleChange(event.target.value);
  }

  render() {
    return (
      /* Bring language options from api */
      <div className="row">
        <Label for="exampleSelect" className="col-md-4">
          <FormattedMessage id="app.changeLang" description="change language" />
        </Label>
        <Input
          type="select"
          name="select"
          id="exampleSelect"
          className="col-md-4"
          onChange={this.handleLocaleChange}>
          <option value="en">English</option>
          <option value="de">Dutch</option>
        </Input>
      </div>
    );
  }
}

const mapStateToProps = state => ({ locale: state.locale });

const mapDispatchToProps = {
  onLocaleChange: data => changeLocale(data)
};

Translate.propTypes = {
  onLocaleChange: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Translate);
