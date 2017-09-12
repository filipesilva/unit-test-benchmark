import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8549Component } from './my-comp-8549.component';

describe('MyComp8549Component', () => {
  let component: MyComp8549Component;
  let fixture: ComponentFixture<MyComp8549Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8549Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8549Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
