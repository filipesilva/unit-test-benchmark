import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5657Component } from './my-comp-5657.component';

describe('MyComp5657Component', () => {
  let component: MyComp5657Component;
  let fixture: ComponentFixture<MyComp5657Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5657Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5657Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
