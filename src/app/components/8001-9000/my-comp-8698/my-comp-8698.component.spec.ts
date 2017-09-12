import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8698Component } from './my-comp-8698.component';

describe('MyComp8698Component', () => {
  let component: MyComp8698Component;
  let fixture: ComponentFixture<MyComp8698Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8698Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8698Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
