import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5645Component } from './my-comp-5645.component';

describe('MyComp5645Component', () => {
  let component: MyComp5645Component;
  let fixture: ComponentFixture<MyComp5645Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5645Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5645Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
