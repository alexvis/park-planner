class ParksController < ApplicationController
  def show
    @id = params[:id]

    if (params[:park] != '')
      @parks = Park.search(params[:park])
    else
      @parks = []
    end
  end
end
