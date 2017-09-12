import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8141Component } from './my-comp-8141.component';

describe('MyComp8141Component', () => {
  let component: MyComp8141Component;
  let fixture: ComponentFixture<MyComp8141Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8141Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
