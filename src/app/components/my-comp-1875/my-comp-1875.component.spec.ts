import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1875Component } from './my-comp-1875.component';

describe('MyComp1875Component', () => {
  let component: MyComp1875Component;
  let fixture: ComponentFixture<MyComp1875Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1875Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1875Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
