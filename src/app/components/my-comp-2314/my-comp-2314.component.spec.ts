import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2314Component } from './my-comp-2314.component';

describe('MyComp2314Component', () => {
  let component: MyComp2314Component;
  let fixture: ComponentFixture<MyComp2314Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2314Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
