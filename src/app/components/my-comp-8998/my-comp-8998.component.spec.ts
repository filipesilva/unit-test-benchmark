import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8998Component } from './my-comp-8998.component';

describe('MyComp8998Component', () => {
  let component: MyComp8998Component;
  let fixture: ComponentFixture<MyComp8998Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8998Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8998Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
