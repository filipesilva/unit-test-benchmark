import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1864Component } from './my-comp-1864.component';

describe('MyComp1864Component', () => {
  let component: MyComp1864Component;
  let fixture: ComponentFixture<MyComp1864Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1864Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1864Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
