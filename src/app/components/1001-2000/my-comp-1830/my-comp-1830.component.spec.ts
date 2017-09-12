import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1830Component } from './my-comp-1830.component';

describe('MyComp1830Component', () => {
  let component: MyComp1830Component;
  let fixture: ComponentFixture<MyComp1830Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1830Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1830Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
