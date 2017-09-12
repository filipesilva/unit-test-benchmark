import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5165Component } from './my-comp-5165.component';

describe('MyComp5165Component', () => {
  let component: MyComp5165Component;
  let fixture: ComponentFixture<MyComp5165Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5165Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
