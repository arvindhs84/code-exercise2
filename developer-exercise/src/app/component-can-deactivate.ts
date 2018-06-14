import { Observable } from 'rxJs';

export interface ComponentCanDeactivate {
      canDeactivate: () => boolean | Observable<boolean>;
}
