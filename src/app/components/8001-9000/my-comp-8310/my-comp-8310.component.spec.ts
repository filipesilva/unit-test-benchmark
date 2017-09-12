import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8310Component } from './my-comp-8310.component';

describe('MyComp8310Component', () => {
  let component: MyComp8310Component;
  let fixture: ComponentFixture<MyComp8310Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8310Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
