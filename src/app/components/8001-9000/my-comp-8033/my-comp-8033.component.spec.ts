import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8033Component } from './my-comp-8033.component';

describe('MyComp8033Component', () => {
  let component: MyComp8033Component;
  let fixture: ComponentFixture<MyComp8033Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8033Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8033Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
