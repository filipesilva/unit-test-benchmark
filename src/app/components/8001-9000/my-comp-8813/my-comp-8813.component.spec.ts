import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8813Component } from './my-comp-8813.component';

describe('MyComp8813Component', () => {
  let component: MyComp8813Component;
  let fixture: ComponentFixture<MyComp8813Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8813Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8813Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
