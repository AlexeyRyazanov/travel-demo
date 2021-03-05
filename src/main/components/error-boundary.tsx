import { Component } from 'react';
// import format from 'date-fns/format';

type State = {
   error: string | null;
   hasError: boolean;
};

class ErrorBoundary extends Component<{}, State> {

   constructor(props) {
      super(props);

      this.state = {
         hasError: false,
         error: null,
      };
   }

   // @observable hasError: boolean = false;
   // @observable error: string = '';

   componentDidCatch(error, info) {
      // const timeStamp = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
      // StatApi.sendErrorReport(timeStamp, error, info);

      this.setState({
         hasError: true,
         error: `${error}`,
      });
   }

   render() {
      const { children } = this.props;

      const {
         error,
         hasError,
      } = this.state;

      if (hasError) {
         return (
            <div className="ErrorBoundary">
               {/* <h3>Что-то пошло не так</h3> */}
               <div className="p_1r br_5 b_1s215">
                  <span className="semibold">Что-то пошло не так</span>
                  <br />
                  {' '}
                  {`${error}`}
               </div>
            </div>
         );
      }

      return children;
   }
}

export default ErrorBoundary;
