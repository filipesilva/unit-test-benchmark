import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8547Component } from './my-comp-8547.component';

describe('MyComp8547Component', () => {
  let component: MyComp8547Component;
  let fixture: ComponentFixture<MyComp8547Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8547Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8547Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
