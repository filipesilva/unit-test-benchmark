import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7333Component } from './my-comp-7333.component';

describe('MyComp7333Component', () => {
  let component: MyComp7333Component;
  let fixture: ComponentFixture<MyComp7333Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7333Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
