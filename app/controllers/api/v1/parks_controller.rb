class Api::V1::ParksController < ApplicationController
  def show
    park = Park.find(params[:id])

    render json: {park: park}
  end
end
