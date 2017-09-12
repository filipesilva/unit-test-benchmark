import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8863Component } from './my-comp-8863.component';

describe('MyComp8863Component', () => {
  let component: MyComp8863Component;
  let fixture: ComponentFixture<MyComp8863Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8863Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8863Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
