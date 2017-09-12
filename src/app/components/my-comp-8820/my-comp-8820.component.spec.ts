import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8820Component } from './my-comp-8820.component';

describe('MyComp8820Component', () => {
  let component: MyComp8820Component;
  let fixture: ComponentFixture<MyComp8820Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8820Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8820Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
