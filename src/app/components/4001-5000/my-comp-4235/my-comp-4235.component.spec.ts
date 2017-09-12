import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4235Component } from './my-comp-4235.component';

describe('MyComp4235Component', () => {
  let component: MyComp4235Component;
  let fixture: ComponentFixture<MyComp4235Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4235Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
