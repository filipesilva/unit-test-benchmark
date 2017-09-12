import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8444Component } from './my-comp-8444.component';

describe('MyComp8444Component', () => {
  let component: MyComp8444Component;
  let fixture: ComponentFixture<MyComp8444Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8444Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8444Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
