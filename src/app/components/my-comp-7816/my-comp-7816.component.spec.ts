import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7816Component } from './my-comp-7816.component';

describe('MyComp7816Component', () => {
  let component: MyComp7816Component;
  let fixture: ComponentFixture<MyComp7816Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7816Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7816Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
