import PropTypes from "prop-types";
export default function UserSubscriptionItem({ img, name }) {
  return (
    <div
      title={name}
      className="flex px-3 items-center py-2 rounded-xl transition hover:bg-neutral-700 cursor-pointer"
    >
      <div className="pr-4">
        <img src={img} className="w-7 h-7 rounded-full" alt={name} />
      </div>
      <span className="font-semibold truncate">{name}</span>
    </div>
  );
}
UserSubscriptionItem.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
