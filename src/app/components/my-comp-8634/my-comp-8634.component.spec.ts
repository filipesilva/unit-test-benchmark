import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8634Component } from './my-comp-8634.component';

describe('MyComp8634Component', () => {
  let component: MyComp8634Component;
  let fixture: ComponentFixture<MyComp8634Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8634Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8634Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
