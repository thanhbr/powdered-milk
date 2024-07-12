import { isFunction } from "lodash";

const createGetServerSideProps = (callback) => {
    return async (context) => {
        try {
            const defaultProps = {};

            if (isFunction(callback)) {
                const { props, ...rest } = await callback({
                    context,
                    ...defaultProps,
                });

                return {
                    ...rest,
                    props: {
                        ...props,
                        ...defaultProps,
                    },
                };
            }

            return {
                props: defaultProps,
            };
        } catch (error) {
            // TODO: handle error
            if (process.env.NODE_ENV === "development") {
                throw error;
            }

            return {
                notFound: true,
            };
        }
    };
}

export default createGetServerSideProps;
