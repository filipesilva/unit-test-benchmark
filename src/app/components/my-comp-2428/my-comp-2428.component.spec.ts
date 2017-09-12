import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2428Component } from './my-comp-2428.component';

describe('MyComp2428Component', () => {
  let component: MyComp2428Component;
  let fixture: ComponentFixture<MyComp2428Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2428Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2428Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
