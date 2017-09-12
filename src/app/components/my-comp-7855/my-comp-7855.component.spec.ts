import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7855Component } from './my-comp-7855.component';

describe('MyComp7855Component', () => {
  let component: MyComp7855Component;
  let fixture: ComponentFixture<MyComp7855Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7855Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7855Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
