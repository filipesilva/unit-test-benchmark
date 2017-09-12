import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5421Component } from './my-comp-5421.component';

describe('MyComp5421Component', () => {
  let component: MyComp5421Component;
  let fixture: ComponentFixture<MyComp5421Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5421Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5421Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
