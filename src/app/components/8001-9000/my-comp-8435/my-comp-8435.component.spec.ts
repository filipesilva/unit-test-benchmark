import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8435Component } from './my-comp-8435.component';

describe('MyComp8435Component', () => {
  let component: MyComp8435Component;
  let fixture: ComponentFixture<MyComp8435Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8435Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8435Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
