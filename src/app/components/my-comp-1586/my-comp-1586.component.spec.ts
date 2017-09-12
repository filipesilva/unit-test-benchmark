import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1586Component } from './my-comp-1586.component';

describe('MyComp1586Component', () => {
  let component: MyComp1586Component;
  let fixture: ComponentFixture<MyComp1586Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1586Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1586Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
