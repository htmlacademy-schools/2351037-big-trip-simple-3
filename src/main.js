import BoardPresenter from './presenter/board-presenter';
import RoutePointsModel from './model/route-point-model';
import DestinationModel from './model/destination-model';

const mainContainer = document.querySelector('.trip-events');
const routePointsModel = new RoutePointsModel();
const destinationModel = new DestinationModel();
const boardPresenter = new BoardPresenter(mainContainer, routePointsModel, destinationModel);

boardPresenter.init();
