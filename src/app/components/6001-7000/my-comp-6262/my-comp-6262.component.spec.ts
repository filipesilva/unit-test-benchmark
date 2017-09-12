import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6262Component } from './my-comp-6262.component';

describe('MyComp6262Component', () => {
  let component: MyComp6262Component;
  let fixture: ComponentFixture<MyComp6262Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6262Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
