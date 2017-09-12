import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2149Component } from './my-comp-2149.component';

describe('MyComp2149Component', () => {
  let component: MyComp2149Component;
  let fixture: ComponentFixture<MyComp2149Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2149Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
