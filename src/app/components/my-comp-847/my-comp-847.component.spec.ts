import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp847Component } from './my-comp-847.component';

describe('MyComp847Component', () => {
  let component: MyComp847Component;
  let fixture: ComponentFixture<MyComp847Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp847Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp847Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
