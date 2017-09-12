import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp239Component } from './my-comp-239.component';

describe('MyComp239Component', () => {
  let component: MyComp239Component;
  let fixture: ComponentFixture<MyComp239Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp239Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
