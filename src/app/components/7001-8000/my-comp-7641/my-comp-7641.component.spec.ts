import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7641Component } from './my-comp-7641.component';

describe('MyComp7641Component', () => {
  let component: MyComp7641Component;
  let fixture: ComponentFixture<MyComp7641Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7641Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7641Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
