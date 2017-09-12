import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8814Component } from './my-comp-8814.component';

describe('MyComp8814Component', () => {
  let component: MyComp8814Component;
  let fixture: ComponentFixture<MyComp8814Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8814Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8814Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
