import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8535Component } from './my-comp-8535.component';

describe('MyComp8535Component', () => {
  let component: MyComp8535Component;
  let fixture: ComponentFixture<MyComp8535Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8535Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8535Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
