import { deleteItem } from '../api';

export default function ItemList({ items, onRefresh }) {
const handleDelete = async (id) => {
try {
await deleteItem(id);
onRefresh();
} catch (err) {
console.error('Error deleting item:', err);
alert('Failed to delete item');
}
};

return (
<div>
<h2>Items</h2>
{items && items.length > 0 ? (
items.map(item => (
<div key={item._id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem', borderRadius: '5px' }}>
<h3>{item.name}</h3>
<p>{item.description}</p>
<p><strong>Price: ${item.price}</strong></p>
<p><strong>Extra Info: {item.extrainfo}</strong></p>
<button onClick={() => handleDelete(item._id)} style={{ padding: '0.5rem 1rem', backgroundColor: '#ff3b5c', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Delete</button>
</div>
))
) : (
<p>No items found. Add one to get started!</p>
)}
</div>
);
}