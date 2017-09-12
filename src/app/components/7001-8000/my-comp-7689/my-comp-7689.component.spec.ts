import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7689Component } from './my-comp-7689.component';

describe('MyComp7689Component', () => {
  let component: MyComp7689Component;
  let fixture: ComponentFixture<MyComp7689Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7689Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7689Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
