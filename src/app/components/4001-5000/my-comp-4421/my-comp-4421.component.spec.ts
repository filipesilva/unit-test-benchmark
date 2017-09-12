import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4421Component } from './my-comp-4421.component';

describe('MyComp4421Component', () => {
  let component: MyComp4421Component;
  let fixture: ComponentFixture<MyComp4421Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4421Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4421Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
