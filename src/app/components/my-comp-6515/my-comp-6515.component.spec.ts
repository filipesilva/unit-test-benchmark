import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6515Component } from './my-comp-6515.component';

describe('MyComp6515Component', () => {
  let component: MyComp6515Component;
  let fixture: ComponentFixture<MyComp6515Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6515Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6515Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
