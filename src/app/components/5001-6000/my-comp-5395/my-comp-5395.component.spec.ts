import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5395Component } from './my-comp-5395.component';

describe('MyComp5395Component', () => {
  let component: MyComp5395Component;
  let fixture: ComponentFixture<MyComp5395Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5395Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
