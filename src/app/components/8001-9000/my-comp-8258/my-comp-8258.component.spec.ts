import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8258Component } from './my-comp-8258.component';

describe('MyComp8258Component', () => {
  let component: MyComp8258Component;
  let fixture: ComponentFixture<MyComp8258Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8258Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
