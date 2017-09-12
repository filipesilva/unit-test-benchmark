import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2557Component } from './my-comp-2557.component';

describe('MyComp2557Component', () => {
  let component: MyComp2557Component;
  let fixture: ComponentFixture<MyComp2557Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2557Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2557Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
