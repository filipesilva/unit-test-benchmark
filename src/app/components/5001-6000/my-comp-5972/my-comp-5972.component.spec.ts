import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5972Component } from './my-comp-5972.component';

describe('MyComp5972Component', () => {
  let component: MyComp5972Component;
  let fixture: ComponentFixture<MyComp5972Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5972Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5972Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
