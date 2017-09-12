import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2096Component } from './my-comp-2096.component';

describe('MyComp2096Component', () => {
  let component: MyComp2096Component;
  let fixture: ComponentFixture<MyComp2096Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2096Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2096Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
