import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5933Component } from './my-comp-5933.component';

describe('MyComp5933Component', () => {
  let component: MyComp5933Component;
  let fixture: ComponentFixture<MyComp5933Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5933Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5933Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
