import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8142Component } from './my-comp-8142.component';

describe('MyComp8142Component', () => {
  let component: MyComp8142Component;
  let fixture: ComponentFixture<MyComp8142Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8142Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
