import Route from '@ember/routing/route';
import ENV from 'super-rentals/config/environment';

export default class IndexRoute extends Route {
  async model() {
    console.log(ENV)
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': ENV.rapidApi.RAPID_API_KEY,
        'X-RapidAPI-Host': ENV.rapidApi.RAPID_API_HOST,
      },
    };

    let response = await fetch(
      'https://zillow-com1.p.rapidapi.com/propertyExtendedSearch?location=santa%20monica%2C%20ca&status_type=ForRent&home_type=Houses',
      options
    );
    let { props, totalResultCount } = await response.json();
    console.log(props, totalResultCount);
    return props;
  }
}
