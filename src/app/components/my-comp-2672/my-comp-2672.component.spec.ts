import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2672Component } from './my-comp-2672.component';

describe('MyComp2672Component', () => {
  let component: MyComp2672Component;
  let fixture: ComponentFixture<MyComp2672Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2672Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2672Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
