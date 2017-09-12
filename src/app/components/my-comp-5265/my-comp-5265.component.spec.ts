import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5265Component } from './my-comp-5265.component';

describe('MyComp5265Component', () => {
  let component: MyComp5265Component;
  let fixture: ComponentFixture<MyComp5265Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5265Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
