import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6947Component } from './my-comp-6947.component';

describe('MyComp6947Component', () => {
  let component: MyComp6947Component;
  let fixture: ComponentFixture<MyComp6947Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6947Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6947Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
