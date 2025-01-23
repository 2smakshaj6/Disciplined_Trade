from flask import Flask, render_template, jsonify

app = Flask(__name__)

# Sample data
data = {
    'title': 'Disciplined Trade',
    'message': 'Welcome to an interactive trading app!'
}

# Routes
@app.route('/')
def index():
    # Mock data for dashboard overview
    account_summary = {
        "NetLiquidation": "$100,000.00",
        "AvailableFunds": "$50,000.00",
        "BuyingPower": "$200,000.00",
    }

    market_highlights = [
        {"symbol": "AAPL", "last": "$150.00", "change": "+1.5%", "volume": "1.2M"},
        {"symbol": "GOOGL", "last": "$2800.00", "change": "-0.5%", "volume": "800K"},
        {"symbol": "AMZN", "last": "$3500.00", "change": "+2.0%", "volume": "1.8M"},
    ]

    return render_template(
        'index.html',
        data=data,
        account_summary=account_summary,
        market_highlights=market_highlights,
        active_page='dashboard'
    )


@app.route('/about')
def about():
    return render_template('about.html', data=data, active_page='about')

@app.route('/contact')
def contact():
    return render_template('contact.html', data=data, active_page='contact')

@app.route('/market')
def market():
    # Mock market data for the Market page
    market_data = [
        {'symbol': 'AAPL', 'last': '150.00', 'bid': '149.50', 'ask': '150.50'},
        {'symbol': 'GOOGL', 'last': '2800.00', 'bid': '2795.00', 'ask': '2805.00'},
        {'symbol': 'AMZN', 'last': '3500.00', 'bid': '3495.00', 'ask': '3505.00'},
    ]
    return render_template('market.html', data=data, market_data=market_data, active_page='market')

@app.route('/account')
def account_page():
    # Mock account data for the Account page
    account_data = {
        'NetLiquidation': '100,000.00',
        'AvailableFunds': '50,000.00',
        'BuyingPower': '200,000.00',
    }
    return render_template('account.html', data=data, account_data=account_data, active_page='account')

@app.route('/market_data')
def market_data():
    # Mock market data for the Market page
    market_data = [
        {'symbol': 'AAPL', 'last': '150.00', 'bid': '149.50', 'ask': '150.50'},
        {'symbol': 'GOOGL', 'last': '2800.00', 'bid': '2795.00', 'ask': '2805.00'},
        {'symbol': 'AMZN', 'last': '3500.00', 'bid': '3495.00', 'ask': '3505.00'},
    ]
    return render_template('market_data.html', data=data, market_data=market_data, active_page='market')



@app.route('/place_order', methods=['POST'])
def place_order():
    # Simulate order placement
    return jsonify({'orderStatus': 'Submitted'})

# Error handling
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html', data=data, active_page='404'), 404

@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html', data=data, active_page='500'), 500

if __name__ == '__main__':
    app.run(debug=True)
