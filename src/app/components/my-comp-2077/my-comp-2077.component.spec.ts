import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2077Component } from './my-comp-2077.component';

describe('MyComp2077Component', () => {
  let component: MyComp2077Component;
  let fixture: ComponentFixture<MyComp2077Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2077Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2077Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
