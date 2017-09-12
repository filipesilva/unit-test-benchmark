import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9337Component } from './my-comp-9337.component';

describe('MyComp9337Component', () => {
  let component: MyComp9337Component;
  let fixture: ComponentFixture<MyComp9337Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9337Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9337Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
