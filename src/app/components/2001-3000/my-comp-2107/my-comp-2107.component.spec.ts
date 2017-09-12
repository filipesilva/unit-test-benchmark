import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2107Component } from './my-comp-2107.component';

describe('MyComp2107Component', () => {
  let component: MyComp2107Component;
  let fixture: ComponentFixture<MyComp2107Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2107Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
