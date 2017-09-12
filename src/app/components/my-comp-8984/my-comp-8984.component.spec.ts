import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8984Component } from './my-comp-8984.component';

describe('MyComp8984Component', () => {
  let component: MyComp8984Component;
  let fixture: ComponentFixture<MyComp8984Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8984Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8984Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
