import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8938Component } from './my-comp-8938.component';

describe('MyComp8938Component', () => {
  let component: MyComp8938Component;
  let fixture: ComponentFixture<MyComp8938Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8938Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8938Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
