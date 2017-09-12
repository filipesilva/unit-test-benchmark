import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp122Component } from './my-comp-122.component';

describe('MyComp122Component', () => {
  let component: MyComp122Component;
  let fixture: ComponentFixture<MyComp122Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp122Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
