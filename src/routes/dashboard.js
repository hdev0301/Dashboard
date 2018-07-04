import Loadable from 'react-loadable';

import {
  Feedback,
  HelpAndSupport,
  Library,
  Patients,
  SystemManagement,
  Therapists,
  Training,
} from 'views';

const Loading = () => {
  return <div>Loading...</div>;
};

const FeedbackComponent = Loadable({
  loader: Feedback,
  loading: Loading,
});

const HelpAndSupportComponent = Loadable({
  loader: HelpAndSupport,
  loading: Loading,
});

const LibraryComponent = Loadable({
  loader: Library,
  loading: Loading,
});

PatientsComponent = Loadable({
  loader: Patients,
  loading: Loading,
});

SystemManagementComponent = Loadable({
  loader: SystemManagement,
  loading: Loading,
});

TherapistsComponent = Loadable({
  loader: Therapists,
  loading: Loading,
});

TrainingComponent = Loadable({
  loader: Training,
  loading: Loading,
});

const dashboardRoutes = [
  {
    path: '/library',
    exact: true,
    name: 'Library',
    component: LibraryComponent,
  },
  {
    path: '/patients',
    exact: true,
    name: 'Patients',
    component: PatientsComponent,
  },
  {
    path: '/therapists',
    exact: true,
    name: 'Therapists',
    component: TherapistsComponent,
  },
  {
    path: '/training',
    exact: true,
    name: 'Training',
    component: TrainingComponent,
  },
  {
    path: '/help-support',
    exact: true,
    name: 'Help & Support',
    component: HelpAndSupportComponent,
  },
  {
    path: '/feedback',
    exact: true,
    name: 'Feedback',
    component: FeedbackComponent,
  },
  {
    path: '/system-management',
    exact: true,
    name: 'System Management',
    component: SystemManagementComponent,
  }
];

export default dashboardRoutes;
