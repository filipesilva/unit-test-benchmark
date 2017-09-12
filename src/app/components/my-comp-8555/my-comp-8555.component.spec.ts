import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8555Component } from './my-comp-8555.component';

describe('MyComp8555Component', () => {
  let component: MyComp8555Component;
  let fixture: ComponentFixture<MyComp8555Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8555Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8555Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
