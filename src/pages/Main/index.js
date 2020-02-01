import React, { Component } from 'react';

import { IoMdSearch } from 'react-icons/io';

import api from '../../services/api';

import Loading from '../../components/Loading';
import FormResult from '../../components/FormResult';
import Capitals from '../../components/Capitals';

import {
  Container,
  FormWrapper,
  CapitalsWrapper,
  WhiteRow,
  SubmitButton,
  Form,
} from './styles';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.VIEW_STATE_FORM_RESULT = {
      RENDER_RESULT: 'success',
      RENDER_ERROR: 'error',
      NO_RENDER: null,
    };

    this.state = {
      inputCity: '',
      loadingCity: false,
      viewFormResult: this.VIEW_STATE_FORM_RESULT.NO_RENDER,
      cityData: {
        weather: {},
        forecast: {},
        error: {},
      },
      inputCapitals: [
        { id: '3663517', city: 'Manaus' },
        { id: '3448439', city: 'São Paulo' },
        { id: '3451190', city: 'Rio de Janeiro' },
        { id: '3469058', city: 'Brasilia' },
      ],
      capitalsData: {
        capitals: {},
        error: {},
      },
      loadingCapitals: true,
    };
  }

  async componentDidMount() {
    await this.fetchCapitals();
  }

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loadingCity: true });

    const { inputCity } = this.state;

    try {
      const [weather, forecast] = await Promise.all([
        api.get('/weather', {
          params: {
            q: inputCity,
          },
        }),
        api.get('/forecast', {
          params: {
            q: inputCity,
          },
        }),
      ]);

      this.setState({
        cityData: {
          error: {},
          weather: { ...weather },
          forecast: { ...forecast },
        },
        loadingCity: false,
        inputCity: '',
        viewFormResult: this.VIEW_STATE_FORM_RESULT.RENDER_RESULT,
      });
    } catch (error) {
      this.setState({
        cityData: {
          forecast: {},
          weather: {},
          error: { ...error.response },
        },
        loadingCity: false,
        inputCity: '',
        viewFormResult: this.VIEW_STATE_FORM_RESULT.RENDER_ERROR,
      });
    }
  };

  handleCloseButton = async () => {
    this.setState({
      cityData: {
        weather: {},
        forecast: {},
        error: {},
      },
      viewFormResult: this.VIEW_STATE_FORM_RESULT.NO_RENDER,
    });
  };

  handleInputChange = e => {
    this.setState({ inputCity: e.target.value });
  };

  // Fetch capitals from the API
  fetchCapitals = async () => {
    const { inputCapitals } = this.state;

    // Concatenate list of cities IDs separated by comma
    const capitalIdList = inputCapitals.map(capital => capital.id).join(',');

    try {
      const response = await api.get('/group', {
        params: {
          id: capitalIdList,
        },
      });

      this.setState({
        capitalsData: { ...response },
        loadingCapitals: false,
      });
    } catch (error) {
      // Reponse outside 2xx range
      this.setState({
        capitalsData: { ...error },
        loadingCapitals: false,
      });
    }
  };

  handleRetryButton = async () => {
    this.setState({ loadingCapitals: true });
    await this.fetchCapitals();
  };

  render() {
    const {
      inputCity,
      loadingCity,
      viewFormResult,
      cityData,
      capitalsData,
      loadingCapitals,
    } = this.state;

    return (
      <Container isSmallTitle={viewFormResult}>
        <header>
          <h1>Previsão do tempo</h1>
        </header>

        <FormWrapper>
          {loadingCity ? (
            <Loading />
          ) : (
            viewFormResult && (
              <FormResult
                handleCloseButton={this.handleCloseButton}
                viewFormResult={viewFormResult}
                cityData={cityData}
                VIEW_STATE_FORM_RESULT={this.VIEW_STATE_FORM_RESULT}
              />
            )
          )}

          <Form onSubmit={this.handleSubmit} isSmallTitle={viewFormResult}>
            <input
              type="text"
              placeholder="Insira aqui o nome da cidade"
              value={inputCity}
              onChange={this.handleInputChange}
            />

            <SubmitButton>
              <IoMdSearch />
            </SubmitButton>
          </Form>
        </FormWrapper>

        <WhiteRow />

        <CapitalsWrapper>
          <h2>Capitais</h2>
          {loadingCapitals ? (
            <Loading />
          ) : (
            <Capitals
              capitals={capitalsData}
              handleRetryButton={this.handleRetryButton}
            />
          )}
        </CapitalsWrapper>
      </Container>
    );
  }
}
