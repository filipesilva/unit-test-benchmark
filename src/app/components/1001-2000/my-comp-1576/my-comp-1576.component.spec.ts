import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1576Component } from './my-comp-1576.component';

describe('MyComp1576Component', () => {
  let component: MyComp1576Component;
  let fixture: ComponentFixture<MyComp1576Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1576Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1576Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
