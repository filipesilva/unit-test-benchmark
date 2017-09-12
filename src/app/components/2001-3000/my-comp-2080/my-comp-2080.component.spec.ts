import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2080Component } from './my-comp-2080.component';

describe('MyComp2080Component', () => {
  let component: MyComp2080Component;
  let fixture: ComponentFixture<MyComp2080Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2080Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2080Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
