import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8592Component } from './my-comp-8592.component';

describe('MyComp8592Component', () => {
  let component: MyComp8592Component;
  let fixture: ComponentFixture<MyComp8592Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8592Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8592Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
