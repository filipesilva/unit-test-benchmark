import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8187Component } from './my-comp-8187.component';

describe('MyComp8187Component', () => {
  let component: MyComp8187Component;
  let fixture: ComponentFixture<MyComp8187Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8187Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
