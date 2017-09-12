import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8285Component } from './my-comp-8285.component';

describe('MyComp8285Component', () => {
  let component: MyComp8285Component;
  let fixture: ComponentFixture<MyComp8285Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8285Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8285Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
