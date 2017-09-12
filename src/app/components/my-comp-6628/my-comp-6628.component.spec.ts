import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6628Component } from './my-comp-6628.component';

describe('MyComp6628Component', () => {
  let component: MyComp6628Component;
  let fixture: ComponentFixture<MyComp6628Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6628Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6628Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
