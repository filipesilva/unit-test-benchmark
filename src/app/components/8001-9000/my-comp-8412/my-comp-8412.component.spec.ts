import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8412Component } from './my-comp-8412.component';

describe('MyComp8412Component', () => {
  let component: MyComp8412Component;
  let fixture: ComponentFixture<MyComp8412Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8412Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
