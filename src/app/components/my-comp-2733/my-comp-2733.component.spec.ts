import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2733Component } from './my-comp-2733.component';

describe('MyComp2733Component', () => {
  let component: MyComp2733Component;
  let fixture: ComponentFixture<MyComp2733Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2733Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2733Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
