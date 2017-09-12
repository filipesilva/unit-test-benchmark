import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8318Component } from './my-comp-8318.component';

describe('MyComp8318Component', () => {
  let component: MyComp8318Component;
  let fixture: ComponentFixture<MyComp8318Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8318Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
