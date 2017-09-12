import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2115Component } from './my-comp-2115.component';

describe('MyComp2115Component', () => {
  let component: MyComp2115Component;
  let fixture: ComponentFixture<MyComp2115Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2115Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
