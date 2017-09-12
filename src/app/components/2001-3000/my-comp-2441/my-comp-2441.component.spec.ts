import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2441Component } from './my-comp-2441.component';

describe('MyComp2441Component', () => {
  let component: MyComp2441Component;
  let fixture: ComponentFixture<MyComp2441Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2441Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2441Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
