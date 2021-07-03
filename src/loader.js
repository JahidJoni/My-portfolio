import Loader from "react-loader-spinner";
const LoaderComp = () => {


    return (
        <section className="bg-dark">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Loader
                type="Bars"
                color="#00e991"
                height={80}
                width={80}
            />
        </div>
        </section>
    );
}
export default LoaderComp;
