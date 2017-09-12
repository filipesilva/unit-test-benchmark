import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6458Component } from './my-comp-6458.component';

describe('MyComp6458Component', () => {
  let component: MyComp6458Component;
  let fixture: ComponentFixture<MyComp6458Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6458Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6458Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
