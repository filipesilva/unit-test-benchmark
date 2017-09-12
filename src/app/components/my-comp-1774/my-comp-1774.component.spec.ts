import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1774Component } from './my-comp-1774.component';

describe('MyComp1774Component', () => {
  let component: MyComp1774Component;
  let fixture: ComponentFixture<MyComp1774Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1774Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1774Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
