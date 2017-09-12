import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4590Component } from './my-comp-4590.component';

describe('MyComp4590Component', () => {
  let component: MyComp4590Component;
  let fixture: ComponentFixture<MyComp4590Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4590Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4590Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
