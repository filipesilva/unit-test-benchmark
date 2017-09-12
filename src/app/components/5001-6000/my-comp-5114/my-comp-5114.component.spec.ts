import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5114Component } from './my-comp-5114.component';

describe('MyComp5114Component', () => {
  let component: MyComp5114Component;
  let fixture: ComponentFixture<MyComp5114Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5114Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
