import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp259Component } from './my-comp-259.component';

describe('MyComp259Component', () => {
  let component: MyComp259Component;
  let fixture: ComponentFixture<MyComp259Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp259Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp259Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
