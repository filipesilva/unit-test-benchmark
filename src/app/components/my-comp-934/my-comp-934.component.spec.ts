import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp934Component } from './my-comp-934.component';

describe('MyComp934Component', () => {
  let component: MyComp934Component;
  let fixture: ComponentFixture<MyComp934Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp934Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp934Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
