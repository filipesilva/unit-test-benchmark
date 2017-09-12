import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7140Component } from './my-comp-7140.component';

describe('MyComp7140Component', () => {
  let component: MyComp7140Component;
  let fixture: ComponentFixture<MyComp7140Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7140Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
