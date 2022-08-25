// SPDX-License-Identifier: MIT
pragma solidity 0.6.6;

interface IMigratorChef {
    // Perform LP token migration from legacy PanperiodSwap to PeriodSwap.
    // Take the current LP token address and return the new LP token address.
    // Migrator should have full access to the caller's LP token.
    // Return the new LP token address.
    //
    // XXX Migrator must have allowance access to PanperiodSwap LP tokens.
    // PeriodSwap must mint EXACTLY the same amount of PeriodSwap LP tokens or
    // else something bad will happen. Traditional Defipool does not
    // do that so be careful!
    function migrate(IBEP20 token) external returns (IBEP20);
}
