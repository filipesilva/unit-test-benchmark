import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8836Component } from './my-comp-8836.component';

describe('MyComp8836Component', () => {
  let component: MyComp8836Component;
  let fixture: ComponentFixture<MyComp8836Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8836Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8836Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
