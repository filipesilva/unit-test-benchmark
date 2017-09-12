import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5025Component } from './my-comp-5025.component';

describe('MyComp5025Component', () => {
  let component: MyComp5025Component;
  let fixture: ComponentFixture<MyComp5025Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5025Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
