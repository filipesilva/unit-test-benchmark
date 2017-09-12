import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7643Component } from './my-comp-7643.component';

describe('MyComp7643Component', () => {
  let component: MyComp7643Component;
  let fixture: ComponentFixture<MyComp7643Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7643Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7643Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
