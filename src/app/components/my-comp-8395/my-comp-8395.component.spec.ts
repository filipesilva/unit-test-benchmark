import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8395Component } from './my-comp-8395.component';

describe('MyComp8395Component', () => {
  let component: MyComp8395Component;
  let fixture: ComponentFixture<MyComp8395Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8395Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
