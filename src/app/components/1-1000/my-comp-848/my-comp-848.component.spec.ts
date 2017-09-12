import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp848Component } from './my-comp-848.component';

describe('MyComp848Component', () => {
  let component: MyComp848Component;
  let fixture: ComponentFixture<MyComp848Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp848Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp848Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
