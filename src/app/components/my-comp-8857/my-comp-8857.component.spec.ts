import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8857Component } from './my-comp-8857.component';

describe('MyComp8857Component', () => {
  let component: MyComp8857Component;
  let fixture: ComponentFixture<MyComp8857Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8857Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8857Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
