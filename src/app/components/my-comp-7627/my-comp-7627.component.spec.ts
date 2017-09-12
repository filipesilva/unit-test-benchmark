import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7627Component } from './my-comp-7627.component';

describe('MyComp7627Component', () => {
  let component: MyComp7627Component;
  let fixture: ComponentFixture<MyComp7627Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7627Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7627Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
