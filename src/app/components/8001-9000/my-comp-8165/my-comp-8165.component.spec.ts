import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8165Component } from './my-comp-8165.component';

describe('MyComp8165Component', () => {
  let component: MyComp8165Component;
  let fixture: ComponentFixture<MyComp8165Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8165Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
