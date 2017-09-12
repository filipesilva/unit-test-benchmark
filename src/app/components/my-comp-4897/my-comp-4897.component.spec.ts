import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4897Component } from './my-comp-4897.component';

describe('MyComp4897Component', () => {
  let component: MyComp4897Component;
  let fixture: ComponentFixture<MyComp4897Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4897Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4897Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
