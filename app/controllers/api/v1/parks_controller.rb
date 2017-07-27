class Api::V1::ParksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Park.all
  end

  def show
    park = Park.find(params[:id])
    render json: {park: park}
  end

  def create
    data = JSON.parse(request.body.read)
    # Park.create(data)
    park = Park.new(data)
    park.save
    render json: data
  end
end
