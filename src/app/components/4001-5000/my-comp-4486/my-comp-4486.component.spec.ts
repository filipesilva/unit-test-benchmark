import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4486Component } from './my-comp-4486.component';

describe('MyComp4486Component', () => {
  let component: MyComp4486Component;
  let fixture: ComponentFixture<MyComp4486Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4486Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4486Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
