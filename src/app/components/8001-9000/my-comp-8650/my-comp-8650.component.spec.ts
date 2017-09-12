import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8650Component } from './my-comp-8650.component';

describe('MyComp8650Component', () => {
  let component: MyComp8650Component;
  let fixture: ComponentFixture<MyComp8650Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8650Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8650Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
