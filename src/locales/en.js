export default {
  app: {
    name: 'REI DAO',
    desc: 'staking to node'
  },
  notify: {
    install: 'Install',
    ok: 'OK',
    no: 'NO',
    install_metamask: 'Metamask is not installed',
    connect_failed: 'Failed to connect wallet',
    wrong_network: 'The network which connected with the wallet could not match the current network, please switch the network to ',
    login: 'Connection to wallet is required'
  },
  code: {
    showAll: 'Show All'
  },
  settings: {
    language: 'Language',
    darkMode: 'Dark Mode',
    light: 'Light',
    dark: 'Dark',
    auto: 'Auto'
  },
  account: {
    title: 'Account',
    unlock: 'Unlock Wallet',
    connect: 'Select A Wallet',
    connected_with: 'Connected with ',
    copy_address: 'Copy Address',
    copied: 'Copied',
    pending_txs: '{count} Pending|{count} Pendings',
    view_on_etherscan: 'View on Block Explorer',
    tip: 'Your transactions will appear here...',
    rencent_txs: 'Rencent Transactions',
    clear_all: 'clear all'
  },
  txs: {
    stake: 'Staking {amount}{symbol} to {to}',
    startunstake: 'Start Unstake {amount}{symbol} to {to}',
    startclaim: 'Start claim reward {amount}{symbol} to {to}',
    setrate: 'Set CommissionRate to {amount}%',
    unstake: 'Unstake {amount}{symbol} to {to}',
    deposit: 'Staking {amount}{symbol} to {to}',
    withdraw: 'withdraw {amount}{symbol} to {to}'
  },
  stake: {
    node_list: 'Validator List',
    set_commission_rate: 'Set Commission Rate',
    stake_to_other_node: 'Voting to Validator',
    index: 'Index',
    node: 'Validator',
    voting_power: 'Voting Power',
    share_balance: 'Commission Share',
    operation: 'Operation',
    staking: 'Voting',
    claim: 'Start Unstake',
    get_reward: 'Get Reward',
    staking_info: 'Voting info',
    amount: 'Amount',
    address: 'Address',
    btn_submit: 'Submit',
    btn_cancel: 'Cancel',
    claim_info: 'Unstake info',
    commonnsion_share_balance:'Commission share balance: ',
    estimate_receive: 'Estimate receive ',
    reward_info: 'Reward info',
    reward_balance: 'Reward balance: ',
    commission_rate: 'Commission rate: ',
    last_update_time: 'Last update time: ',
    active_nodelist: 'Active Validator',
    not_active_nodelist: 'Inactive Validator',
    max: 'Max',
    approve: 'Approve',
    wallet_balance: 'Balance',
    tips_voting_to_invalidate: 'Nodes that have more than {minIndexVotingPower} votes will be included in the inactive list',
    tips_claim_info: 'Note: {unstakeDelay} after the redemption operation is initiated, you can receive it on the redemption page'

  },
  msg: {
    please_input_number: 'Please enter the number',
    please_input_1_100_num: 'Please enter an integer from 1-100',
    please_input_amount: 'Please input amount',
    please_input_correct_num: 'Please enter the correct number',
    please_input_address: 'Please enter the address',
    please_input_not_zero: 'Please enter a number greater than 0',
    days: ' days',
    hour: ' hour',
    minute: 'minute',
    neterror:'Network Error'
  },
  unstake:{
    title: 'Pending Unstake',
    list_title: 'Pending Unstake list',
    node: 'Node',
    create_time: 'Create time',
    unstake_available: 'Available Time',
    shares: 'Unstake Shares',
    get_value: 'Unstake Value',
    status: 'Status',
    opertion: 'Opertion',
    gettitle: 'Unstake',
    retrieve: 'Retrieved',
    not_retrieve: 'Not retrieved'
  },
  stakeforgas:{
    title: 'Gas Stake',
    list_title: 'Resources',
    address_resource: 'Resources of {address}',
    daily_free_fee: 'Daily Free Fee',
    left_crude: 'Left CRUDE',
    usage_crude: 'CRUDE used',
    stake_coin: 'Total Staked',
    left_free_fee: 'Left Free Fee',
    vesting_status: 'Vesting status',
    withdraw: 'Withdraw',
    stake_more: 'Stake more',
    stake_info: 'Stake Info',
    withdraw_info: 'Withdraw Info',
    estimate_withdraw: 'Estimated coin withdrawal'
  }
};
