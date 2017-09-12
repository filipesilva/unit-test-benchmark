import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8407Component } from './my-comp-8407.component';

describe('MyComp8407Component', () => {
  let component: MyComp8407Component;
  let fixture: ComponentFixture<MyComp8407Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8407Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8407Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
