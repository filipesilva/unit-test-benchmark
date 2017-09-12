import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8418Component } from './my-comp-8418.component';

describe('MyComp8418Component', () => {
  let component: MyComp8418Component;
  let fixture: ComponentFixture<MyComp8418Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8418Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8418Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
