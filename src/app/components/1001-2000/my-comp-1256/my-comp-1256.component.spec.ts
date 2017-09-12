import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1256Component } from './my-comp-1256.component';

describe('MyComp1256Component', () => {
  let component: MyComp1256Component;
  let fixture: ComponentFixture<MyComp1256Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1256Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
