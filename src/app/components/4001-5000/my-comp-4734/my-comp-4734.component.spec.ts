import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4734Component } from './my-comp-4734.component';

describe('MyComp4734Component', () => {
  let component: MyComp4734Component;
  let fixture: ComponentFixture<MyComp4734Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4734Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4734Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
