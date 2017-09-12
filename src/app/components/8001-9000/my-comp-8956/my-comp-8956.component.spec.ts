import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8956Component } from './my-comp-8956.component';

describe('MyComp8956Component', () => {
  let component: MyComp8956Component;
  let fixture: ComponentFixture<MyComp8956Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8956Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8956Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
