import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7554Component } from './my-comp-7554.component';

describe('MyComp7554Component', () => {
  let component: MyComp7554Component;
  let fixture: ComponentFixture<MyComp7554Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7554Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7554Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
