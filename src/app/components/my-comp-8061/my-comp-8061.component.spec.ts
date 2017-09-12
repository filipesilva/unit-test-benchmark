import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8061Component } from './my-comp-8061.component';

describe('MyComp8061Component', () => {
  let component: MyComp8061Component;
  let fixture: ComponentFixture<MyComp8061Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8061Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8061Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
