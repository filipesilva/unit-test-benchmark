import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp465Component } from './my-comp-465.component';

describe('MyComp465Component', () => {
  let component: MyComp465Component;
  let fixture: ComponentFixture<MyComp465Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp465Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp465Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
