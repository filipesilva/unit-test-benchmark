import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9906Component } from './my-comp-9906.component';

describe('MyComp9906Component', () => {
  let component: MyComp9906Component;
  let fixture: ComponentFixture<MyComp9906Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9906Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9906Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
