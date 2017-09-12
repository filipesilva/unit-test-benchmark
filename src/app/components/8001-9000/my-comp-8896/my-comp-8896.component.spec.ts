import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8896Component } from './my-comp-8896.component';

describe('MyComp8896Component', () => {
  let component: MyComp8896Component;
  let fixture: ComponentFixture<MyComp8896Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8896Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8896Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
