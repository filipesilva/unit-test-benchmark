import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2716Component } from './my-comp-2716.component';

describe('MyComp2716Component', () => {
  let component: MyComp2716Component;
  let fixture: ComponentFixture<MyComp2716Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2716Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2716Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
