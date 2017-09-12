import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8055Component } from './my-comp-8055.component';

describe('MyComp8055Component', () => {
  let component: MyComp8055Component;
  let fixture: ComponentFixture<MyComp8055Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8055Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8055Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
