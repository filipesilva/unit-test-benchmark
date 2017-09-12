import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp216Component } from './my-comp-216.component';

describe('MyComp216Component', () => {
  let component: MyComp216Component;
  let fixture: ComponentFixture<MyComp216Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp216Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
