import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4422Component } from './my-comp-4422.component';

describe('MyComp4422Component', () => {
  let component: MyComp4422Component;
  let fixture: ComponentFixture<MyComp4422Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4422Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4422Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
