import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8062Component } from './my-comp-8062.component';

describe('MyComp8062Component', () => {
  let component: MyComp8062Component;
  let fixture: ComponentFixture<MyComp8062Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8062Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8062Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
