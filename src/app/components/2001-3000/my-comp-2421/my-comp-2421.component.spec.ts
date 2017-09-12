import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2421Component } from './my-comp-2421.component';

describe('MyComp2421Component', () => {
  let component: MyComp2421Component;
  let fixture: ComponentFixture<MyComp2421Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2421Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2421Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
