import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4475Component } from './my-comp-4475.component';

describe('MyComp4475Component', () => {
  let component: MyComp4475Component;
  let fixture: ComponentFixture<MyComp4475Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4475Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4475Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
