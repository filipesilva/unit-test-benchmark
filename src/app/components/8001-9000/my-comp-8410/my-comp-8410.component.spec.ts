import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8410Component } from './my-comp-8410.component';

describe('MyComp8410Component', () => {
  let component: MyComp8410Component;
  let fixture: ComponentFixture<MyComp8410Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8410Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
