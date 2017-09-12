import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8405Component } from './my-comp-8405.component';

describe('MyComp8405Component', () => {
  let component: MyComp8405Component;
  let fixture: ComponentFixture<MyComp8405Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8405Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
