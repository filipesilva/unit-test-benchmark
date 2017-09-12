import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5229Component } from './my-comp-5229.component';

describe('MyComp5229Component', () => {
  let component: MyComp5229Component;
  let fixture: ComponentFixture<MyComp5229Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5229Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
