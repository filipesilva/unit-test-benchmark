import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1698Component } from './my-comp-1698.component';

describe('MyComp1698Component', () => {
  let component: MyComp1698Component;
  let fixture: ComponentFixture<MyComp1698Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1698Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1698Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
