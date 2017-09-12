import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2215Component } from './my-comp-2215.component';

describe('MyComp2215Component', () => {
  let component: MyComp2215Component;
  let fixture: ComponentFixture<MyComp2215Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2215Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
