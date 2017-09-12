import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8827Component } from './my-comp-8827.component';

describe('MyComp8827Component', () => {
  let component: MyComp8827Component;
  let fixture: ComponentFixture<MyComp8827Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8827Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8827Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
