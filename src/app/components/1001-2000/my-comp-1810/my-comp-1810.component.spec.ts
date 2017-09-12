import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1810Component } from './my-comp-1810.component';

describe('MyComp1810Component', () => {
  let component: MyComp1810Component;
  let fixture: ComponentFixture<MyComp1810Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1810Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1810Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
