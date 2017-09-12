import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8682Component } from './my-comp-8682.component';

describe('MyComp8682Component', () => {
  let component: MyComp8682Component;
  let fixture: ComponentFixture<MyComp8682Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8682Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8682Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
