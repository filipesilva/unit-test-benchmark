import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8132Component } from './my-comp-8132.component';

describe('MyComp8132Component', () => {
  let component: MyComp8132Component;
  let fixture: ComponentFixture<MyComp8132Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8132Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
