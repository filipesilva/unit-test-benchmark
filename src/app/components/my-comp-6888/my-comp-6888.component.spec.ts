import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6888Component } from './my-comp-6888.component';

describe('MyComp6888Component', () => {
  let component: MyComp6888Component;
  let fixture: ComponentFixture<MyComp6888Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6888Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6888Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
