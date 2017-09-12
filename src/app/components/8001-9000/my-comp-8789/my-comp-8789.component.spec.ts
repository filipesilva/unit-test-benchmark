import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8789Component } from './my-comp-8789.component';

describe('MyComp8789Component', () => {
  let component: MyComp8789Component;
  let fixture: ComponentFixture<MyComp8789Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8789Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8789Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
