import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9388Component } from './my-comp-9388.component';

describe('MyComp9388Component', () => {
  let component: MyComp9388Component;
  let fixture: ComponentFixture<MyComp9388Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9388Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9388Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
