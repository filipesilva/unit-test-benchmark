import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6080Component } from './my-comp-6080.component';

describe('MyComp6080Component', () => {
  let component: MyComp6080Component;
  let fixture: ComponentFixture<MyComp6080Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6080Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6080Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
