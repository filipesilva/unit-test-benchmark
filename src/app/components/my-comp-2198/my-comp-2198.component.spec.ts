import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2198Component } from './my-comp-2198.component';

describe('MyComp2198Component', () => {
  let component: MyComp2198Component;
  let fixture: ComponentFixture<MyComp2198Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2198Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
