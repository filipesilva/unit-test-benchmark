import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2906Component } from './my-comp-2906.component';

describe('MyComp2906Component', () => {
  let component: MyComp2906Component;
  let fixture: ComponentFixture<MyComp2906Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2906Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2906Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
