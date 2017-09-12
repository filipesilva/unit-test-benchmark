import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1712Component } from './my-comp-1712.component';

describe('MyComp1712Component', () => {
  let component: MyComp1712Component;
  let fixture: ComponentFixture<MyComp1712Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1712Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1712Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
