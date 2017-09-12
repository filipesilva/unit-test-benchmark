import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6018Component } from './my-comp-6018.component';

describe('MyComp6018Component', () => {
  let component: MyComp6018Component;
  let fixture: ComponentFixture<MyComp6018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
