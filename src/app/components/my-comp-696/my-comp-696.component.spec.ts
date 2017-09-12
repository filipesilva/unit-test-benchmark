import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp696Component } from './my-comp-696.component';

describe('MyComp696Component', () => {
  let component: MyComp696Component;
  let fixture: ComponentFixture<MyComp696Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp696Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp696Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
