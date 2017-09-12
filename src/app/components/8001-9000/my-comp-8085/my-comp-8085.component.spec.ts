import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8085Component } from './my-comp-8085.component';

describe('MyComp8085Component', () => {
  let component: MyComp8085Component;
  let fixture: ComponentFixture<MyComp8085Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8085Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8085Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
