import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8666Component } from './my-comp-8666.component';

describe('MyComp8666Component', () => {
  let component: MyComp8666Component;
  let fixture: ComponentFixture<MyComp8666Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8666Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8666Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
