import React from 'react'

export const CartTableHeader = () => (
    <thead>
        <tr>
            <th className="qty">Cant</th>
            <th className="description">Product</th>
            <th className="unit-price">Price</th>
            <th className="subtotal">Total</th>
            <th className="actions"></th>
        </tr>
    </thead>
)