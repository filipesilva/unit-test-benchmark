import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp774Component } from './my-comp-774.component';

describe('MyComp774Component', () => {
  let component: MyComp774Component;
  let fixture: ComponentFixture<MyComp774Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp774Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp774Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
