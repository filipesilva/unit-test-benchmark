import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1922Component } from './my-comp-1922.component';

describe('MyComp1922Component', () => {
  let component: MyComp1922Component;
  let fixture: ComponentFixture<MyComp1922Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1922Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1922Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
