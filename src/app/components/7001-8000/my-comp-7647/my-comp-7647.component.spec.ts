import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7647Component } from './my-comp-7647.component';

describe('MyComp7647Component', () => {
  let component: MyComp7647Component;
  let fixture: ComponentFixture<MyComp7647Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7647Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7647Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
