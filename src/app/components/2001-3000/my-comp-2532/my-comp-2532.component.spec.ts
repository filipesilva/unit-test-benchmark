import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2532Component } from './my-comp-2532.component';

describe('MyComp2532Component', () => {
  let component: MyComp2532Component;
  let fixture: ComponentFixture<MyComp2532Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2532Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2532Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
