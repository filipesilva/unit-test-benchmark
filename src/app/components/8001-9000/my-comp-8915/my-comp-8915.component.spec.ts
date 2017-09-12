import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8915Component } from './my-comp-8915.component';

describe('MyComp8915Component', () => {
  let component: MyComp8915Component;
  let fixture: ComponentFixture<MyComp8915Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8915Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8915Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
