import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2647Component } from './my-comp-2647.component';

describe('MyComp2647Component', () => {
  let component: MyComp2647Component;
  let fixture: ComponentFixture<MyComp2647Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2647Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2647Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
