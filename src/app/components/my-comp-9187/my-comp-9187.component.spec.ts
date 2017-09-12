import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9187Component } from './my-comp-9187.component';

describe('MyComp9187Component', () => {
  let component: MyComp9187Component;
  let fixture: ComponentFixture<MyComp9187Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9187Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
