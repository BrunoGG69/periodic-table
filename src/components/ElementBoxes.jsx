import PropTypes from 'prop-types';

export const ElementBox = ({ atomicNumber, symbol, atomicWeight, groupName }) => {
    return (
        <div
            className={`w-20 h-20 flex flex-col items-center justify-center ${groupName} transition-all hover:scale-150 hover:border-2 hover:border-black rounded-xl`}>
            <h1 className="text-xl text-black">{atomicNumber}</h1>
            <h2 className="text-2xl font-bold text-black">{symbol}</h2>
            <p className="text-sm text-black">{atomicWeight}</p>
        </div>
    );
};

ElementBox.propTypes = {
    atomicNumber: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired,
    atomicWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    groupName: PropTypes.string.isRequired,
};

export const RadioActiveElementBox = ({ atomicNumber, symbol, atomicWeight, groupName }) => {
    return (
        <div
            className={`w-20 h-20 flex flex-col items-center justify-center ${groupName} transition-all hover:scale-150 hover:border-2 hover:border-black rounded-xl`}>
            <div className="flex items-center space-x-2">
                <h1 className="text-xl text-black">{atomicNumber}</h1>
                <span className="text-xl text-yellow-500">☢</span>
            </div>
            <h2 className="text-2xl font-bold text-black">{symbol}</h2>
            <p className="text-sm text-black">{atomicWeight}</p>
        </div>
    );
};

RadioActiveElementBox.propTypes = {
    atomicNumber: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired,
    atomicWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    groupName: PropTypes.string.isRequired,
};

export const GroupsBox = ({ groupNumber }) => {
    return (
        <div className="w-20 h-20 flex items-center justify-center number-box-group rounded-xl">
            <h1 className="text-2xl font-bold text-black">{groupNumber}</h1>
        </div>
    );
};

GroupsBox.propTypes = {
    groupNumber: PropTypes.number.isRequired,
};

export const PeriodsBox = ({ periodNumber, periodName }) => {
    return (
        <div className="w-20 h-20 flex flex-col items-center justify-center number-box-period rounded-xl">
            <h1 className="text-2xl font-bold text-black">{periodNumber}</h1>
            <p className="text-sm text-black">{periodName}</p>
        </div>
    );
};

PeriodsBox.propTypes = {
    periodNumber: PropTypes.number.isRequired,
    periodName: PropTypes.string,
};

export const BlankBox = ({ className = "", ...props }) => {
    return (
        <div className={`w-20 h-20 ${className}`} {...props}></div>
    );
};

BlankBox.propTypes = {
    className: PropTypes.string,
};