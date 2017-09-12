import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8197Component } from './my-comp-8197.component';

describe('MyComp8197Component', () => {
  let component: MyComp8197Component;
  let fixture: ComponentFixture<MyComp8197Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8197Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
