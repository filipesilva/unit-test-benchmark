import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2903Component } from './my-comp-2903.component';

describe('MyComp2903Component', () => {
  let component: MyComp2903Component;
  let fixture: ComponentFixture<MyComp2903Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2903Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2903Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
