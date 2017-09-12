import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2121Component } from './my-comp-2121.component';

describe('MyComp2121Component', () => {
  let component: MyComp2121Component;
  let fixture: ComponentFixture<MyComp2121Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2121Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
