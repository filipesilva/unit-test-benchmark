import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8830Component } from './my-comp-8830.component';

describe('MyComp8830Component', () => {
  let component: MyComp8830Component;
  let fixture: ComponentFixture<MyComp8830Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8830Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8830Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
