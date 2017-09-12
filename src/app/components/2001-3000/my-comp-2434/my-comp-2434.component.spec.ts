import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2434Component } from './my-comp-2434.component';

describe('MyComp2434Component', () => {
  let component: MyComp2434Component;
  let fixture: ComponentFixture<MyComp2434Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2434Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2434Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
