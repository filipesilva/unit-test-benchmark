import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8750Component } from './my-comp-8750.component';

describe('MyComp8750Component', () => {
  let component: MyComp8750Component;
  let fixture: ComponentFixture<MyComp8750Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8750Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8750Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
