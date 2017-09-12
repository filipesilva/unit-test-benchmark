import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1826Component } from './my-comp-1826.component';

describe('MyComp1826Component', () => {
  let component: MyComp1826Component;
  let fixture: ComponentFixture<MyComp1826Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1826Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1826Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
