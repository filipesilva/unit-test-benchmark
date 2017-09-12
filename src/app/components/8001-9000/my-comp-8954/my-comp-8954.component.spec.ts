import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8954Component } from './my-comp-8954.component';

describe('MyComp8954Component', () => {
  let component: MyComp8954Component;
  let fixture: ComponentFixture<MyComp8954Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8954Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8954Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
