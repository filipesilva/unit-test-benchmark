import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp955Component } from './my-comp-955.component';

describe('MyComp955Component', () => {
  let component: MyComp955Component;
  let fixture: ComponentFixture<MyComp955Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp955Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp955Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
