import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8089Component } from './my-comp-8089.component';

describe('MyComp8089Component', () => {
  let component: MyComp8089Component;
  let fixture: ComponentFixture<MyComp8089Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8089Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8089Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
